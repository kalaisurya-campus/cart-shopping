import React from "react";
import { useCart } from "react-use-cart";
import "./navbar.scss";
import cartstotal from "../../assests/ct1.png";
function Navbar(props) {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
        cartTotal,
    } = useCart();
    return (
        <div className="navs">
            <p>items:{totalItems}</p>
            <div className="right_box">
                <img src={cartstotal} className="carts" />
                <p className="numbers">{totalItems}</p>
            </div>
        </div>
    );
}

export default Navbar;
