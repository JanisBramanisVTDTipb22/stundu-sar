import { useState } from "react";

function Hello(props) {
    const [name, Setname] = useState(props.name);

    function changeName(event) {
        Setname(event.target.value);
    }
    return (
    <>
        <div>
            <input value={name} onChange={changeName}></input>
        </div>
        <p>hello, {name}!</p>
    </>
    )
}
export default Hello;