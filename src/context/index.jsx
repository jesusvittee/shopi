import { createContext, useState } from 'react';

const contextCards = createContext()

function ProviderCards ({children}){
const [count, setCount] = useState(0)
console.log(`count: ${count}`);
    return(
        <contextCards.Provider
        value={{
            count,
            setCount
        }}>
            {children}
        </contextCards.Provider>)
    
}
export {contextCards}
export {ProviderCards}