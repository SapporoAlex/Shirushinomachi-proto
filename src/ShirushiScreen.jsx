import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./shirushiScreen.css";
import L from "leaflet";
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

const colorImages = {
  yellow: yellowDot,
  red: redDot,
  green: greenDot,
  blue: blueDot,
};

const shapeImages = {
  square: baseSquareIcon,
  circle: baseCircleIcon,
};

const icons = {
  yellowDot: new L.icon({
    iconUrl: blueDot,
    iconSize: [50, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  }),
  yellowcircle: new L.icon({
    iconUrl: baseCircleIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  }),
  bluecircle: new L.icon({
    iconUrl: blueCircleIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  }),
  redcircle: new L.icon({
    iconUrl: redCircleIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  }),
  greencircle: new L.icon({
    iconUrl: greenCircleIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  }),
  yellowsquare: new L.icon({
    iconUrl: baseSquareIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  }),
  bluesquare: new L.icon({
    iconUrl: blueSquareIcon,
    iconSize: [50, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  }),
  redsquare: new L.icon({
    iconUrl: redSquareIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  }),
  greensquare: new L.icon({
    iconUrl: greenSquareIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  }),
};

export default function ShirushiScreen() {
  const [position, setPosition] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [shape, setShape] = useState("circle");
  const [color, setColor] = useState("red");
  const [message, setMessage] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const degreeOfVariation = 0.001; // shifts pos by 1 block
        const randomLat = (Math.random() - 0.5) * 2 * degreeOfVariation;
        const randomLong = (Math.random() - 0.5) * 2 * degreeOfVariation;
        const { latitude, longitude } = pos.coords;
        setPosition([latitude + randomLat, longitude + randomLong]);
      },
      () => {
        setPosition([10.1952, 22.1208]); // fallback
      }
    );
  }, []);

  const handleSubmit = () => {
    // if (!position || !message.trim()) return;
    if (!position || !shape || !color) return;

    const marker = {
      lat: position[0],
      lng: position[1],
      shape: shape,
      color: color,
      icon: color + shape,
      message,
      timestamp: Date.now(),
    };
    console.log(marker.icon);

    const existing = JSON.parse(localStorage.getItem("shirushi")) || [];
    existing.push(marker);
    localStorage.setItem("shirushi", JSON.stringify(existing));

    setSubmitted(true);
  };

  if (!position) return <p>Loading map...</p>;
  if (submitted) return <p>Shirushi saved! Return to the map to see it.</p>;

  return (
    <>
      <MapContainer
        center={position}
        zoom={16}
        maxZoom={16}
        style={{ height: "100vh", width: "100vw" }}
      >
        {/* <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
        <TileLayer
          attribution="Stamen Watercolor"
          url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
        />
        <Marker position={position} icon={icons["yellowDot"]}>
          <Popup>Your Shirushi will go here</Popup>
        </Marker>
      </MapContainer>
      <div id="createShirushiTable">
        <p>今、なにをかんじてる？</p>
        <div>
          <textarea
            id="message-box"
            type="text"
            value={message}
            required={false}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div></div>

          <label>しるしを</label>
          <div className="selector-grid">
            {["yellow", "red", "green", "blue"].map((c) => (
              <img
                key={c}
                src={colorImages[c]} // Or whatever shape you want for color picking
                alt={c}
                onClick={() => setColor(c)}
                className={color === c ? "selected" : ""}
              />
            ))}
          </div>

          <div className="selector-grid">
            {["circle", "square"].map((s) => (
              <img
                key={s}
                src={shapeImages[s]} // Use current color or fallback
                alt={s}
                onClick={() => setShape(s)}
                className={shape === s ? "selected" : ""}
              />
            ))}
          </div>
          {/* <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="yellow">Yellow</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>

          <select value={shape} onChange={(e) => setShape(e.target.value)}>
            <option value="circle">Circle</option>
            <option value="square">Square</option>
          </select> */}
        </div>
        <br />
        <button onClick={handleSubmit} className="modern-button">
          記録する
        </button>
      </div>
    </>
  );
}
