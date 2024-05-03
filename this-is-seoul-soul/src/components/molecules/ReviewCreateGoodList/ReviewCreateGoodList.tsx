import { goodList } from 'constants/review';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { cls } from 'utils/cls';

export const ReviewCreateGoodList = () => {
  const { setValue } = useFormContext();
  const [selectedGoods, setSelectedGoods] = useState<number[]>([]);

  const handleGoodItem = (goodId: number) => {
    const updatedSelected = selectedGoods.includes(goodId)
      ? selectedGoods.filter((id) => id !== goodId)
      : [...selectedGoods, goodId];

    setSelectedGoods(updatedSelected);
    setValue('tag', updatedSelected);
  };

  return (
    <div className="flex flex-col gap-2 py-6">
      {goodList.map((item) => {
        return (
          <div
            key={item.goodId}
            className={cls(
              `w-full text-center py-2 rounded-lg ${
                selectedGoods.includes(item.goodId)
                  ? 'text-gray-900 border border-yellow-400 bg-yellow-50'
                  : ' text-gray-600 border border-gray-400'
              }`
            )}
            onClick={() => handleGoodItem(item.goodId)}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};
