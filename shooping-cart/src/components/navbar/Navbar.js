import React from "react";
import { useCart } from "react-use-cart";
import "./navbar.scss";
import cartstotal from "../../assests/ct1.png";
import { useHistory } from "react-router-dom";
function Navbar(props) {
    const usehistory = useHistory();
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
                <p onClick={() => usehistory.push("/cartde")}>
                    <img src={cartstotal} className="carts" />
                    <p className="numbers">{totalItems}</p>
                </p>
            </div>
        </div>
    );
}

export default Navbar;
