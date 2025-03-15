import React from "react";

function UserGreeting(props)
{
    if(props.loggedin){
        return <h1>Welcome {props.username}</h1>
    }
    else
    {
        return <h1>Please enter correct password</h1>
    }
}

export default UserGreeting;