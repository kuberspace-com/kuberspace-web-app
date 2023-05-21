import React, { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';
import { Product } from '../../../interfaces/Product.interface';
// import ProductGrid from '../../../components/ProductList.component';
import productsJson from '../../../assets/json/seeds.json';
import './styles.scss';

function ProductInfo() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [PRODUCT, SET_PRODUCT]: [
    Product,
    Dispatch<SetStateAction<Product | null>>
  ] = React.useState(productsJson.products[0]);

  // function fetchProduct() {
  // variants are choosen by the differences of each details.
  // if one product has weight 20 and other has weight 55
  // this is a difference so it should be sepearted in which one to choose
  // }

  // fetcj PRODUCT
  return (
    <div className="product-details">
      <div className="title-container">
        <p className="product-title">
          Pendaflex Recycled Hanging File Folders, Letter Size, Assorted Jewel-Tone Colors,
          Two-Tone for Foolproof Filing, 1/5-Cut Tabs, 25 Per Box (81667)
        </p>
      </div>
      <div className="left-container">
        <img src="/images/metals/gallium.jpeg" alt="gallium" />
      </div>
      <div className="right-container">
        <section className="main-details"> </section>
        <section className="variants"> </section>
        <section className="sub-details"> </section>
        <section className="description"> </section>
      </div>
    </div>
  );
}
export default ProductInfo;
