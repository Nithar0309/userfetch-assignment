import React from 'react';
import { useState } from 'react';
function CountEx()
{
    const[count,setCount]=useState(0);
    return(
    <div>
        <h1>count is {count}</h1>
<button onClick={()=>setCount(count+1)}>clcik</button>
    </div>)
}
export default CountEx;