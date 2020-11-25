import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import './Tournaments.css';

function Map() {
  return (
    <GoogleMap
      defaultZoom={9}
      defaultCenter={{ lat: 51.507351, lng: -0.127758 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?=3.exp&libraries=geometry,drawing,places&key=AIzaSyCZOhbYBKBS6Gw-G_xebAbRMMmukKzGYWg"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}

// AIzaSyC - epvj9mmg0_iIrGm0tzIdZSADCoLlPd4;
// AIzaSyCZOhbYBKBS6Gw - G_xebAbRMMmukKzGYWg;
