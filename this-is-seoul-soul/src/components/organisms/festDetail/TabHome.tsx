import { festDetail } from 'types/festDetail';
import { GoLocation, GoPerson } from 'react-icons/go';
import { MdAccessTime } from 'react-icons/md';
import { FaWonSign, FaLink } from 'react-icons/fa6';
import { cls } from 'utils/cls';

interface TabHomeProps {
  fest: festDetail;
}

export const TabHome = ({ fest }: TabHomeProps) => {
  return (
    <div className={cls('p-4 px-6 flex flex-col gap-5')}>
      <div className={cls('flex items-start gap-2')}>
        <div>
          <GoLocation size={18} className={cls('mt-1 text-gray-600 stroke-1 stroke-gray-600')} />
        </div>
        <span>
          {fest.guname} {fest.place}
        </span>
      </div>
      <div className={cls('flex items-start gap-2')}>
        <div>
          <MdAccessTime size={18} className={cls('mt-1 text-gray-600 stroke-1 stroke-gray-600')} />
        </div>
        <span className={cls('font-bold')}>{fest.isContinue ? '진행중' : '미진행'}</span>
        <span id='period' className={cls('text-gray-800')}>
          {fest.startDate} ~ {fest.endDate}
        </span>
      </div>
      <div className={cls('flex items-start gap-2')}>
        <div>
          <FaWonSign size={18} className={cls('mt-1 text-gray-600')} />
        </div>
        <span>{fest.isFree}</span>
      </div>
      <div className={cls('flex items-start gap-2')}>
        <div>
          <GoPerson size={18} className={cls('mt-1 text-gray-600 stroke-1 stroke-gray-600')} />
        </div>
        <span>{fest.useTrgt}</span>
      </div>
      <div className={cls('flex items-start gap-2 break-all')}>
        <div>
          <FaLink size={18} className={cls('mt-1 text-gray-600 stroke-1 stroke-gray-600')} />
        </div>
        <p className={cls('text-blue')}>
          <a href={fest.orgLink}>{fest.orgLink}</a>
        </p>
      </div>
    </div>
  );
};
