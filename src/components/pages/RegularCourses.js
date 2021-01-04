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
        <Title main>정규 과정</Title>
        <Title sub>Spring term - 15 weeks - 3 weekly lessons</Title>
        <Text>Gabriel Latin에서 만든 이 과정은 참가자가 고전 언어에 대한 보다 철저한 전문 지식과 교육 방법을 개발할 수 있도록 고안되었습니다. 서양 문명의 원래 언어를 유창하게 읽고 쓰고 말하는 법을 배우십시오. Gabriel Latin에서 만든 이 과정은 참가자가 고전 언어에 대한 보다 철저한 전문 지식과 교육 방법을 개발할 수 있도록 고안되었습니다. 서양 문명의 원래 언어를 유창하게 읽고 쓰고 말하는 법을 배우십시오.</Text>
        <Contents items={data.contentsItems} />
        <Title>1. Vivarium Novum의 방식 : 간략한 역사</Title>
        <Text>1980 년대에 남부 이탈리아의 젊은 고전가 그룹이 한 늙은 교사 주위에 모여 고전 언어의 교훈을 혁신해야 할 필요성에 대해 논의하기 시작했습니다. 전 세계의 학교와 대학에서 온 젊은이들이 라틴어와 그리스어를 공부하기 위해 수년을 보냈습니다. 우리 시대에는 거의 누구도 완전히 마스터 할 수없는 두 가지 언어입니다. 그 기간 동안 열린 토론에서 역사의 과정과 라틴어를 가르치는 기술을 분석 할 필요가 생겼습니다. 인본주의 자들은이 언어를 어떻게 배웠습니까?</Text>
        <Text>Politian, Erasmus, Vives 및 Comenius는 어떻게 가르쳤습니까? 이 연구를 위해 학생들은 현대 언어 교육의 가장 효과적인 방법을 분석했습니다. Finno-Ugric 언어의 의회 통역사가 비교적 짧은 시간에 헝가리어를 완벽하게 읽고, 쓰고, 말하는 법을 배울 수 있었지만 4 ~ 5 년의 공부 끝에 고등학생은 사전과 문법 책의 도움 없이는 가장 단순한 라틴어 텍스트도 이해할 수 없었고, 힘들게 언어를 자신의 언어로 번역 할 필요가 없었습니까? 그러나 학생들은 일주일에 4 ~ 5 시간의 수업을 받았고 최소한 개인 학습에 많은 시간을 할애했습니다.</Text>
        <Image src="https://picsum.photos/600/400" width="400px"/>
        <Title>2. Modules:</Title>
        <Text>1980 년대에 남부 이탈리아의 젊은 고전가 그룹이 한 늙은 교사 주위에 모여 고전 언어의 교훈을 혁신해야 할 필요성에 대해 논의하기 시작했습니다. 전 세계의 학교와 대학에서 온 젊은이들이 라틴어와 그리스어를 공부하기 위해 수년을 보냈습니다. 우리 시대에는 거의 누구도 완전히 마스터 할 수없는 두 가지 언어입니다. 그 기간 동안 열린 토론에서 역사의 과정과 라틴어를 가르치는 기술을 분석 할 필요가 생겼습니다. 인본주의 자들은이 언어를 어떻게 배웠습니까?</Text>
        <Text>Politian, Erasmus, Vives 및 Comenius는 어떻게 가르쳤습니까? 이 연구를 위해 학생들은 현대 언어 교육의 가장 효과적인 방법을 분석했습니다. Finno-Ugric 언어의 의회 통역사가 비교적 짧은 시간에 헝가리어를 완벽하게 읽고, 쓰고, 말하는 법을 배울 수 있었지만 4 ~ 5 년의 공부 끝에 고등학생은 사전과 문법 책의 도움 없이는 가장 단순한 라틴어 텍스트도 이해할 수 없었고, 힘들게 언어를 자신의 언어로 번역 할 필요가 없었습니까? 그러나 학생들은 일주일에 4 ~ 5 시간의 수업을 받았고 최소한 개인 학습에 많은 시간을 할애했습니다.</Text>
        <Image src="https://picsum.photos/480/320" width="400px" align="center" />
      </main>
    </PageFrame>
  );
}
 
export default RegularCourses;