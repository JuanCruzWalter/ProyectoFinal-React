import { createContext, useContext, useState } from "react";


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) { //componente
    const [cartList, setCartList] = useState([])

    const addToCart = (item) => {
        setCartList([
            ...cartList,
            item
        ])
        /* for (let i = 0; i < cartList.length; i++) {
          if (cartList[i].name == item.name) {
            cartList[i].count =  cartList[i].count + item.count

          }else {
            setCartList([
                ...cartList,
                item
            ])
          }           
        } */   
    }

    const removeCart = () => {
        setCartList([])
    }

    
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider