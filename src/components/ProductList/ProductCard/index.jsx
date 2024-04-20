import toast, { Toaster } from "react-hot-toast";
import styled from "./style.module.scss";

export const ProductCard = ({ product, addProduct }) => {
    return(
        <li className={styled.cardSection}>
            <img src={product.img} alt={product.name} />
            <div className={styled.cardInfo}>
                <h3 className="title3">{product.name}</h3>
                <span className="text4">{product.category}</span>
                <span className="text3 green">{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</span>
                <button className="btn1" onClick={()=>addProduct(product)}>Adicionar</button>
                <div>
                    <Toaster/>
                </div>
            </div>
        </li>
    )
}