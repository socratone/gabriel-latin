import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCourse } from '../../store/reducers/course';
import applySpacesAndLineBreaksToText from '../../helper/applySpacesAndLineBreaksToText';
import PageFrame from '../common/PageFrame';
import Title from '../Courses/Title';
import Text from '../Courses/Text';
import Contents from '../Courses/Contents';
import Image from '../Courses/Image';
import Apply from '../Courses/Apply';
import styles from './Courses.module.scss';

import { regularCourse, privateCourse, exams } from '../../fakeData';

const Courses = ({ category }) => {
  const [nav, setNav] = useState('');
  const [index, setIndex] = useState(0);
  const data = useSelector(state => state.ui.pages.course);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (category === 'regular') {
      setIndex(0);
      dispatch(setCourse(regularCourse));
      setNav('');
    } else if (category === 'private') {
      setIndex(0);
      dispatch(setCourse(privateCourse));
      setNav('private');
    } else if (category === 'exams') {
      setIndex(0);
      dispatch(setCourse(exams));
      setNav('exams');
    }
  }, [category]);

  useEffect(() => {
    const scroll = document.getElementById('scroll');
    if (scroll) scroll.scrollTo(0, 0);
  }, [category]);

  const changeIndex = (index) => {
    setIndex(index);
  }

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

  const showItem = (item, i, isId = true) => {
    if (item.type === 'title') return (
      <Title key={i} id={isId ? item.value : undefined}>
        {item.value}
      </Title>
    );
    else if (item.type === 'subTitle') return (
      <Title key={i} small>{item.value}</Title>
    );
    else if (item.type === 'text') return (
      <Text key={i}>{applySpacesAndLineBreaksToText(item.value)}</Text>
    );
    else if (item.type === 'image') return (
      <Image key={i} src={item.url} width={item.width} align={item.align} />
    );
    else if (item.type === 'bumper') return (
      <div key={i} style={{ height: item.value }} />
    );
  };

  const showGridItems = grids => {
    let gridItems = [];
    for (let i = 0; i < grids.length; i++) {
      const items = grids[i];
      const childrens = [];
      items.forEach((item, i) => {
        const child = showItem(item, i, false);
        childrens.push(child);
      });
      gridItems.push(<div key={i}>{childrens}</div>);
    }
    return gridItems;
  };

  return (  
    <main className={styles.courses}>
      <img src={data.headImage} alt="regular" width="100%" style={{ display: 'block' }}/>
      <PageFrame>
        {data.title && <Title main>{data.title}</Title>}
        {data.images && <div className={styles.imagesWrap}>
          {data.images.map((item, i) => showItem(item, i, false))}
        </div>}
        {data.grids && <div className={styles.gridWrap}>{showGridItems(data.grids)}</div>}
        {data.items.map((item, i) => showItem(item, i, false))}
        <Contents 
          items={data.courses} 
          index={index} 
          changeIndex={changeIndex} 
          nav={nav} />
        {getCoursesItems().map((item, i) => showItem(item, i))}
        <Apply />
      </PageFrame>
    </main>
  );
}
 
export default Courses;