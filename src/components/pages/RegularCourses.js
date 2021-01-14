import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegularCourse } from '../../store/reducers/regularCourse';
import applySpacesAndLineBreaksToText from '../../helper/applySpacesAndLineBreaksToText';
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
      // section title
      items.push({ type: 'title', options: ['section'], value: course.title });
      for (let j = 0; j < course.items.length; j++) {
        items.push(course.items[j]);
      }
    }
    return items;
  };

  return (  
    <main>
      <img src={data.headImage} alt="regular" width="100%" style={{ display: 'block' }}/>
      <PageFrame>
        <Title main>{data.mainTitle}</Title>
        <Title>{data.subTitle}</Title>
        {data.headText && <Text>
          {applySpacesAndLineBreaksToText(data.headText)}
        </Text>}
        {data.courses.length > 0 && <Contents items={data.courses} />}
        {data.courses.length > 0 && collectItems().map((item, i) => {
          if (item.type === 'title') {
            let small = false;
            let section = false;
            if (item.options && item.options.indexOf('small') >= 0) small = true;
            if (item.options && item.options.indexOf('section') >= 0) section = true;
            return <Title key={i} small={small} section={section}>{item.value}</Title>
          } else if (item.type === 'text') {
            return (
              <Text key={i}>
                {applySpacesAndLineBreaksToText(item.value)}
              </Text>
            );
          } else if (item.type === 'image') {
            return <Image 
              key={i} 
              src={item.value} 
              width={item.width} 
              align={item.align} />
          }
        })}
      </PageFrame>
    </main>
  );
}
 
export default RegularCourses;