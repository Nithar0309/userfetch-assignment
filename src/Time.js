import React from "react"
function Time()
{
    let cTime=new Date().toLocaleTimeString();
    let date=new Date().toLocaleDateString();
    const week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let day=week[new Date().getDay()];
    return(
        <div>
            <h1>Today time is {cTime}</h1>
            <h1>Today date is {date}</h1>
            <h1>Today is {day}</h1>
        </div>
    )
}

export default Time;