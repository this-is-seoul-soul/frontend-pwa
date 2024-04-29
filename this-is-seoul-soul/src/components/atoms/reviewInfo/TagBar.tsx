import ProgressBar from '@ramonak/react-progress-bar';
import { goodList, tagColor } from 'constants/review';
import { cls } from 'utils/cls';

export const TagBar = ({
  index,
  tagTotal,
  tag,
  cnt,
}: {
  index: number;
  tagTotal: number;
  tag: number;
  cnt: number;
}) => {
  const bgColor = index >= tagColor.length ? tagColor[tagColor.length - 1] : tagColor[index];

  return (
    <div className={cls('pb-1')}>
      <div className="relative rounded-full px-2">
        <ProgressBar
          completed={cnt}
          maxCompleted={tagTotal}
          baseBgColor="#EEEEEE"
          isLabelVisible={false}
          height="40px"
          bgColor={bgColor}
        />
        <div className={cls('absolute inset-0 flex items-center')}>
          <div className={cls('pl-10 text-mg')}>"{goodList[tag].label}"</div>
        </div>
        <div className={cls('absolute inset-0 flex items-center justify-end pr-10')}>{cnt}</div>
      </div>
    </div>
  );
};
