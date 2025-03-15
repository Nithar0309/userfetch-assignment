import React from "react";

function Product(props)
{
    return(
        <div>
            <img src={props.img}/>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default Product;