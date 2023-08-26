import { createContext, useState, useEffect} from 'react';

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

//shopping cart - order
const [order, setOrder] = useState([])
// products
const [items, setItems] = useState(null);

const [filteredItems, setFilteredItems] = useState(null);


// Get products by title
const [searchByTitle, setSearchByTitle] = useState(null);
console.log(searchByTitle);

const [searchByCategory, setSearchByCategory] = useState()

useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(data => setItems(data))
  },[])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
 }

 const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
 }

 const filterBy = (searchType, items , searchByTitle, searchByCategory) => {
    if(searchType === 'BY_TITLE'){
        return filteredItemsByTitle(items, searchByTitle)
    }
    if (searchType === 'BY_CATEGORY'){
        return filteredItemsByCategory(items, searchByCategory)
    }
    if (searchType === 'BY_TITLE_AND_CATEGORY')
    return filteredItemsByCategory(items, searchByCategory).filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))

    if (!searchType) {
        return items
    }
 }

useEffect(() =>{
    if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory));
    if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
},[items, searchByTitle,searchByCategory]);


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
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory,
        }}>
            {children}
        </contextCards.Provider>)
    
}
export {contextCards}
export {ProviderCards}