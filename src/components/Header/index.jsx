import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart, MdCleaningServices } from "react-icons/md";
import styled from "./style.module.scss";

export const Header = ({ cartList, setIsOpen, setSearch }) => {
   const [value, setValue] = useState("");
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);
   const cont = cartList.length;
   const submit = (e) => {
      e.preventDefault();
      setSearch(value);
      setValue("");
   }

   return (
      <header className={styled.headerSection}>
         <div className={styled.headerContainer}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div className={styled.container}>
               <button onClick={() => setIsOpen(true)}>
                  <span className={`text3 ${styled.cont}`}>{cont}</span>
                  <MdShoppingCart size={21} />
                  <span className="text3">{total.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</span>
               </button>
               <form onSubmit={submit}>
                  <input
                     className="input"
                     type="text"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <button className={styled.search} type="submit">
                     <MdSearch size={18} />
                  </button>
                  <button className={styled.clean} onClick={() => setSearch("")}>
                     <MdCleaningServices size={18} />
                  </button>
               </form>
            </div>
         </div>
      </header>
   );
};
