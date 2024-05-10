import { festiQuestionType } from 'types/festi';

export const festiTypes = [
  ['D', 'DYNAMIC', 'S', 'STATIC'],
  ['V', 'VISUAL', 'A', 'AUDITORY'],
  ['C', 'CREATIVE', 'T', 'THEORETICAL'],
  ['I', 'INTROVERT', 'E', 'EXTROVERT'],
];

export const festi = [
  'DVCI',
  'DVCE',
  'DVTI',
  'DVTE',
  'DACI',
  'DACE',
  'DATI',
  'DATE',
  'SVCI',
  'SVCE',
  'SVTI',
  'SVTE',
  'SACI',
  'SACE',
  'SATI',
  'SATE',
];

export const festiContent: { [key: string]: string[] } = {
  DVCI: [
    '야외의 다양한 활동 속에서도 혼자 시간을 보내는 것을 즐기는, 창의적인 내성적인 예술가.',
    '자연의 아름다움과 조용한 실내에서의 창작이 그의 영감의 원천!',
  ],
  DVCE: [
    '모험과 활동을 즐기면서도 사람들과 소통하고 아이디어를 공유하는, 창의적이고 외향적인 활동가.',
    '새로운 경험을 통해 영감을 받고, 그 영감을 다른 이들과 나누며 세계를 더욱 풍요롭게 만드는 건 그의 취미!',
  ],
  DVTI: [
    '외부 세계의 에너지를 받아들이면서도 자신만의 작은 세계에서 책과 데이터의 해변을 탐험하는 지식의 탐험가!',
  ],
  DVTE: [
    '외부 세계의 활력을 느끼면서도 자신만의 아이디어의 세계에서 탐험을 계속하는 지식의 모험가!',
  ],
  DACI: [
    '조용한 환경에서 소리와 감정이 어우러진 작품을 창작하는 것을 즐기며, 자신만의 세계에서 소리의 마법을 펼치는 예술의 마법사!',
  ],
  DACE: [
    '다양한 소리와 이야기 속에서 영감을 받아 창의적인 아이디어를 생산하는 동시에, 그것을 다른 이들과 나누며 세계를 더욱 아름답게 만드는 예술의 화신!',
  ],
  DATI: [
    '다양한 소리와 사람들의 이야기를 들으며, 그것을 이론적으로 분석하고 다른 이들과 공유하는, 활발한 지식인.',
    '자신의 지식과 의견을 이야기하는 것을 즐기며, 그를 따라오는 이들이 많아!',
  ],
  DATE: [
    '다양한 활동과 소리 속에서 에너지를 얻으며, 사람들과 함께 지식을 나누는, 외향적인 지식인.',
    '사회적 상호작용을 통해 새로운 아이디어를 얻고, 그것을 실천하는 것이 그의 삶의 목표!',
  ],
  SVCI: [
    '조용한 곳에서 시각적 자극을 받으며 자신만의 창작물을 만들어내는, 내성적인 예술가.',
    '그의 작품은 감정과 상상력이 어우러진 예술적인 표현으로, 조용한 곳에서 그가 느끼는 감정이 담겨있어',
  ],
  SVCE: [
    '조용한 공간에서 영감을 받은 후, 외부 세계로 나와 다른 이들과 자신의 창작물을 공유하는, 외향적인 예술가.',
    '사람들과 소통하며 자신의 작품을 전시하는 것이 그의 즐거움!',
  ],
  SVTI: [
    '조용한 곳에서 시각적 자극과 이론적인 사색을 통해 자신만의 세계를 발견하는 것을 즐기며, 그의 마음속에는 무한한 아이디어의 나무가 자라고 있다!',
  ],
  SVTE: [
    '조용한 환경에서도 시각적 자극과 이론적인 사색을 통해 새로운 지식을 탐구하며, 그것을 다른 이들과 나누는 것을 즐기는, 지식의 전도사!',
  ],
  SACI: [
    '조용한 환경에서 소리와 상상력을 자극받아 창의적인 작품을 만들어내는, 내성적인 예술가.',
    '소리의 힘을 느끼면서 자신만의 세계를 창조하는 것이 그의 취미와 삶의 즐거움!',
  ],
  SACE: [
    '조용한 공간에서 영감을 받은 후, 외부에서 다른 이들과 자신의 창작물을 공유하는, 외향적인 예술가.',
    '다양한 소리와 이야기 속에서 자신만의 아름다운 작품을 만들어내는 것이 그의 삶의 의미!',
  ],
  SATI: [
    '소리의 매력과 이론적인 사색을 통해 자신만의 지식의 성당을 건설하는, 조용한 지식의 건축가!',
  ],
  SATE: [
    '다양한 소리와 이야기 속에서 지식을 습득하고, 그것을 사람들과 나누며 세계를 더욱 풍요롭게 만드는, 지식의 강령술사!',
  ],
};

