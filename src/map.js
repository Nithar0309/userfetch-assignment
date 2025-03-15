import React from "react";
function Example()
{
    const numbers=[1,2,3,4,5];
    const updatenums=numbers.map((number,index)=><li key={index}>{number}</li>)
return(<div>
    <h1>{updatenums}</h1>
</div>)
}
export default Example;