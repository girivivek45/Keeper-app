import React,{useState} from "react";
function Form(){
    const[name,setName] = useState("");
    function change(event){
        setName(event.target.value);
    }
    const[name2,setName2] = useState("");
    function change2(event){
        setName2(event.target.value);
    }
    return (
        <div className="con">
            <h1>hello {name} {name2}</h1>
            <input onChange={change} type="text" placeholder="Whats your first name" />
            <input onChange={change2} type="text" placeholder="Whats your last name" />
            <button >SUbmit</button>
        </div>
    );
}
export default Form;