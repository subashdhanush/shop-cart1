// import React,{useState} from 'react';


// export default function Basket(props)
// {
//   const {cartItems,onAdd,onRemove}=props;
//   const itemsPrice=cartItems.reduce((a,c)=>a + c.price * c.qty,0);
//   const taxPrice=itemsPrice * 0.14;
//   const shippingPrice=itemsPrice > 2000 ? 0 :50;
//   const totalPrice=itemsPrice + taxPrice +shippingPrice;  
// //  const [cartItems,setCartItems]=useState('');   
// //  const onAdd=()=>{
// //  const exist=cartItems.find((x)=>x.id === props.id);
// //  if(exist)
// //  {
// //   setCartItems(
// //    cartItems.map((x)=>
// //    x.id === props.id ? {...exist,qty:exist.qty+1}:x
// //    )   
// //   ) 
// //  }
// //  else
// //  {
// //   setCartItems([...cartItems,{...props,qty:1}])   
// //  }
// //  }
// return(
// <aside className="block col-1">
//  <h2>Cart Items</h2>  
//  <div>
//   {cartItems.length==0 && <div>Cart is Empty</div>}
//   {cartItems.map((item)=>(
//    <div key={item.id} className="row">
//     <div className="col-2">{item.name}</div>
//     <div className="col-2">
//      <button onClick={()=>onAdd(item)} className="add">+</button>
//      <button onClick={()=>onRemove(item)} className="remove">-</button>            
//      </div>
//      <div className="col-2 text-right">
//       {item.qty} * {item.price.toFixed(2)}   
//       </div>   
//      </div>
//   ))} 
//   {cartItems.length !==0 && (
//    <>
//    <hr></hr>
//    <div className="row">
//      <div>items Price</div>
//      <div>{itemsPrice.toFixed(2)}</div>
//     </div>   
//   <>
//   )}  
//   </div>    
//  </aside>   
// );   
// }

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

 function handleToken(token,addresses)
 {
 console.log({token,addresses});
 }
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              {/* <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button> */}
              <StripeCheckout
              //  stripeKey="pk_live_51KcttVSIpWss3du1c68E1jB2yOW9N3TwkrKOhujTptB7bZChFiJLJr09U6WA5U2z9IhGZv3mayAYBWnhmDH4WtHj009axbh2Vr"
               stripeKey="pk_test_51KcttVSIpWss3du1BbiZsJBfwpgtBZRw3VVL8aA6vLBjePswiq8r7x3Qa0R84DB2nNEXuat0tGpKj5zNN3srikDp00SpfbEBpa"
               token={handleToken}
              //  billingAddress
              //  shippingAddress
               amount={totalPrice.toFixed(2)} 
              />
            </div>
          </>
        )}
      </div>
    </aside>
  );
}