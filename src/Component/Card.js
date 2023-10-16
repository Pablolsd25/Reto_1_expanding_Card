import React, { useState } from "react";
import "./Card.css";

export default function Card() {
  const panels = [
    {
      id: 1,
      backgroundImage:
        "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Explore The World"
    },
    {
      id: 2,
      backgroundImage:
        "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Wild Forest"
    },
    {
      id: 3,
      backgroundImage:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
      title: "Sunny Beach"
    },
    {
      id: 4,
      backgroundImage:
        "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      title: "City on Winter"
    },
    {
      id: 5,
      backgroundImage:
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Mountains - Clouds"
    }
  ];
  const [activePanel, setActivePanel] = useState(panels[0].id);

  const handleClick = (panelId) => {
    setActivePanel(panelId === activePanel ? null : panelId);
  };

  return (
    <div className="container">
      {panels.map((panel) => (
        <div
          key={panel.id}
          className={`panel ${activePanel === panel.id ? "active" : ""}`}
          onClick={() => handleClick(panel.id)}
          style={{ backgroundImage: `url('${panel.backgroundImage}')` }}
        >
          <h3>{panel.title}</h3>
        </div>
      ))}
    </div>
  );
}
