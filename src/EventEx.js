import React from "react";
function EventEx()
{
    const handleMouse=()=>{
        alert("mouse is down")
    }
    const handleCut=()=>{
        alert("data is cut")
    }
    const handleCopy=()=>{
        alert("data is copy")
    }
    const handleKey=()=>{
        alert("key up")
    }
    const handlePaste=()=>{
        alert("paste event triggered")
    }
    const handleDouble=()=>{
        alert("clicked twice")
    }
    return(<div>
        <h1 onMouseDown={handleMouse}>welcome to Entri</h1>
        <p onCut={handleCut}>this is my data</p>
        <p onCopy={handleCopy}>this is copy my data</p>
  <input type="text" onKeyUp={handleKey}></input>

     <input type="text" onPaste={handlePaste}></input>
     <button onDoubleClick={handleDouble}>clicktwice</button>
     </div>)

}
export default EventEx;
