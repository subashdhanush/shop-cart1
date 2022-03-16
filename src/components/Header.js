// import React from 'react';


// export default function Header()
// {
// return
// (
// <div>
//  Header   
//  </div>
// );   
// }


// import React from 'react';


// export default function Header()
// {
// return(
// <header className="row block center">
// <div>
//  <a href="#/">
//   <h1>Small Shopping Cart</h1>
//   </a>      
//  </div>
// <div>
//  <a href="#/cart">Cart</a> <a href="#/signin">signin</a>      
//   </div>     
// </header>   
// );   
// }

import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a class="heading" href="#/">
          <h1 class="heading">Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a class="carthead" href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a class="signhead" href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}