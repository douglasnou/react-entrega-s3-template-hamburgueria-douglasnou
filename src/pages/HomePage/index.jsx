import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../api/api";
import toast, { Toaster } from "react-hot-toast";

export const HomePage = () => {
   const LocalCartList = localStorage.getItem("@CARTLIST");
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(
      LocalCartList ? JSON.parse(LocalCartList) : []);
   const [isOpen, setIsOpen] = useState(false);
   const [search, setSearch] = useState("");
   const notifySuccess = () => toast.success("Item adicionado!");
   const notifyRemove = () => toast.success("Item removido!");
   const notifyError = () => toast.error("Item já adicionado!");

   useEffect(() => {
      const getList = async () => {
         const { data } = await api.get("/products");
         setProductList(data);
         localStorage.setItem("@CARTLIST", JSON.stringify(cartList));
      }
      getList();
   }, [cartList]);

   const addProduct = (product) => {
      const newProduct = [...cartList, product];
      const noRep = newProduct.filter((e) => {
         return e.id === product.id
      });
      noRep.length > 1 ? notifyError() :
         (setCartList(newProduct), notifySuccess());
   }

   const removeProduct = (Id) => {
      const removedProduct = cartList.filter((p) => p.id !== Id);
      setCartList(removedProduct);
      notifyRemove();
   }

   const removeAll = () => {
      const removedAll = cartList.filter((p) => p.price === 0);
      setCartList(removedAll);
   }
   const productsResult = productList.filter((element)=>{
     const searchItems = search === "" ? true : element.name.toLowerCase().includes(search.toLowerCase());
     return searchItems
   });
   
   return (
      <>
         <Header cartList={cartList} setIsOpen={setIsOpen} setSearch={setSearch}/>
         <main>
            <ProductList addProduct={addProduct} productList={productList} productsResult={productsResult} />
            {isOpen ? <CartModal removeAll={removeAll} removeProduct={removeProduct}
              cartList={cartList} setIsOpen={setIsOpen} /> : null}
         </main>
      </>
   );
};
