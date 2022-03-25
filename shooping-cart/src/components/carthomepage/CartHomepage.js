import React, { useState } from "react";
import ItemCart from "../itemscart/ItemCart";
import "./styles/CartHomepage.scss";
import data from "../datasprovides/Data";
import Cart from "../cart/Cart";
import Navbar from "../navbar/Navbar";
import { useHistory, useParams } from "react-router-dom";
function CartHomepage(props) {
    const [serach, Setserach] = useState("");
    const usehistroy = useHistory();
    const { name } = useParams();
    console.log("received names", name);
    return (
        <div className="main-carthome">
            <Navbar  name={name}/>
            <h1>Home Cart</h1>

            <section className="py-4 container">
                <div className="inputs">
                    <input
                        placeholder="Serach"
                        type="text"
                        value={serach}
                        onChange={(e) => Setserach(e.target.value)}
                    />
                </div>
                <div className="row justify-content-center">
                    {data.productdata
                        .filter((itemsed) =>
                            itemsed.title.toLowerCase().includes(serach)
                        )
                        .map((itemst, index) => {
                            return (
                                <ItemCart
                                    id={itemst.id}
                                    title={itemst.title}
                                    price={itemst.price}
                                    discount={itemst.discount}
                                    image={itemst.image}
                                    item={itemst}
                                    key={index}
                                />
                            );
                        })}
                </div>
            </section>
            <div>{/* <Cart /> */}</div>
        </div>
    );
}

export default CartHomepage;
