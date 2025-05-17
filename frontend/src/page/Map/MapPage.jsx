import React, { useState, useEffect } from "react";
import "./WorldMap.css"; // Adjusted styles here
import { doc, getDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase"; // Adjust path if needed

const wonders = [
  { name: "Great Wall of China", top: "35%", left: "70%" },
  { name: "Petra", top: "40%", left: "60%" },
  { name: "Christ the Redeemer", top: "70%", left: "35%" },
  { name: "Machu Picchu", top: "65%", left: "30%" },
  { name: "Chichen Itza", top: "55%", left: "25%" },
  { name: "Roman Colosseum", top: "38%", left: "52%" },
  { name: "Taj Mahal", top: "45%", left: "75%" },
];

const MapPage = () => {
  const [visitedWonders, setVisitedWonders] = useState([]);
  const [tooltip, setTooltip] = useState({ visible: false, text: "", x: 0, y: 0 });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("visitedWonders")) || [];
    setVisitedWonders(saved);
  }, []);

  const handleMarkerClick = async (name) => {
    if (!visitedWonders.includes(name)) {
      const updated = [...visitedWonders, name];
      setVisitedWonders(updated);
      alert(`${name} saved to your profile!`);
      let u = localStorage.getItem("users");
      if (u) {
        await addDoc(collection(db, "savelandmark"), {
          userid: JSON.parse(u).uid,
          name: name,
          createdAt: new Date(),
        });
        alert(`${name} saved to your profile.`);
      } else {
        alert("Login first to save the landmark.");
      }
    }
  };

  const handleMouseEnter = (e, name) => {
    const rect = e.target.getBoundingClientRect();
    setTooltip({
      visible: true,
      text: name,
      x: rect.left + 20,
      y: rect.top - 30,
    });
  };

  return (
    <div className="map-page">
      <h1 className="heading">7 Wonders of the World</h1>
      <div className="map-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png"
          alt="World Map"
          className="world-map"
        />
        {wonders.map((wonder, index) => (
          <div
            key={index}
            className="marker"
            style={{ top: wonder.top, left: wonder.left }}
            onClick={() => handleMarkerClick(wonder.name)}
            onMouseEnter={(e) => handleMouseEnter(e, wonder.name)}
            onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}
          ></div>
        ))}
        {tooltip.visible && (
          <div
            className="tooltip"
            style={{ top: tooltip.y, left: tooltip.x }}
          >
            {tooltip.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default MapPage;
