import React, { useState } from 'react'
export default function ParentUsingProps()
{
    const[user,setUser]=useState('react');
    return(<div>
        <h1>ParentUsingProps</h1>
      <Component2 user={user}/>
    </div>)
}

function Component1({user})
{
    return(<div>
        <h3>Component1{user}</h3>
    </div>)
}
function Component2({user})
{
    return(<div>
        <h3>Component2{user}</h3>
    </div>)
}


import React, { useState } from 'react'
export default function ParentUsingProps()
{
    const[user,setUser]=useState('react');
    return(<div>
        <h1>ParentUsingProps</h1>
      <Component1 user={user}/>
    </div>)
}

function Component1({user})
{
    return(<div>
        <Component2 user={user}/>
        </div>)
}
function Component2({user})
{
    return(<div>
        <Component3 user={user}/>
        </div>)
}
function Component3({user})
{
    return(<div>
        <Component4 user={user}/>
        </div>)
}
function Component4({user})
{
    return(<div>
        <Component5 user={user}/>
    </div>)
}
function Component5({user})
{
    return(<div>
        <h3>{`user is ${user}`}</h3>
    </div>)
}