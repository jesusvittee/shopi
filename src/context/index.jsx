import { createContext, useState } from 'react';

// contexto global 
const contextCards = createContext()


function ProviderCards ({children}){
// shopping card 
const [count, setCount] = useState(0)

// product Detail open Products
const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
const openProductDetail = () => setIsProductDetailOpen(true)
const closeProductDetail = () => setIsProductDetailOpen(false)


// Checkout Side Menu open Products
const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

// product Detail show products
const [productDetail, setProductDetail] = useState({image:'', title:'',  price:'', description:''})

// shopping card add products to card 
const [cardProducts, setCardProducts] = useState([])

return(
        <contextCards.Provider
        value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productDetail,
            setProductDetail,
            cardProducts,
            setCardProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
        }}>
            {children}
        </contextCards.Provider>)
    
}
export {contextCards}
export {ProviderCards}