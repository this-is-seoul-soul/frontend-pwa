import { IncreaseBar } from 'components/atoms/festi/IncreaseBar';
import { QuestionChoice } from 'components/atoms/festi/QuestionChoice';
import { FestiResult } from 'components/organisms/festiResult/FestiResult';
import { festiQuestion } from 'constants/festi';
import { useState } from 'react';
import { cls } from 'utils/cls';

export const Prosecutor = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const question = festiQuestion;

  return (
    <div className={cls('w-full h-screen px-4')}>
      {questionIndex > 11 ? (
        <div>
          <FestiResult selectedTypes={selectedTypes} />
        </div>
      ) : (
        <div>
          <IncreaseBar questionIndex={questionIndex} />
          <QuestionChoice
            question={question[questionIndex]}
            setSelectedTypes={setSelectedTypes}
            setQuestionIndex={setQuestionIndex}
          />
        </div>
      )}
    </div>
  );
};
