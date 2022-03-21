import React from "react";
import "./styles/Items.scss";
import { useCart } from "react-use-cart";
function ItemCart(props) {
    const { addItem } = useCart();
    return (
        <div className="col-11 col-md-6 col-lg-4 mx-0 mb-5">
            <div class="card overflow-hidden h-100 shadow">
                <img src={props.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">NAME:{props.title}</h5>
                    <p class="card-text">Rs: {props.price}</p>
                    <p>Discount: {props.discount}</p>
                    <button
                        className="btn btn-success"
                        onClick={() => addItem(props.item)}
                    >
                        Add Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemCart;
