// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useSetAtom } from 'jotai';
// import { useSearchParams } from 'react-router-dom';
import { headerTitleAtom } from 'stores/headerStore';
import { FestDetailType } from 'types/festDetail';
import { GoBookmark, GoBookmarkFill, GoShareAndroid, GoStarFill } from 'react-icons/go';
import { useEffect, useState } from 'react';
import { TabHome } from '../../../components/organisms/festDetail/TabHome';
import { TabReview } from '../../../components/organisms/festDetail/TabReview';
import { TabMap } from '../../../components/organisms/festDetail/TabMap';
import { tabItemType } from 'types/tab';
import { cls } from 'utils/cls';
import { useSearchParams } from 'react-router-dom';
import { festDeatailInfoApi, festHeartAddApi, festHeartDeleteApi } from 'apis/festApi';
import Default from 'assets/images/Default.png';

type TabType = {
  label: string;
  component: JSX.Element;
}[];

export const FestDetailPage = () => {
  const setHeaderTitle = useSetAtom(headerTitleAtom);
  const [searchParams] = useSearchParams();
  const param = searchParams.get('festSeq') || '';
  const festSeq = parseInt(param);

  const [fest, setFest] = useState<FestDetailType>();
  const [isHeart, setIsHeart] = useState<boolean>();
  const [tabs, setTabs] = useState<TabType>();
  const [activeTab, setActiveTab] = useState<tabItemType>();

  const handleTabClick = (tab: tabItemType) => {
    setActiveTab(tab);
  };

  const handleHeart = async () => {
    const result = isHeart ? await festHeartDeleteApi(festSeq) : await festHeartAddApi(festSeq);
    if (result.status === 200) {
      setIsHeart((isHeart) => !isHeart);
    }
  };

  const getFestDetail = async () => {
    const result = await festDeatailInfoApi(festSeq);
    if (result.status === 200) {
      const fest = result.data.data;
      const tabs = [
        { label: '홈', component: <TabHome fest={fest} /> },
        { label: '리뷰', component: <TabReview fest={fest} /> },
        { label: '지도', component: <TabMap fest={fest} /> },
      ];
      setFest(fest);
      setIsHeart(fest.heart);
      setHeaderTitle(fest.title);
      setTabs(tabs);
      setActiveTab(tabs[0]);
    }
  };

  useEffect(() => {
    getFestDetail();
  }, [festSeq]);

  return (
    <div className={cls('w-full min-h-full pt-[47px] flex flex-col')}>
      <div className={cls('w-full h-32 overflow-hidden')}>
        <img src={fest?.mainImg ? fest?.mainImg : Default} alt='' />
      </div>
      <section>
        <div className={cls('flex flex-col p-4 pb-8')}>
          <div className={cls('flex justify-end gap-2')}>
            <GoShareAndroid size={24} className={cls('text-gray-600')} />
            <div onClick={handleHeart}>
              {isHeart == true ? (
                <GoBookmarkFill size={24} className={cls('fill-yellow-400')} />
              ) : (
                <GoBookmark size={24} className={cls('text-gray-400')} />
              )}
            </div>
          </div>
          <div className={cls('flex flex-col justify-center items-center')}>
            <div className={cls('text-xl font-extrabold')}>{fest?.title}</div>
            <div className={cls('pt-1 text-gray-600')}>{fest?.codename}</div>
            <div className={cls('pt-4 flex items-center gap-2')}>
              <div className={cls('flex flex-wrap justify-start items-center gap-4')}>
                <div>{fest?.continue ? '진행중' : '미진행'}</div>
                <div className={cls('flex items-center gap-1')}>
                  <GoStarFill className={cls('fill-yellow-400')} />
                  {fest?.avgPoint}
                </div>
                <div className={cls('flex items-center gap-1')}>
                  <div>리뷰</div>
                  <div>{fest?.cntReview >= 50 ? '50+' : `${fest?.cntReview}`}</div>
                </div>
                {/* <div className={cls('flex items-center gap-1')}>
                  <GoBookmarkFill className={cls('fill-yellow-400')} />
                  {fest?.tag && fest?.tag[0]?.cnt}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={`grid grid-cols-${tabs?.length} border-b-2`}>
          {tabs?.map((tab, id) => (
            <div
              key={id}
              className={`w-1/2 text-center mx-auto py-2 ${
                activeTab?.label === tab.label ? 'font-extrabold border-b border-b-black' : ''
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </section>
      {fest && activeTab?.component}
    </div>
  );
};
