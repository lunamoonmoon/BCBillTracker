import './map.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

export default function App() {

  const defaultLocation: [number, number] = [48.4284, -123.3656];

  return (
    <div className='map'>
      <MapContainer
        className='mapContainer'
        center={defaultLocation}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};
