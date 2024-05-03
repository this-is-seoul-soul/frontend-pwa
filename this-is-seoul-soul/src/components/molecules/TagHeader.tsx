import { TagBar } from 'components/atoms/reviewInfo/TagBar';
import { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { cls } from 'utils/cls';

interface TagHeaderProps {
  total: number;
  tag: {
    tag: number;
    cnt: number;
  }[];
}

export const TagHeader = ({ total, tag }: TagHeaderProps) => {
  const tagTotal = tag.reduce((sum, num) => sum + num.cnt, 0);
  const sortedTags = [...tag].sort((a, b) => b.cnt - a.cnt);
  const [visibleTags, setVisibleTags] = useState(5);

  const handleShowMore = () => {
    setVisibleTags(sortedTags.length);
  };

  const handleFold = () => {
    setVisibleTags(5);
  };

  return (
    <div className={cls('py-6 px-6')}>
      <div className={cls('font-bold text-lg pb-1')}>이런 점이 좋았어요!</div>
      <div className={cls('pb-4 text-gray-600')}>총 {total}명 참여</div>
      <div>
        {sortedTags.slice(0, visibleTags).map((tagInfo, index) => (
          <TagBar index={index} tagTotal={tagTotal} tag={tagInfo.tag} cnt={tagInfo.cnt} />
        ))}
        {sortedTags.length > 5 &&
          (visibleTags === 5 ? (
            <IoChevronDown onClick={handleShowMore} className={cls('w-full mx-auto')} size={24} />
          ) : (
            <IoChevronUp onClick={handleFold} className={cls('w-full mx-auto')} size={24} />
          ))}
      </div>
    </div>
  );
};
