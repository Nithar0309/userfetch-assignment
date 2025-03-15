import React,{useState,useEffect} from 'react';
function FetchUserData()
{
    const[userdata,setUserData]=useState(null);
    useEffect(()=>
    {
     fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=>response.json())
          .then(data=>setUserData(data));
    },[]);
    return(<div >
                {userdata &&(<div>
                    <h2>UserInformation</h2>
                    <p>firstName:{userdata.first_name}</p>
                    <p>lasname:{userdata.last_name}</p>
                    <p>Email:{userdata.email}</p>


                </div>) }
    </div>)
    
}
export default FetchUserData;