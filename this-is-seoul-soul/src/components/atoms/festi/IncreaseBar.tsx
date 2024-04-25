import ProgressBar from '@ramonak/react-progress-bar';

export const IncreaseBar = ({ questionIndex }: { questionIndex: number }) => {
  return (
    <div>
      <div className='py-5 text-yellow-400 font-extrabold text-lg text-center'>FESTI 검사</div>
      <div className='border-2 border-yellow-300 rounded-full'>
        <ProgressBar
          completed={questionIndex}
          maxCompleted={12}
          baseBgColor='#ffffff'
          isLabelVisible={false}
          height='4px'
          bgColor='#FFBE16'
        />
      </div>
      <div className='text-right pt-1 text-yellow-400 font-extrabold text-sm'>
        {questionIndex}/12
      </div>
    </div>
  );
};
