import Diena from './Diena';

function App(props){
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
    
    const dienasJSX = visasStundas.map((diena, indekss) => {
      return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas} />
    })

  //export default function App
  return(
    <>
    <div>
  <ol>{dienasJSX}</ol>
    </div>
    </>
  );
}
export default App;
