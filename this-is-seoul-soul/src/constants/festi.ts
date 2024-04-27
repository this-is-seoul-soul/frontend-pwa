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
  DVCI: ['', '', ''],
  DVCE: [],
  DVTI: [],
  DVTE: [],
  DACI: [],
  DACE: [],
  DATI: [],
  DATE: [],
  SVCI: [],
  SVCE: [],
  SVTI: [],
  SVTE: [],
  SACI: [],
  SACE: [],
  SATI: [],
  SATE: [],
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
