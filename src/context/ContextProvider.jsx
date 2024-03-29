import { useEffect, useState, useMemo } from "react";
import CartContext from "./CartContext";
import PropTypes from 'prop-types';

function ContextProvider({children}){

    const[cart, setCart] = useState(JSON.parse(localStorage.getItem('myCart')) || []);

    const value = useMemo(()=> [cart, setCart], [cart]);

    useEffect(()=>{
        localStorage.setItem('myCart', JSON.stringify(cart), [cart]);
    })

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>

    )
}

ContextProvider.propTypes = {
    children: PropTypes.node,
};
ContextProvider.defaultProps = {
    children: <div>Default Content</div>
}

export default ContextProvider;