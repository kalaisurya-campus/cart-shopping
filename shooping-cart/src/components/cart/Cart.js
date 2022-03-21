import React from "react";
import { useCart } from "react-use-cart";
function Cart(props) {
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
    if (isEmpty) return <h1>no data</h1>;
    return (
        <>
            <div>
                <p>
                    cart totalItems:{totalUniqueItems} total itm:({totalItems})
                </p>
                {items.map((datas, index) => {
                    return (
                        <tr>
                            <td>
                                <img src={datas.image} />
                            </td>
                            <td>{datas.title}</td>
                            <td>{datas.price}</td>
                            <td>quanity:{datas.quantity}</td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    onClick={() =>
                                        updateItemQuantity(
                                            datas.id,
                                            datas.quantity + 1
                                        )
                                    }
                                >
                                    +
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-success "
                                    onClick={() =>
                                        updateItemQuantity(
                                            datas.id,
                                            datas.quantity - 1
                                        )
                                    }
                                >
                                    -
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger "
                                    onClick={() => removeItem(datas.id)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </div>
            <div>
                <p>Total Price :{cartTotal}</p>
            </div>
        </>
    );
}

export default Cart;
