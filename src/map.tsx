import './App.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const position: [number, number] = [51.505, -0.09];

const customIcon = new L.icon({
  iconUrl: require('./public/'),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popAnchor: [0, -32],
});

export default function App() {
  return (
    <div id="map">
      <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
        </Marker>
      </MapContainer>
    </div>
  )
}
