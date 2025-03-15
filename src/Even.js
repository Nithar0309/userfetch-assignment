import React from "react";

function Even()
{ 
    const numbers=[1,2,3,4,5,6,7,8,9,10];
    let evennum = [numbers%2==0];
    return(
        <div>
            <h1>Even numbers till 10 is {evennum}</h1>
        </div>
    )
}

export default Even;