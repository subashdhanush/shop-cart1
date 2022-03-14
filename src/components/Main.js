// import React from 'react';
// import data from '../data';
// import Product from  './Product';


// export default function Main(props)
// {
// return(
// <main className="block col-2">
//  <h1>Products</h1>
//  <div className="row">
//   {data.products.map((item,index)=>{
//    return(
//    <Product
//     name={item.name}
//     img={item.image}
//     price={item.price}
//     // onAdd={onAdd}
//     />
//    );
//   })}
//   </div>      
//  </main>   
// );   
// }


import React from 'react';
import Product from './Product';


export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <div class="container">
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
    </div>
  );
}