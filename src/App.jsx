import { useState } from "react";
import "./App.css";
import MapScreen from "./MapScreen";
import ShirushiScreen from "./ShirushiScreen";
import homeIcon from "./assets/home.png";
import plusIcon from "./assets/plus.png";
import friendIcon from "./assets/friend.png";
import mapIcon from "./assets/map.png";

function App() {
  const [page, setPage] = useState(0);

  if (page === 0) {
    return (
      <div>
        <div id="title-box">
          <h1 className="title">しるし</h1>
          <h2 className="small-title">の</h2>
          <h1 className="title">まち</h1>
        </div>
        <p id="subtitle1">ーすれ違いからうまれる、</p>
        <p id="subtitle2">やわらかいつながりー</p>
        <div className="button-container">
          <button onClick={() => setPage(1)}>
            <img src={mapIcon} alt="map" className="nav-button"></img>
          </button>
          <button onClick={() => setPage(2)}>
            <img src={plusIcon} alt="plus" className="nav-button"></img>
          </button>
        </div>
      </div>
    );
  }
  if (page === 1) {
    return (
      <>
        <MapScreen></MapScreen>
        <div className="button-container">
          <button onClick={() => setPage(0)}>
            <img src={homeIcon} alt="home" className="nav-button"></img>
          </button>
          <button onClick={() => setPage(2)}>
            <img src={plusIcon} alt="plus" className="nav-button"></img>
          </button>
        </div>
      </>
    );
  }
  if (page === 2) {
    return (
      <>
        <ShirushiScreen></ShirushiScreen>
        <div className="button-container">
          <button onClick={() => setPage(0)}>
            <img src={homeIcon} alt="home" className="nav-button"></img>
          </button>
          <button onClick={() => setPage(1)}>
            <img src={mapIcon} alt="home" className="nav-button"></img>
          </button>
        </div>
      </>
    );
  }
}

export default App;
