import React from 'react';
import { useState } from 'react';
function Color()
{
    const[color,setColor]=useState('blue');
    return(
    <div>
        <h1>color is {color}</h1>
<button onClick={()=>setColor('red')}>clcik</button>
    </div>)
}
export default Color;