import Diena from "./Diena.js";
import { useState, useEffect } from "react";

function App() {
    
  const dienasJSX = lessons.map((diena, indekss) => {
    return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas} />;
  });

  const [lessons, setLessons] = useState({});
  const [loading, setLoading] = useState("True");

  useEffect(() => {
    async function GetSaraksts() {
      const response = await fetch(
        "http://skrazzo.sites.hex.lv/projects/class-list/api.php"
      );
      const data = await response.json();
      console.log(data.IPb22);
      const cleansedData = [
        {
          diena: "Pirmdiena",
          stundas: data.IPb22[0].classes,
        },
        {
          diena: "Otrdiena",
          stundas: data.IPb22[1].classes,
        },
        {
          diena: "Trešdiena",
          stundas: data.IPb22[2].classes,
        },
        {
          diena: "Ceturdiena",
          stundas: data.IPb22[3].classes,
        },
        {
          diena: "Piektdiena",
          stundas: data.IPb22[4].classes,
        },
      ]
      setLessons(cleansedData);
      setLoading(false);
      console.log(data.IPb22[4].classes);
    }
    console.log(lessons);
    GetSaraksts();
  }, []);
  
  return(
    <div>
    <ol>{dienasJSX}</ol>
    </div>
  );
}
export default App;