import React from "react";
import { useCart } from "react-use-cart";
import mobileorder from "../../assests/mobileorders2.gif";
import "./styles/Carts.scss";
import { useHistory } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
function Cart(props) {
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
    // if (isEmpty) return <h1>no data</h1>;
    return (
        <>
            <div className="main-carts">
                <div className="left-carts-text">
                    <div className="btns">
                        <button
                            onClick={() => usehistory.goBack()}
                            className="btss"
                        >
                            <ion-icon name="chevron-back-outline"></ion-icon>
                        </button>
                    </div>
                    <div className="let-order-datas">
                        {items.map((datas, index) => {
                            return (
                                <div className="middles mt-2 mb-5">
                                    <div class="card mb-5">
                                        <img
                                            src={datas.image}
                                            class="card-img-top"
                                            alt="..."
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Title:{datas.title}
                                            </h5>
                                            <p class="card-text">
                                                Price:{datas.price}
                                            </p>
                                            <p>quanity:{datas.quantity}</p>
                                            <div className="d-flex justify-content-center gap-4">
                                                <button
                                                    className="bt"
                                                    onClick={() =>
                                                        updateItemQuantity(
                                                            datas.id,
                                                            datas.quantity + 1
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                                <p className="fw-1 fs-1">
                                                    {datas.quantity}
                                                </p>
                                                <button
                                                    className="bt "
                                                    onClick={() =>
                                                        updateItemQuantity(
                                                            datas.id,
                                                            datas.quantity - 1
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                            </div>
                                            <button
                                                className="btn btn-danger "
                                                onClick={() =>
                                                    removeItem(datas.id)
                                                }
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div>
                            <p className="mt-5 mb-5">
                                Total Price :{cartTotal}
                            </p>
                            <div>
                                <button
                                    onClick={() => usehistory.push("/address")}
                                >
                                    Oders Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-carts-text">
                    {/* <img src={mobileorder} className="crts" /> */}
                    welcome
                </div>
            </div>
        </>
    );
}

export default Cart;
