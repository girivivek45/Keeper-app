import React, { useState } from "react";

function Todo(){

    const [inputText, setInput] = useState("");
    const [items, setItem] = useState([
        
    ]);

    function handleChange(event){

        const newValue = event.target.value;
        setInput(newValue);
        
    }
    function add(){
        setItem(prevItems => {return [ ...prevItems, inputText];});
        setInput("");

    }
console.log(items)
    
    return (
        <div className="container">
            <div className="heading">
                <h1> To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={handleChange} type="text" value={inputText} />
                <button  onClick={add}>
                    <span>Add</span>
                </button>

            </div>
            <div>
                <ul>
                    {items.map((i,index)=>
                    (    <li>
                        {i}
                        </li>)
                    )}
                </ul>
            </div>
        </div>
    ); 
}
export default Todo;