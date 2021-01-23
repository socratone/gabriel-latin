import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegularCourse } from '../../store/reducers/regularCourse';
import applySpacesAndLineBreaksToText from '../../helper/applySpacesAndLineBreaksToText';
import PageFrame from '../common/PageFrame';
import Title from '../Courses/Title';
import Text from '../Courses/Text';
import Contents from '../Courses/Contents';
import Image from '../Courses/Image';
import Apply from '../Courses/Apply';
import styles from './Courses.module.scss';

import { regularCourse } from '../../fakeData';

const RegularCourses = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.ui.pages.regularCourse);
  
  useEffect(() => {
    dispatch(setRegularCourse(regularCourse));
  }, []);

  const getCoursesItems = () => {
    let items = [];
    for (let i = 0; i < data.courses.length; i++) {
      const course = data.courses[i];
      for (let j = 0; j < course.items.length; j++) {
        items.push(course.items[j]);
      }
    }
    return items;
  };

  const showItems = (item, i) => {
    if (item.type === 'title') return (
      <Title key={i} id={item.value}>{item.value}</Title>
    );
    else if (item.type === 'subTitle') return (
      <Title key={i} small>{item.value}</Title>
    );
    else if (item.type === 'text') return (
      <Text key={i}>{applySpacesAndLineBreaksToText(item.value)}</Text>
    );
    else if (item.type === 'image') return (
      <Image key={i} src={item.value} width={item.width} align={item.align} />
    );
    else if (item.type === 'bumper') return (
      <div key={i} style={{ height: item.value }} />
    );
  }

  return (  
    <main className={styles.regularCourses}>
      <img src={data.image} alt="regular" width="100%" style={{ display: 'block' }}/>
      <PageFrame>
        <Title main>{data.title}</Title>
        {data.items.map((item, i) => showItems(item, i))}
        <Contents items={data.courses} />
        {getCoursesItems().map((item, i) => showItems(item, i))}
        <Apply />
      </PageFrame>
    </main>
  );
}
 
export default RegularCourses;