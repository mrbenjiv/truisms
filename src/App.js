import React, { useState, useMemo } from "react";
import truisms from "./truisms.json";

const getRandomTruism = () =>
  truisms[Math.floor(Math.random() * truisms.length)];

const App = () => {
  const [t, setT] = useState(getRandomTruism());

  useMemo(() => {
    setTimeout(() => {
      setT(getRandomTruism());
    }, 300000); // 5 min
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        left: 0,
        padding: "12vw",
        right: 0,
        bottom: 0,
        justifyContent: "space-between",
        fontSize: "11vw",
        wordBreak: "break-word",
        hyphens: "auto",
      }}
    >
      <div>{t}.</div>
      <div
        style={{
          textTransform: "none",
          fontSize: "3vw",
          opacity: 0.4,
        }}
      >
        <i>Truisms</i>
        <br />
        Jenny Holzer
      </div>
    </div>
  );
};

export default App;
