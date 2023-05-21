import React, { Dispatch, SetStateAction } from 'react';
import { Product } from '../../../interfaces/Product.interface';
import ProductGrid from '../../../components/ProductList.component';
import productsJson from '../../../assets/json/seeds.json';

function Seeds() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [PRODUCTS]: [
    Array<Product>,
    Dispatch<SetStateAction<Array<Product | null>>>
  ] = React.useState(productsJson.products);

  function fillterProducts() {
    const GROUPED_PRODUCTS = PRODUCTS.reduce((accumulator: Product | object, currentValue: Product)=> {
      if (accumulator[currentValue.group] === undefined) {
        accumulator[currentValue.group] = [currentValue];
      } else {
        accumulator[currentValue.group].push(currentValue);
      }
      return accumulator;
    }, {});
    const FILTERED_PRODUCTS: Array<Product> = Object.keys(GROUPED_PRODUCTS).map((key)=> {
      if (GROUPED_PRODUCTS[key].length > 0) {
        return GROUPED_PRODUCTS[key][0];
      }
      return null;
    });
    return FILTERED_PRODUCTS;
  }

  return (
    <>
      <h1
        style={{
          display: 'block',
          width: '100%',
          margin: '50px',
          textAlign: 'center'
        }}
        className="page-title"
      >
        Seeds
      </h1>
      <ProductGrid products={fillterProducts()} />

    </>
  );
}
export default Seeds;
