import React,{useContext} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { TContext } from './context';

const containerStyle = {
  width: '100%', height: '44.5vh', position: 'relative'
};



function MyComponent() {

  const{komentari,lokacija}=useContext(TContext)
  const[lokacijaValue,setLokacijaValue]=lokacija;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCZQdWZWsNyakL30EbvVherjO4c9HcqFc8"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  const center = {
    lat: lokacijaValue.y,
    lng: lokacijaValue.x
  };
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
            <Marker 
            position={{
              lat: lokacijaValue.y,
              lng: lokacijaValue.x
            }} />
            <></>
      </GoogleMap>
  ) : <>
  </>
}

export default React.memo(MyComponent)
