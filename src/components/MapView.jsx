// src/components/MapView.js

import React from 'react';
// import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import { useEffect, useRef, useState } from 'react';
import { Circle, MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';

// Define the coordinates for the center of the map

const DraggableMarker = ({ position, setUserPosition,customIcon}) => {
  const [draggable, setDraggable] = useState(true);
  const markerRef = useRef(null);
   window.localStorage.setItem('positions', JSON.stringify(position))
  useMapEvents({
    dragend() {
      const marker = markerRef.current;
   
      if (marker != null) {
        setUserPosition(marker.getLatLng());
      }
    },
  });

  return (
    <Marker
      draggable={draggable}
      eventHandlers={{
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setUserPosition(marker.getLatLng());
          }
        },
      }}
      position={position}
      ref={markerRef}
      icon={customIcon}
    >
      <Popup>
        <span onClick={() => setDraggable(!draggable)}>
          {draggable ? 'Marker is draggable' : 'Click to make marker draggable'}
        </span>
      </Popup>
    </Marker>
  );
};




// const LocationMarker = ({ position, customIcon }) => {
//   const map = useMap();
//   useEffect(() => {
//     if (position) {
//       map.flyTo([position?.latitude, position?.longitude], 13);
//     }
//   }, [position, map]);

//   return position === null ? null : (
//     <>
//       <Marker position={[position?.latitude, position?.longitude]} icon={customIcon}>
//         <Popup>You are here</Popup>
//       </Marker>
//       <Circle
//         center={[position?.latitude, position?.longitude]}
//         radius={position.accuracy}
//         pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.2 }}
//       />
//     </>
//   );
// };

const MapView = ({ customIcon }) => {
  const [userPosition, setUserPosition] = useState([23.453168015916194, 57.623570812644]);
  const [accuracy, setAccuracy] = useState(null);
  console.log(userPosition)
  const googleMapsUrl= `https://www.google.com/maps?q=${userPosition.lat}&${userPosition.lng}&z=15`;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude ,accuracy} = position.coords;
        setUserPosition([latitude, longitude])  
        setAccuracy(accuracy);
      },
      (error) => {
        console.error(error);
      },
      {
        enableHighAccuracy: true,
         maximumAge:0
      }
    );
  }, []);

 

  return (
    <section>
<a className='text-white' href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
      Open in Google Maps
    </a>

    <MapContainer center={userPosition} zoom={8} style={{ height: '100vh', width: '100%' }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Bashir Ahammed</a> contributors'
    />
    {/* <Marker position={[position?.latitude, position?.longitude]} icon={customIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
      <Circle
        center={[position?.latitude, position?.longitude]}
        radius={position?.accuracy}
        pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.2 }}
      />
    </Marker> */}
   {/* <LocationMarker position={position} customIcon={customIcon} /> */}
   <DraggableMarker position={userPosition} setUserPosition={setUserPosition} customIcon={customIcon} />
   {accuracy && (
        <Circle
          center={userPosition}
          radius={accuracy}
          pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.2 }}
        />
      )}
  </MapContainer>
  </section>
  )
}

export default MapView;
