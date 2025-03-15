import React from "react";
function Product()
{
    const list=[{id:1,name:'kurtis',price:1000},
        {id:2,name:'menswear',price:2000},
        {id:3,name:'kidswear',price:3000}
    ];
    const ProductItems=list.map((product)=>(<li key={product.id}>{product.name}-${product.price}</li>))
return(<div>
<h1>{ProductItems}</h1>
</div>)
}
export default Product;