import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { heartPage, homePage, mapPage, myPage } from '../../constants/pathname';
import { GoHomeFill, GoBookmarkFill, GoPersonFill } from 'react-icons/go';
import { IoMap } from 'react-icons/io5';
import React from 'react';

interface TabItem {
  label: string;
  path: string;
  icon: (props: React.SVGProps<SVGSVGElement> & { size?: number }) => JSX.Element;
}

const tabItems: TabItem[] = [
  { label: homePage.label, path: homePage.path, icon: GoHomeFill },
  { label: mapPage.label, path: mapPage.path, icon: IoMap },
  { label: heartPage.label, path: heartPage.path, icon: GoBookmarkFill },
  { label: myPage.label, path: myPage.path, icon: GoPersonFill },
];

export const BottomTabNavigation = ({ label }: { label: string }) => {
  const [value, setValue] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedTab = tabItems.find((item) => item.label === label);
    if (selectedTab) {
      setValue(tabItems.indexOf(selectedTab));
    }
  }, [label]);

  const navigateToMenuPage = (index: number) => {
    navigate(tabItems[index].path);
    setValue(index);
  };

  return (
    <>
      {label === '축제 추천' || label === '주변' || label === '저장' || label === 'MY' ? (
        <div className='fixed z-50 bottom-0 left-0 right-0 m-auto w-full max-w-[500px] flex bg-white p-3 border border-gray-400 rounded-t-xl'>
          {tabItems.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center gap-1'
              onClick={() => navigateToMenuPage(index)}
              style={{ width: `${100 / tabItems.length}%` }}
            >
              <item.icon
                size={24}
                className={`${value === index ? 'text-yellow-400 font-bold' : ' text-gray-400'}`}
              />
              <div
                className={`text-xs ${
                  value === index ? ' text-yellow-500 font-bold' : ' text-gray-800'
                }`}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
