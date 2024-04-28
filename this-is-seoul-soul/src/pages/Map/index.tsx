import { cls } from 'utils/cls';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import CustomMarker from 'assets/images/CustomMarker.png';
import UserLocation from 'assets/images/UserLocation.png';
import { useEffect, useState } from 'react';
import { FestLocationType } from 'types/fest';
import { LocationType } from 'types/map';

const CurLocation: LocationType = {
  lot: 0,
  lat: 0,
  heading: 0,
};

const PlaceDummy: FestLocationType[] = [
  {
    festSeq: 1,
    title: '장소1',
    lot: 126.79581,
    lat: 33.5563,
    isHeart: true,
  },
  {
    festSeq: 2,
    title: '장소2',
    lot: 126.8988711,
    lat: 37.511168,
    isHeart: true,
  },
];

export const MapPage = () => {
  const [userLocation, setUserLocation] = useState<LocationType>(CurLocation);
  const [places, setPlaces] = useState<FestLocationType[]>([]);

  const fetchPlaces = async () => {
    // TODO: 장소 위치 불러오기 api 연결
    setPlaces(PlaceDummy);
  };

  useEffect(() => {
    fetchPlaces();

    const user = navigator.geolocation.watchPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lot: position.coords.longitude,
          heading: position.coords.heading || 0,
        });

        console.log('사용자의 위치: ', userLocation);
      },
      (error) => console.error('사용자 위치 가져오기 실패', error)
    );

    return () => {
      navigator.geolocation.clearWatch(user);
    };
  }, []);

  return (
    <div className={cls('w-full h-full')}>
      <Map
        center={{ lat: userLocation.lat, lng: userLocation.lot }}
        className={cls('w-full h-full z-0')}
        level={3}
      >
        {userLocation && (
          <MapMarker
            position={{ lat: userLocation.lat, lng: userLocation.lot }}
            image={{
              src: UserLocation,
              size: { width: 35, height: 40 },
            }}
            // rotation={userLocation.heading}
          />
        )}

        {places.map((place, index) => (
          <MapMarker
            key={index}
            position={{ lat: place.lat, lng: place.lot }}
            image={{
              src: CustomMarker,
              size: { width: 40, height: 40 },
            }}
          />
        ))}
      </Map>
    </div>
  );
};
