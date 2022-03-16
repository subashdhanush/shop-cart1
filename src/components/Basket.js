// import React from 'react';
// import StripeCheckout from 'react-stripe-checkout';

// export default function Basket(props) {
//   const { cartItems, onAdd, onRemove } = props;
//   const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
//   const taxPrice = itemsPrice * 0.14;
//   const shippingPrice = itemsPrice > 2000 ? 0 : 20;
//   const totalPrice = itemsPrice + taxPrice + shippingPrice;

//  function handleToken(token,addresses)
//  {
//  console.log({token,addresses});
//  }
//   return (
//     <aside className="block col-1">
//       <h2>Cart Items</h2>
//       <div>
//         {cartItems.length === 0 && <div>Cart is empty</div>}
//         {cartItems.map((item) => (
//           <div key={item.id} className="row">
//             <div className="col-2">{item.name}</div>
//             <div className="col-2">
//               <button onClick={() => onRemove(item)} className="remove">
//                 -
//               </button>{' '}
//               <button onClick={() => onAdd(item)} className="add">
//                 +
//               </button>
//             </div>

//             <div className="col-2 text-right">
//               {item.qty} x ${item.price.toFixed(2)}
//             </div>
//           </div>
//         ))}

//         {cartItems.length !== 0 && (
//           <>
//             <hr></hr>
//             <div className="row">
//               <div className="col-2">Items Price</div>
//               <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
//             </div>
//             <div className="row">
//               <div className="col-2">Tax Price</div>
//               <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
//             </div>
//             <div className="row">
//               <div className="col-2">Shipping Price</div>
//               <div className="col-1 text-right">
//                 ${shippingPrice.toFixed(2)}
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-2">
//                 <strong>Total Price</strong>
//               </div>
//               <div className="col-1 text-right">
//                 <strong>${totalPrice.toFixed(2)}</strong>
//               </div>
//             </div>
//             <hr />
//             <div className="row">
//               {/* <button onClick={() => alert('Implement Checkout!')}>
//                 Checkout
//               </button> */}
//               <StripeCheckout
//               //  stripeKey="pk_live_51KcttVSIpWss3du1c68E1jB2yOW9N3TwkrKOhujTptB7bZChFiJLJr09U6WA5U2z9IhGZv3mayAYBWnhmDH4WtHj009axbh2Vr"
//                stripeKey="pk_test_51KcttVSIpWss3du1BbiZsJBfwpgtBZRw3VVL8aA6vLBjePswiq8r7x3Qa0R84DB2nNEXuat0tGpKj5zNN3srikDp00SpfbEBpa"
//                token={handleToken}
//               //  billingAddress
//               //  shippingAddress
//                amount={totalPrice.toFixed(2)} 
//               />
//             </div>
//           </>
//         )}
//       </div>
//     </aside>
//   );
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
    <div className="row justify-content-center">  
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 text-center">
    <div class="card p-0 overflow-hidden h-100 shadow">
    {/* <section className="py-4 container">
    <div className="row justify-content-center">           */}
    {/* <aside className="block col-1"> */}
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          // <div key={item.id} className="row">
          <div key={item.id}>
            {/* <div className="col-2">{item.name}</div> */}
            <div>{item.name}</div>
            {/* <div className="col-2"> */}
            <div> 
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            {/* <div className="col-2 text-right"> */}
            <div>
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            {/* <div className="row"> */}
            <div> 
              {/* <div className="col-2">Items Price</div> */}
              <div>Items Price</div>
              {/* <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div> */}
              <div>${itemsPrice.toFixed(2)}</div>
            </div>
            {/* <div className="row"> */}
            <div>
              {/* <div className="col-2">Tax Price</div> */}
              <div>Tax Price</div>
              {/* <div className="col-1 text-right">${taxPrice.toFixed(2)}</div> */}
              <div>${taxPrice.toFixed(2)}</div>
            </div>
            {/* <div className="row"> */}
            <div>
              {/* <div className="col-2">Shipping Price</div> */}
              <div>Shipping Price</div>
              {/* <div className="col-1 text-right"> */}
              <div> 
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            {/* <div className="row"> */}
            <div> 
              {/* <div className="col-2"> */}
              <div> 
                <strong>Total Price</strong>
              </div>
              {/* <div className="col-1 text-right"> */}
              <div> 
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            {/* <div className="row"> */}
            <div> 
              <StripeCheckout d-inline p-2
              //  stripeKey="pk_live_51KcttVSIpWss3du1c68E1jB2yOW9N3TwkrKOhujTptB7bZChFiJLJr09U6WA5U2z9IhGZv3mayAYBWnhmDH4WtHj009axbh2Vr"
               stripeKey="pk_test_51KcttVSIpWss3du1BbiZsJBfwpgtBZRw3VVL8aA6vLBjePswiq8r7x3Qa0R84DB2nNEXuat0tGpKj5zNN3srikDp00SpfbEBpa"
               token={handleToken}
               amount={totalPrice.toFixed(2)} 
              />
            </div>
          </>
        )}
      </div>
    {/* </aside> */}
    {/* </div>  
    </section> */}
    </div>
    </div>
    </div> 
  );
}



