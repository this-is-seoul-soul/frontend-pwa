/* eslint-disable @typescript-eslint/no-explicit-any */
import { FestivalRegisterForm } from 'components/molecules/festivalRegister/FestivalRegisterForm';
import { useEffect, useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { cls } from 'utils/cls';

export const FestivalRegisterPage = () => {
  const [position, setPosition] = useState<{
    lat: number;
    lng: number;
  }>({
    // 지도의 중심좌표
    lat: 33.450701,
    lng: 126.570667,
  });

  const [address, setAddress] = useState<string>('');
  const [isLocation, setLocation] = useState<boolean>(false);

  const getAddr = () => {
    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    const coord = new kakao.maps.LatLng(position.lat, position.lng);
    const callback = function (result: any, status: kakao.maps.services.Status) {
      if (status === kakao.maps.services.Status.OK) {
        const arr = { ...result };
        const _arr = arr[0].address.address_name;
        setAddress(_arr);
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  const handleSetLocation = () => {
    setLocation(true);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.error('사용자 위치 가져오기 실패', error)
    );
  }, []);

  useEffect(() => {
    getAddr();
  });

  return (
    <div className='w-full h-full'>
      {!isLocation ? (
        <>
          <div className='absolute w-full z-20 top-14 flex justify-center'>
            <div className='bg-white px-4 py-2 rounded-xl font-bold opacity-80 text-yellow-600'>
              축제 위치를 클릭해주세요
            </div>
          </div>
          <Map
            id='map'
            center={position}
            className={cls('w-full h-full z-1 absolute')}
            level={3}
            onClick={(_, mouseEvent) => {
              const latlng = mouseEvent.latLng;
              setPosition({
                lat: latlng.getLat(),
                lng: latlng.getLng(),
              });
            }}
          >
            <MapMarker position={position} />
          </Map>
          <div id='clickLatlng' className='z-20 absolute bottom-4 w-full font-bold text-gray-900'>
            <div className='mx-4 bg-white rounded-xl px-4 py-2 mb-2 shadow-md flex gap-2 items-center justify-center'>
              <IoLocationOutline />
              {position && address}
            </div>
            <div
              className='mx-4 bg-yellow-300 rounded-xl px-4 py-2 shadow-md flex items-center justify-center'
              onClick={handleSetLocation}
            >
              이 위치로 하기
            </div>
          </div>
        </>
      ) : (
        <>
          <FestivalRegisterForm setLocation={setLocation} position={position} address={address} />
        </>
      )}
    </div>
  );
};
