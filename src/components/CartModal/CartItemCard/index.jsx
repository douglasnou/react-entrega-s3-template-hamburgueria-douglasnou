import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import styled from "./style.module.scss";

export const CartItemCard = ({ product, removeProduct }) => {
   return (
      <li className={styled.cardSection}>
         <div className={styled.cardInfo}>
            <img src={product.img} alt={product.name} />
            <div className={styled.cardStats}>
               <h3 className="title3">{product.name}</h3>
               <span className="text3 green">{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
            </div>
         </div>
         <button aria-label="delete" title="Remover item" onClick={() => removeProduct(product.id)}>
            <MdDelete size={21} />
         </button>
         <Toaster />
      </li>
   );
};
