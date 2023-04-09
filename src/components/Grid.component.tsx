// import React from 'react';
// import { Product } from '../interfaces/Product.interface';
// import VerticalList from './VerticalList.component';
// import ProductCard from './Card.component';
// import USE_VIEWPORT from '../hooks/Viewport';

// function Grid(props: {
//   breakPoints: Array<{[size: 'xs' | 'sm' | 'md' | 'lg']: number }>
//   grow: Array<{[size: 'xs' | 'sm' | 'md' | 'lg']: number }>,
//   items: Array<any>
// }) {
//   const { VIEWPORT_WIDTH } = USE_VIEWPORT();

//   React.useEffect(()=> {
//     if (VIEWPORT_WIDTH < 500){

//     }

//   }, [VIEWPORT_WIDTH]);

//   const GRID_STYLES = {
//     display: 'grid',
//   } as React.CSSProperties;

//   const MAIN_STYLES = {
//     width: '100%'
//   };

//   // breakpounts

//   return (
//     <div className="product-grid" style={GRID_STYLES}>
//       {props.items.map(item=>{
//         return (
//           <div className="row">

//           </div>
//         );
//       })}
//     </div>
//   );
// }
// export default Grid;
