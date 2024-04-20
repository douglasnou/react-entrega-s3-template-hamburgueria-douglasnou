import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styled from "./style.module.scss"


export const CartModal = ({ cartList, removeProduct, removeAll, setIsOpen }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog" className={styled.modalSection}>
         <div className={styled.modalBox}>
            <div className={styled.modalHeader}>
               <h2 className="title3 white">Carrinho de compras</h2>
               <button aria-label="close" title="Fechar" onClick={() => setIsOpen(false)}>
                  <MdClose size={21} />
               </button>
            </div>
            <div className={styled.modalMain}>
               {cartList.length == 0 ? <h3 className="title3">Nenhum pedido ainda</h3> :
                  <ul>
                     {cartList.map((product) => (
                        <CartItemCard key={product.id} product={product} removeProduct={removeProduct} />
                     ))}
                  </ul>}
            </div>
            <div className={styled.modalLast}>
               <div className={styled.modalFooter}>
                  <span className="text3">Total</span>
                  <span className="text3">{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
               </div>
               <button className="btn2" onClick={removeAll}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
