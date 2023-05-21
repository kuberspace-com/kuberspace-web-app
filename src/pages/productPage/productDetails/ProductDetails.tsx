import React, { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';
import { Product } from '../../../interfaces/Product.interface';
// import ProductGrid from '../../../components/ProductList.component';
import productsJson from '../../../assets/json/seeds.json';

function ProductInfo() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [PRODUCT, SET_PRODUCT]: [
    Product,
    Dispatch<SetStateAction<Product | null>>
  ] = React.useState(productsJson.products[0]);

  // function fetchProduct() {

  // }

  // fetcj PRODUCT
  return (
    <div className="product-details">
      <p className="product-description">product description</p>
      <div className="image-wrapper">
        <img src="wefwe" alt="wfw" />
        <div className="image-paginator">
          <ul>
            <li>
              <Button role="button" />
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
export default ProductInfo;
