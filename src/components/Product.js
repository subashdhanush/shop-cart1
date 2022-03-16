// import React from 'react';

// export default function Product(props) {
//   const { product, onAdd } = props;
//   return (
//     <div class="card">
//       <img className="small" src={product.image} alt={product.name} />
//       <h3>{product.name}</h3>
//       <div class="card-title">${product.price}</div>
//       <div>
//         <button onClick={() => onAdd(product)}>Add To Cart</button>
//       </div>
//     </div>
//   );
// }


import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
    <div class="card p-0 overflow-hidden h-100 shadow">  
    {/* <div class="card"> */}
      {/* <img className="small" src={product.image} alt={product.name} /> */}
      <img class="card-img-top img-fluid" src={product.image} alt={product.name} />
      <div class="card-body text-center">
      <h3 class="card-title">{product.name}</h3>
      <div class="card-title">${product.price}</div>
      {/* <div> */}
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      {/* </div> */}
    {/* </div> */}
    </div>
    </div>
    </div>
  );
}