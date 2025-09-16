import { CircleMarker, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import type { Device } from "../../models/device";

export default function MapDevices({ data }: { data: Device[] }) {
  const rangeColor = (rsrq: number) => {
    if (rsrq >= -10) {
    return "green"; // Excellent
  } else if (rsrq >= -15) {
    return "yellow"; // Good
  } else if (rsrq >= -20) {
    return "orange"; // Medium
  } else {
    return "red"; // Weak
  }
  }
  return (
    <MapContainer center={[0.789, 113.9213]} zoom={5}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((data) => (
        <Marker key={data.id} position={[data.lat, data.lng]}>
          <Popup>
            <p>Operator: {data.operator}</p>
            <p>RSRQ: {data.rsrq}</p>
          </Popup>
          <CircleMarker center={[data.lat, data.lng]} pathOptions={{
            color: rangeColor(data.rsrq),
            
          }} radius={20} />
        </Marker>
      ))}
    </MapContainer>
  );
}
