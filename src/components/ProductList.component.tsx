import React from 'react';
import { Product } from '../interfaces/Product.interface';
import VerticalList from './VerticalList.component';

function ProductList(props: {products: Array<Product>}) {
  const MAIN_STYLES = {
    width: '100%'
  };

  return (
    <div className="product-grid" style={MAIN_STYLES}>
      <VerticalList products={props.products} />
    </div>
  );
}
export default ProductList;
