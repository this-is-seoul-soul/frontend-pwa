import { cls } from 'utils/cls';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import CustomMarker from 'assets/images/CustomMarker.png';
import UserLocation from 'assets/images/UserLocation.png';
import { useEffect, useState } from 'react';
import { FestLocationType, FestType } from 'types/fest';
import { LocationType, MapFestType } from 'types/map';
import { SearchBar } from 'components/organisms/SearchBar';
import { MapFilter } from 'components/molecules/MapFilter/MapFilter';
import { festDeatailInfoApi, mapFestApi } from 'apis/festApi';
import { FestInfoMapItem } from 'components/atoms/festInfo/FestInfoMapItem';

const CurLocation: LocationType = {
  lot: 0,
  lat: 0,
  heading: 0,
};

export const MapPage = () => {
  const [userLocation, setUserLocation] = useState<LocationType>(CurLocation);
  const [places, setPlaces] = useState<FestLocationType[]>([]);
  const [selectedFest, setSelectedFest] = useState<FestType>();

  const fetchPlaces = async (lat: number, lot: number) => {
    // TODO: 장소 위치 불러오기 api 연결
    // const currentYear = new Date().getFullYear();

    const result = await mapFestApi({
      lat: lat,
      lot: lot,
      distance: 2,
      filter: [],
      year: [],
      codeName: [],
    });

    console.log(result);

    if (result.status === 200) {
      const allPlace = result.data.data;
      const convertPlaces = allPlace.map((item: FestLocationType) => ({
        festSeq: item.festSeq,
        title: item.title,
        lot: item.lot,
        lat: item.lat,
        isHeart: item.isHeart,
      }));

      setPlaces(convertPlaces);
    }
  };

  const handleMarkerClick = async (festSeq: number) => {
    const result = await festDeatailInfoApi(festSeq);
    
    if (result.status === 200) {
      setSelectedFest(result.data.data);
    }
  };

  // const handleMoveMyLocation = () => {
  //   console.log('내 위치로 이동');
  // };

  useEffect(() => {
    const user = navigator.geolocation.watchPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lot: position.coords.longitude,
          heading: position.coords.heading || 0,
        });
        fetchPlaces(position.coords.latitude, position.coords.longitude);
      },
      (error) => console.error('사용자 위치 가져오기 실패', error)
    );

    return () => {
      navigator.geolocation.clearWatch(user);
    };
  }, []);

  return (
    <div className={cls('w-full h-full')}>
      <div className='z-10 w-full absolute'>
        <SearchBar map />
        <MapFilter />
      </div>
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
            onClick={() => handleMarkerClick(place.festSeq)}
          />
        ))}
      </Map>
      {/* <div
        className='z-10 absolute bottom-20 right-2 rounded-full bg-white p-2 drop-shadow-xl'
        onClick={handleMoveMyLocation}
      >
        <RiCrosshairLine size={24} className='text-yellow-400' />
      </div> */}
      {selectedFest && (
        <div className='w-full absolute bottom-20 z-10'>
          <FestInfoMapItem fest={selectedFest} />
        </div>
      )}
    </div>
  );
};