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
    
    ]
  return(
    <>
    <div>
    <Diena diena = "Pirmdiena" stundas={PirmdienasStundas}/>
    <Diena diena = "Otrdiena" stundas={OtrdienasStundas}/>
    </div>
    </>
  );
}
export default App;
