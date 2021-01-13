import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegularCourse } from '../../store/reducers/regularCourse';
import PageFrame from '../common/PageFrame';
import Title from '../Courses/Title';
import Text from '../Courses/Text';
import Contents from '../Courses/Contents';
import Image from '../Courses/Image';

import { regularCourse } from '../../fakeData';

const RegularCourses = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.ui.pages.regularCourse);
  
  useEffect(() => {
    dispatch(setRegularCourse(regularCourse));
  }, []);

  const collectItems = () => {
    let items = [];
    for (let i = 0; i < data.courses.length; i++) {
      const course = data.courses[i];
      items.push({ type: 'title', value: course.title });
      for (let j = 0; j < course.items.length; j++) {
        items.push(course.items[j]);
      }
    }
    return items;
  };

  return (  
    <PageFrame>
      <main>
        <Title main>{data.mainTitle}</Title>
        <Title sub>{data.subTitle}</Title>
        {data.headText && <Text>{data.headText}</Text>}
        {data.courses.length > 0 && <Contents items={data.courses} />}
        {data.courses.length > 0 && collectItems().map((item, i) => {
          if (item.type === 'title') 
            return <Title key={i}>{item.value}</Title>
          else if (item.type === 'text') 
            return <Text key={i}>{item.value}</Text>
          else if (item.type === 'image') 
            return <Image 
              key={i} 
              src={item.value} 
              width={item.width} 
              align={item.align} />
        })}
      </main>
    </PageFrame>
  );
}
 
export default RegularCourses;