// import React,{useState} from 'react';


// export default function Product(props)
// {
//     const {product,onAdd}=props;
//     // const [cartItems,setCartItems]=useState('');   
//     // const onAdd=()=>{
//     // const exist=cartItems.find((x)=>x.id === props.id);
//     // if(exist)
//     // {
//     //  setCartItems(
//     //   cartItems.map((x)=>
//     //   x.id === props.id ? {...exist,qty:exist.qty+1}:x
//     //   )   
//     //  ) 
//     // }
//     // else
//     // {
//     //  setCartItems([...cartItems,{...props,qty:1}])   
//     // }
//     // }   
// return(
// <div>
// <img className="small" src={product.img}/>
// <h3>{product.name}</h3>
// <div>${product.price}</div>
// <div>
//  <button onClick={()=>onAdd(product)}>Add to Cart</button>   
// </div>       
// </div>   
// )
// }
import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div class="card">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div class="card-title">${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}