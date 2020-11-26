import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import './Tournaments.css';

function Map() {
  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;
  return (
    <main className="background">
      <div className="container">
        <h1>Tournaments</h1>
        <p>
          <br />
          Due to the actual crisis, some tournaments may be reported. <br />
          Please refer to the informations below.
        </p>
        <div id="mapid">
          <MapContainer
            center={[51.507351, -0.127758]}
            zoom={1.7}
            scrollWheelZoom
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.52316, -0.15807]}>
              <Popup>
                23/04/2021 - Meltdown London
                <br /> Click <span className="tournament-register">
                  here
                </span>{' '}
                to register
              </Popup>
            </Marker>
            <Marker position={[46.8157, -121.22025]}>
              <Popup>
                05/12/2020 - LevelOP Bar <br />
                <b>Registration closed due to Covid</b>
              </Popup>
            </Marker>
            <Marker position={[47.60539, 3.88889]}>
              <Popup>
                19/01/2021 - Rule Zero
                <br /> Click <span className="tournament-register">
                  here
                </span>{' '}
                to register
              </Popup>
            </Marker>
            <Marker position={[23.697809, 120.960518]}>
              <Popup>
                26/03/2021 - Loading Dalston
                <br /> Click <span className="tournament-register">
                  here
                </span>{' '}
                to register
              </Popup>
            </Marker>
            <Marker position={[40.433, -3.70012]}>
              <Popup>
                15/12/2020 - Platform
                <br /> <b>Registration closed due to Covid</b>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </main>
  );
}

export default Map;
