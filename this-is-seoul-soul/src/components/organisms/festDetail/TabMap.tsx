import { FestDetailType } from 'types/festDetail';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface TabMapProps {
  fest: FestDetailType;
}

export const TabMap = ({ fest }: TabMapProps) => {
  const markerPosition = { lat: fest.lot, lng: fest.lat };

  return (
    <Map center={markerPosition} className='w-full h-full flex-grow' level={3}>
      <MapMarker position={markerPosition} />
    </Map>
  );
};
