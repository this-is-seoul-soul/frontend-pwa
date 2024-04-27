import { festiQuestionType } from 'types/festi';
import { cls } from 'utils/cls';

type QuestionChoiceProps = {
  question: festiQuestionType;
  setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>;
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const QuestionChoice = ({
  question,
  setSelectedTypes,
  setQuestionIndex,
}: QuestionChoiceProps) => {
  const handleSelectAnswer = (type: string) => {
    setTimeout(() => {
      setQuestionIndex((prev) => prev + 1);
    }, 300);
    setSelectedTypes((prev) => [...prev, type]);
  };

  return (
    <div
      className={cls('absolute w-full h-screen top-0 right-0 px-4 flex flex-col justify-center')}
    >
      <div className='text-2xl text-gray-800 font-black pb-4'>나는 ...</div>
      <div>
        <div
          className={cls('w-full py-2 bg-yellow-200 px-4 rounded-lg mt-6 mb-3 font-bold')}
          onClick={() => handleSelectAnswer(question.type.typeA)}
        >
          {question.answerA}
        </div>
        <div
          className='w-full py-2 bg-yellow-50 px-4 rounded-lg mb-3 font-bold'
          onClick={() => handleSelectAnswer(question.type.typeB)}
        >
          {question.answerB}
        </div>
      </div>
    </div>
  );
};
