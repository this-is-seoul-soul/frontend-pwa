// import img from '../../assets/8.gif';

export default function Spinner() {
  return (
    <div>
      <div className='flex justify-center h-screen content-center'>
        <div>
          <svg className='animate-spin h-10 w-10 mr-3' viewBox='0 0 24 24'></svg>
          <div className='w-full text-center'>
            <span className='w-full h-full text-center text-2xl text-[#ffd94e] delay-700 animate-ping'>
              로딩 중...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
