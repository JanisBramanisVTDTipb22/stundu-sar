import styles from "./stunda.module.css"
function Stunda(props){
    
    return(
<>
<li className={styles.violets}>{props.nosaukums}</li>
</>
    )
}
export default Stunda;