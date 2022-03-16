// import React from 'react';
// import Product from './Product';


// export default function Main(props) {
//   const { products, onAdd } = props;
//   return (
//     <main className="block col-2">
//       <h2>Products</h2>
//       <div className="row">
//         {products.map((product) => (
//           <Product key={product.id} product={product} onAdd={onAdd}></Product>
//         ))}
//       </div>
//     </main>
//   );
// }



import React from 'react';
import Product from './Product';


export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <>
    <h1 className="text-center mt-3">All items</h1>
    <section className="py-4 container">
    <div className="row justify-content-center">  
    {/* <main className="block col-2"> */}
      <h2 className="producthead">Products</h2>
      {/* <div className="row"> */}
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      {/* </div> */}
      </div>
      </section>
      </>
  );
}