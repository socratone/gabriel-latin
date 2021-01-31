const regularCourse = {
  title: '2021년 정규 과정',
  grid: [
    [
      {
        type: 'title',
        value: 'Spring Term'
      },
      {
        type: 'text',
        value: `기간 : 2021년 3월 1일 ~ 5월 29일, 13주
과목 : Latin 1 - 1 Now open`
      }
    ],
    [
      {
        type: 'title',
        value: 'Summer Term'
      },
      {
        type: 'text',
        value: `기간 : 2021년 6월 28일 ~ 10월 2일, 13주
과목 : Latin 1 - 2`
      }
    ],
    [
      {
        type: 'title',
        value: 'Fall & Winter Term'
      },
      {
        type: 'text',
        value: `기간 : 2021년 10월 25일 ~ 2022년 2월 11일, 13주
과목 : Latin 1 - 3`
      }
    ]
  ],
  items: [
    {
      type: 'text',
      value: `** 2021년 정규과정에는 라틴어만 개설됩니다.
    고대 그리스어는 개인과정만 가능하며, 정규과정은 2022년에 개설될 예정입니다.`
    },
  ],
  image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/regular-courses/regular-head.jpg',
  courses: [
    {
      tabTitle: 'Latin 1 - 1',
      image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/regular-courses/regular-course-1-1.jpg',
      title: 'Latin (part 1):',
      description: `초급자를 위한 온라인 화상 그룹수업 (Zoom)
기간 : 2020년 3월 1일 ~ 5월 29일, 13주
제공 : 주 2회 수업 + 주 1회 튜터링 + 온라인 연습문제
​비용 : 100만원 (총 65시간)`,
      isOpen: true,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'Latin (part 1):'
        },
        {
          type: 'subTitle',
          value: `대상`
        },
        {
          type: 'text',
          value: `라틴어를 처음으로 공부해보고 싶은 분
라틴어를 공부해 본 적은 있지만 근본부터 깊게 공부하고 싶은 분
라틴어를 가르치는 선생님이지만 라틴어의 형태론, 통사론, 어휘 교수법을 Natural Method로 익히고 싶은 분`
        },
        {
          type: 'subTitle',
          value: `방법`
        },
        {
          type: 'text',
          value: `Zoom 프로그램을 이용하여 참가자들의 적극적인 참여를 통해 라틴어로 점차 의사소통하는 법을 배우게 됩니다.
능동적인 참여와 대화식 라틴어 수업의 효과를 최대화하기 위해 캠과 마이크는 가급적이면 꼭 사용하기를 권장합니다.
수업시간에 사용하는 주된 언어는 라틴어이며, 필요한 경우 한국어와 영어를 사용할 수 있습니다.`
        },
        {
          type: 'subTitle',
          value: `내용`
        },
        {
          type: 'text',
          value: `참가자들은 H. Ørberg 의 책 'Familia Romana' 의 1~13과를 바탕으로 문법과 어휘, 그리고 로마 문화에 대해 배우게 됩니다.
정규수업은 주 2회, 회당 2시간이며, 주 1회 1시간은 그룹으로 튜터링이 이루어집니다.
튜터링 시간에는 수업시간에 하지 못했던 질문이나, 본 교재 외의 다른 글 읽기, 말하기 연습을 할 수 있습니다.
제공되는 온라인 연습문제는 필수이며, 적어도 주당 3시간의 개인적인 학습시간을 권장합니다.`
        },
        {
          type: 'subTitle',
          value: `교재`
        },
        {
          type: 'text',
          value: `H. Ørberg, Lingua Latina per se illustrata: pars I: Familia Romana`
        },
        {
          type: 'subTitle',
          value: `주의`
        },
        {
          type: 'text',
          value: `최소 10명이 되어야 개강됩니다.
최소인원이 충족되지 않아 개강되지 않을 시, 수업료를 100% 환불해드립니다.`
        },
        {
          type: 'text',
          value: `수업 참가를 원하시는 분은 아래의 양식을 채워 제출해주세요. 3일 이내로 결제정보를 담은 확인 메일을 보내드립니다.`
        },
      ]
    },
    {
      tabTitle: 'Latin 1 - 2',
      image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/regular-courses/regular-course-1-2.jpg',
      title: 'Latin (part 2):',
      description: `중급자를 위한 온라인 화상 그룹수업 (Zoom)`,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'Latin (part 2):'
        }
      ]
    },
    {
      tabTitle: 'Latin 1 - 3',
      image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/regular-courses/regular-course-1-3.jpg',
      title: 'Latin (part 3):',
      description: `중급자를 위한 온라인 화상 그룹수업 (Zoom)`,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'Latin (part 3):'
        }
      ]
    },
  ],
};

