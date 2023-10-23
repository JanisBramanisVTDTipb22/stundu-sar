import Diena from './Diena';
import Hello from "./Hello";

function App(props){

  const allNames = ["Jēkabs", "Markus", "Klucis"]

  const PirmdienasStundas = [
      "Sports",
      "DabasZinibas",
      "Vesture",
      "Krievu valoda"
  
  ]
    const OtrdienasStundas = [
       "Cita stunda",
       "Vel stunda",
    
    ];
    const visasStundas = [
      {diena: "Pirmdiena", 
      stundas: [ 
        "Sports",
        "DabasZinibas",
        "Vesture",
        "Krievu valoda"
      ]},
      {diena: "Otrdiena",
      stundas: [
      "Cita stunda",
       "Vel stunda",
      ]},
      {diena: "Trešdiena", 
      stundas: [ 
        "Programmēšana",
        "Programmēšana",
        "Programmēšana",
        "Programmēšana"
    ]},
      {diena: "Ceturtdiena", 
      stundas: [ 
        "VAMS",
        "VAMS",
        "VAMS",
        "VAMS"
      ]},
      {diena: "Piektdiena", 
      stundas: [ 
        "Sports",
        "Latviešu valoda",
        "Matematika",
        "Matematika"
      ]}
    ];
    
    //const dienasJSX = visasStundas.map((diena, indekss) => {
      //return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas} />

      const helloJSX = allNames.map((name, index) => {
        return <Hello key={index} name={name} />;
    })

  //export default function App
  return(
    <>
    <div>
  <ol>{helloJSX}</ol>
    </div>
    </>
  );
}
export default App;
