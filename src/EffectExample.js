import { useState,useEffect }  from 'react';

function EffectExample()
{
    const[count,setCount]=useState(0);
    const[msg,setMsg]=useState('initialmsg');
    useEffect(()=>{
        console.log('component count updated')
        console.log(msg);
        console.log('count is incremented to count',count);
    });
    return(<div>
        <button onClick={()=>setCount(count+10)} type="button">increment</button>
        <p>The count value is{count}</p>
        <button onClick={()=>setMsg('msg updated on onclick')} type="button">updateMsg</button>

    </div>)
};
export default EffectExample;

