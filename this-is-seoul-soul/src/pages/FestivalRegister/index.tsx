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
  const [address, setAddress] = useState<string>();

  const getAddr = () => {
    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    const coord = new kakao.maps.LatLng(position.lat, position.lng);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const callback = function (result: any, status: kakao.maps.services.Status) {
      if (status === kakao.maps.services.Status.OK) {
        const arr = { ...result };
        const _arr = arr[0].address.address_name;
        setAddress(_arr);
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  useEffect(() => {
    const user = navigator.geolocation.watchPosition(
      (position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.error('사용자 위치 가져오기 실패', error)
    );

    return () => {
      navigator.geolocation.clearWatch(user);
    };
  }, []);

  useEffect(() => {
    getAddr();
  });

  return (
    <div className='w-full h-full'>
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
          <IoLocationOutline /> {position && address}
        </div>
        <div className='mx-4 bg-yellow-300 rounded-xl px-4 py-2 shadow-md flex items-center justify-center'>
          이 위치로 하기
        </div>
      </div>
    </div>
  );
};
