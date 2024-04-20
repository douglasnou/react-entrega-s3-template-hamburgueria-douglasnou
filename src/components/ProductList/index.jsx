import { ProductCard } from "./ProductCard";
import styled from "./style.module.scss";

export const ProductList = ({ addProduct, productsResult }) => {
   return (
      <div className={styled.productSection}>
         <ul className={styled.productsList}>
            {productsResult.map((product) => (
               <ProductCard key={product.id} product={product} addProduct={addProduct} />
            ))}
         </ul>
      </div>
   )
}
