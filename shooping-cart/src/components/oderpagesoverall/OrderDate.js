import React, { useEffect } from "react";
import "./styles/OrderDate.scss";
import { useCart } from "react-use-cart";

function OrderDate(props) {
    useEffect(() => {});
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
        <div className="main-orders">
            <div className="inside-orders"></div>
        </div>
    );
}

export default OrderDate;
