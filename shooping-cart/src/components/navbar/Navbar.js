import React from "react";
import { useCart } from "react-use-cart";
import "./navbar.scss";
import cartstotal from "../../assests/ct1.png";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebasefiles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Navbar({ name }) {
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
                <ToastContainer />
            </div>
            <div>
                <p>{name}</p>
            </div>
            <div>
                <button
                    className="logouts"
                    onClick={() => {
                        toast("Logout SuccessFully");
                        auth.signOut();
                        setTimeout(() => {
                            usehistory.push("/login");
                        }, 2000);
                    }}
                >
                    LogOut
                </button>
            </div>
        </div>
    );
}

export default Navbar;