const privateCourse = {
  // title: '2021년 Private Course',
  items: [
  ],
  image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/private-courses/private-head.jpg',
  courses: [
    {
      tabTitle: 'GPA',
      image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/private-courses/gpa-sat-ii.jpg',
      title: 'GPA',
      description: `국내 유일의 체계적인 SAT II 과정으로
​최고점을 받으세요!`,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'GPA'
        },
      ]
    },
    {
      tabTitle: 'AP',
      image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/private-courses/ap.jpg',
      title: 'AP',
      description: `국내 유일의 체계적인 AP Latin 과정으로
​최고점을 받으세요!`,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'AP'
        },
      ]
    },
    {
      tabTitle: 'GCSE, A/AS Level',
      image: '',
      title: 'GCSE, A/AS Level',
      description: ``,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'GCSE, A/AS Level'
        },
      ]
    },
    {
      tabTitle: 'Classical Latin',
      image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/private-courses/advanced.jpg',
      title: 'Classical Latin',
      description: `LLPSI 방법론을 이용하여
원문에 한걸음 더 가까이 가보세요!​
      
로마 역사를 라틴어로 읽고 익힙니다.`,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'Classical Latin'
        },
      ]
    },
    {
      tabTitle: ' Medieval/Church Latin',
      image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/private-courses/expert.jpg',
      title: 'Medieval/Church Latin',
      description: `LLPSI 방법론을 이용하여
라틴 문학의 정수를 느껴보세요!
      
문학 작품을 라틴어로 읽습니다.`,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'Medieval/Church Latin'
        },
      ]
    },
    {
      tabTitle: 'Ancient Greek',
      image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/private-courses/beginner-greek.jpg',
      title: 'Ancient Greek',
      description: `LLPSI 방법론을 이용하여
고대 그리스어를 경험해보세요! 
      
그리스 문화와 역사를 그리스어로 읽습니다.`,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'Ancient Greek'
        },
      ]
    },
    {
      tabTitle: 'Koine Greek',
      image: '',
      title: 'Koine Greek',
      description: ``,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'Koine Greek'
        },
      ]
    },
    {
      tabTitle: 'Class On Demand',
      image: '',
      title: 'Class On Demand',
      description: ``,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'Class On Demand'
        },
      ]
    },
    {
      tabTitle: '번역, 녹음, 영화관련 의뢰',
      image: '',
      title: '번역, 녹음, 영화관련 의뢰',
      description: ``,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: '번역, 녹음, 영화관련 의뢰'
        },
      ]
    },
  ],
};

const exams = {
  title: '2021년 ACL & NJCL Exams',
  grid: [
    [
      {
        type: 'title',
        value: 'National Latin Exam'
      },
      {
        type: 'text',
        value: `등록기간 : ~ 2월 1일
시험기간 : 2월 22일 ~ 3월 12일`
      }
    ],
    [
      {
        type: 'title',
        value: 'National Greek Exam'
      },
      {
        type: 'text',
        value: `등록기간 : ~ 2월 1일
시험기간 : 2월 22일 ~ 3월 12일`
      }
    ],
    [
      {
        type: 'title',
        value: 'National Mythology Exam'
      },
      {
        type: 'text',
        value: `등록기간 : ~ 1월 15일
시험기간 : 2월 22일 ~ 3월 5일`
      }
    ],
    [
      {
        type: 'title',
        value: 'National Classical Etymology'
      },
      {
        type: 'text',
        value: `등록기간 : 미정
시험기간 : 미정`
      }
    ],
    [
      {
        type: 'title',
        value: 'National Roman Civilization'
      },
      {
        type: 'text',
        value: `등록기간 : ~ 1월 27일
시험기간 : 2월 1일 ~ 3월 5일`
      }
    ],
    [
      {
        type: 'title',
        value: 'National Latin Vocabulary'
      },
      {
        type: 'text',
        value: `등록기간 : ~ 1월 27일
시험기간 : 2월 1일 ~ 3월 5일`
      }
    ]
  ],
  items: [
    {
      type: 'image',
      value: 'exams-title',
      url: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/exams/exams-title.png',
      width: '500px'
    }
  ],
  image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/exams/exams-head.jpg',
  courses: [
    {
      tabTitle: 'NLE',
      image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/exams/NLE.jpg',
      title: 'National Latin Exam',
      description: ``,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'National Latin Exam'
        },
      ]
    },
    {
      tabTitle: 'NGE',
      image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/exams/NGE.jpg',
      title: 'National Greek Exam',
      description: ``,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'National Greek Exam'
        },
      ]
    },
    {
      tabTitle: 'NME',
      image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/exams/NME.png',
      title: 'National Mythology Exam',
      description: ``,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'National Mythology Exam'
        },
      ]
    },
    {
      tabTitle: 'NCEE',
      image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/exams/NCEE.jpg',
      title: 'National Classical Etymology Exam',
      description: ``,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'National Classical Etymology Exam'
        },
      ]
    },
    {
      tabTitle: 'NRCE',
      image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/exams/NRCE.jpg',
      title: 'National Roman Civilization Exam',
      description: ``,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'National Roman Civilization Exam'
        },
      ]
    },
    {
      tabTitle: 'NLVE',
      image: 'https://gabriel-latin.s3.ap-northeast-2.amazonaws.com/assets/exams/NLVE.png',
      title: 'National Latin Vocabulary Exam',
      description: ``,
      isOpen: false,
      items: [
        {
          type: 'bumper',
          value: '30px'
        },
        {
          type: 'title',
          value: 'National Latin Vocabulary Exam'
        },
      ]
    },
  ],
};

export {
  regularCourse,
  privateCourse,
  exams
}