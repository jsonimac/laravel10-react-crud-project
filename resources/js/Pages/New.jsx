import { useState } from "react";

export default function New(props) {

    return (
        <>
            <h2>Hello there !! {props.name} {props.last}</h2>
            <Button/>
        </>
    );
}

function Button() {
    const [increment, setIncrement] = useState(true);
    const [name, setName] = useState("Status");
    const handleClick = () => {
        if(increment){
            setIncrement(!increment)
            setName("true gwapa")
        }else{
            setIncrement(!increment)
            setName("false")
        }
    }
    return (
    <>
        <button onClick={handleClick} className="p-2 rounded outline outline-1 outline-blue-400 hover:bg-blue-600 hover:text-white" >Click me</button>
        <h6>Current Count: {name}</h6>
    </>
    )
}
