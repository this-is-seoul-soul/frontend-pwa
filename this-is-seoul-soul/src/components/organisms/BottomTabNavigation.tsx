import { useEffect, useState } from 'react';
import { heartPage, homePage, mapPage, myPage } from "../../constants/pathname";
import { GoHomeFill, GoBookmarkFill, GoPersonFill } from "react-icons/go";
import { IoMap } from "react-icons/io5";
import React from "react";

interface TabItem {
  label: string;
  path: string;
  icon: (props: React.SVGProps<SVGSVGElement> & { size?: number }) => JSX.Element;
}

const tabItems: TabItem[] = [
  { label: homePage.label, path: homePage.path, icon: GoHomeFill },
  { label: mapPage.label, path: mapPage.path, icon: IoMap },
  { label: heartPage.label, path: heartPage.path, icon: GoBookmarkFill },
  { label: myPage.label, path: myPage.path, icon: GoPersonFill }
];


export const BottomTabNavigation = ({ label }: { label: string }) => {
    const [value, setValue] = useState<number | null>(null);

    useEffect(() => {
      const selectedTab = tabItems.find(item => item.label === label);
      if (selectedTab) {
        setValue(tabItems.indexOf(selectedTab));
      }
    }, [label])

    const handleClick = (index: number) => {
        // 네비게이션 처리는 여기서 하세요. 예를 들어, history.push 등을 사용하여 페이지 이동 가능
      console.log(value);
      console.log(`Clicked on tab ${tabItems[index].label}`);
      setValue(index);
      };

    return (
        <div className="fixed bottom-0 left-0 right-0 flex w-full bg-white p-3 border border-gray-400 rounded-t-xl">
        {tabItems.map((item, index) => (
            
            <div
              key={index}
              className="flex flex-col items-center gap-1"
              onClick={() => handleClick(index)}
              style={{ width: `${100 / tabItems.length}%` }}
            >
              <item.icon size={20} className={`${value === index ? 'text-yellow-400' : ' text-gray-400'}`} />
              <div className={`text-xs ${value === index ? ' text-black' : ' text-gray-600'}`}>{item.label}</div>
            </div>
          ))}
        </div>
      );
};
  