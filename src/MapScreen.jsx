import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "./ShirushiScreen";
import baseCircleIcon from "./assets/basecircle.png";
import blueCircleIcon from "./assets/bluecircle.png";
import redCircleIcon from "./assets/redcircle.png";
import greenCircleIcon from "./assets/greencircle.png";
import baseSquareIcon from "./assets/basesquare.png";
import blueSquareIcon from "./assets/bluesquare.png";
import redSquareIcon from "./assets/redsquare.png";
import greenSquareIcon from "./assets/greensquare.png";
import yellowDot from "./assets/yellow.png";
import blueDot from "./assets/blue.png";
import redDot from "./assets/red.png";
import greenDot from "./assets/green.png";

let shirushiSize = [50, 50];

const icons = {
  bluecircle: new L.icon({
    iconUrl: blueCircleIcon,
    iconSize: shirushiSize,
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [0, 0],
  }),
  yellowcircle: new L.icon({
    iconUrl: baseCircleIcon,
    iconSize: shirushiSize,
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [0, 0],
  }),

  redcircle: new L.icon({
    iconUrl: redCircleIcon,
    iconSize: shirushiSize,
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [0, 0],
  }),
  greencircle: new L.icon({
    iconUrl: greenCircleIcon,
    iconSize: shirushiSize,
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [0, 0],
  }),
  yellowsquare: new L.icon({
    iconUrl: baseSquareIcon,
    iconSize: shirushiSize,
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [0, 0],
  }),
  bluesquare: new L.icon({
    iconUrl: blueSquareIcon,
    iconSize: shirushiSize,
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [0, 0],
  }),
  redsquare: new L.icon({
    iconUrl: redSquareIcon,
    iconSize: shirushiSize,
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [0, 0],
  }),
  greensquare: new L.icon({
    iconUrl: greenSquareIcon,
    iconSize: shirushiSize,
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [0, 0],
  }),
};

export default function MapScreen() {
  const [position, setPosition] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const raw = JSON.parse(localStorage.getItem("shirushi")) || [];
    const now = Date.now();
    const fresh = raw.filter((m) => now - m.timestamp < 24 * 60 * 60 * 1000); // 24h
    setMarkers(fresh);
    localStorage.setItem("shirushi", JSON.stringify(fresh)); // clean up expired
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
      },
      (err) => {
        console.error("Geolocation error:", err);
        setPosition([10.1952, 22.1208]);
      }
    );
  }, []);

  if (!position) {
    return <p>Loading map...</p>;
  }
  return (
    <>
      <MapContainer
        center={position}
        zoom={24}
        maxZoom={16}
        style={{ height: "100vh", width: "100vw" }}
      >
        {markers.map((m, idx) => (
          <Marker
            key={idx}
            position={[m.lat, m.lng]}
            icon={icons[m.icon] || icons.redsquare}
          >
            <Popup>{m.message}</Popup>
          </Marker>
        ))}

        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
        <TileLayer
          attribution="Stamen Watercolor"
          url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
        />
      </MapContainer>
    </>
  );
}
