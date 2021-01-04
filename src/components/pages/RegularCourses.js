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

  return (  
    <PageFrame>
      <main>
        <Title main>{data.mainTitle}</Title>
        <Title sub>{data.subTitle}</Title>
        {data.headText.map((text, i) => <Text key={i}>{text}</Text>)}
        {data.contentsItems.length > 0 && <Contents items={data.contentsItems} />}
        {data.items.map(item => {
          if (item.type === 'title') 
            return <Title key={item.id}>{item.value}</Title>
          else if (item.type === 'text') 
            return <Text key={item.id}>{item.value}</Text>
          else if (item.type === 'image') 
            return <Image 
              key={item.id} 
              src={item.value} 
              width={item.width} 
              align={item.align} />
        })}
      </main>
    </PageFrame>
  );
}
 
export default RegularCourses;