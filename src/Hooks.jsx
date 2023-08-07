import React, {useState} from "react";
function Hooks(){
    const now = new Date().toLocaleTimeString();

    const [time,setTime] = useState(now);

    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime)

    }
    setInterval(updateTime,1000)
    
    return (
        <div>
        <h3> {time} </h3>
        <button onClick={updateTime}></button>
        
        </div>
    );
}
export default Hooks;