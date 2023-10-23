import Stunda from "./Stunda.js";
import styles from "./diena.module.css";

function Diena(props){
    const stundasJSX = props.stundas.map((stunda, indekss) => {
        return <Stunda key={indekss} nosaukums={stunda} />
     // const stundasJSX = props.stundas.map((x, index) => {}
    
    });    

  return(
    <>
    <div class = "dass">
    <h2 className={styles.violets}>{props.diena}</h2>
    <ol>
        {stundasJSX}
    </ol>
    </div>
    </>
  );
}
export default Diena;