export const festiQuestion: festiQuestionType[] = [
  {
    questionId: 1,
    answerA: '상대방에게 먼저 말을 거는 편이야',
    answerB: '상대방이 말을 걸면 대답하는 편이야',
    type: {
      typeA: 'E',
      typeB: 'I',
    },
  },
  {
    questionId: 2,
    answerA: '노래 듣는 걸 좋아해',
    answerB: '그림을 보는 게 좋아',
    type: {
      typeA: 'A',
      typeB: 'V',
    },
  },
  {
    questionId: 3,
    answerA: '활동적인 게 좋아',
    answerB: '가만히 즐기는 게 좋아',
    type: {
      typeA: 'D',
      typeB: 'S',
    },
  },
  {
    questionId: 4,
    answerA: '새로운 사람을 만나는 게 좋아',
    answerB: '익숙한 사람을 만나는 게 좋아',
    type: {
      typeA: 'E',
      typeB: 'I',
    },
  },
  {
    questionId: 5,
    answerA: '박물관이나 과학 센터를 방문하는 것을 즐겨',
    answerB: '미술관이나 갤러리를 방문하는 것을 즐겨',
    type: {
      typeA: 'T',
      typeB: 'C',
    },
  },
  {
    questionId: 6,
    answerA: '여러 사람과 다같이 즐기는 게 좋아',
    answerB: '혼자 즐기고 싶어',
    type: {
      typeA: 'E',
      typeB: 'I',
    },
  },
  {
    questionId: 7,
    answerA: '잔잔한 게 좋아',
    answerB: '익스트림한 게 좋아',
    type: {
      typeA: 'S',
      typeB: 'D',
    },
  },
  {
    questionId: 8,
    answerA: '베토벤이 좋아',
    answerB: '반고흐가 좋아',
    type: {
      typeA: 'A',
      typeB: 'V',
    },
  },
  {
    questionId: 9,
    answerA: '예술적인 표현을 통해 감정을 표현하는 편이야',
    answerB: '데이터를 분석하고 패턴을 찾는 편이야',
    type: {
      typeA: 'C',
      typeB: 'T',
    },
  },
  {
    questionId: 10,
    answerA: '야외에서 하는 행사가 좋아!',
    answerB: '실내가 좋지!',
    type: {
      typeA: 'D',
      typeB: 'S',
    },
  },
  {
    questionId: 11,
    answerA: '새로운 장소를 방문할 때 주변 소리에 주목해',
    answerB: '새로운 장소를 방문할 때 주변 풍경이나 디자인에 주목해',
    type: {
      typeA: 'V',
      typeB: 'A',
    },
  },
  {
    questionId: 12,
    answerA: '창의적인 아이디어를 생각하는 것이 즐거워',
    answerB: '새로운 지식을 학습하는 것이 즐거워',
    type: {
      typeA: 'C',
      typeB: 'T',
    },
  },
];
