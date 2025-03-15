import React,{useState,useEffect} from 'react';
import './fetch.css';
function RandomUserData()
{
    const[userdata,setUserData]=useState(null);
    useEffect(()=>
    {
     fetch('http://random-data-api.com/api/users/random_user')
          .then(response=>response.json())
          .then(data=>setUserData(data));
    },[]);
    return(<div className='user'>
        {userdata &&(<div className='user1'>
            <h2>User Information</h2>
            <p>ID:{userdata.id}</p>
            <p>Password:{userdata.password}</p>
            <p>FirstName:{userdata.first_name}</p>
            <p>Lastname:{userdata.last_name}</p>
            <p>Email:{userdata.email}</p>
            <p>Phone no:{userdata.phone_number}</p>
            <p>Gender:{userdata.gender}</p>
            <p>DOB:{userdata.date_of_birth}</p>
           <p>Social Insurance no:{userdata.social_insurance_number}</p>
        </div>) }
    </div>)
    
}
export default RandomUserData;