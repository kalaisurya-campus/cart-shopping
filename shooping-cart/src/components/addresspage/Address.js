import React, { useState } from "react";
import "./styles/Address.scss";
import sm3 from "../../assests/sm8.gif";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth, db } from "../../firebasefiles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Address(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const usehistory = useHistory();
    const [datas, SetStates] = useState({
        name: "",
        city: "",
        street: "",
        phoneno: "",
        alterno: "",
        address: "",
    });
    const { name, city, street, phoneno, alterno, address } = datas;

    const handledata = (e) => {
        SetStates({ ...datas, [e.target.name]: e.target.value });
    };

    const submits = (e) => {
        // e.preventDefault();
        console.log(name, city, street, phoneno, alterno, address);
        // db.addDOC("address").push(datas, (err) => {
        //     if (err) {
        //         toast.error(err);
        //     } else {
        //         toast.success("Address Page Is Success");
        //     }
        // });
        // setTimeout(() => {
        //     usehistory.push("/address");
        // }, 500);
    };

    return (
        <>
            <div className="address">
                <button className="bcs" onClick={() => usehistory.goBack()}>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                <ToastContainer />
                <div className="container my-auto">
                    <div className="inner-body-section">
                        <form onSubmit={handleSubmit(submits)}>
                            <div className="main-form1">
                                <div className="main-form1-left col-lg-6 col-md-10 col-sm-11">
                                    <div className="d-flex flex-column mb-3">
                                        <label>Name</label>
                                        <input
                                            {...register("name", {
                                                required: "no records",
                                            })}
                                            name="name"
                                            value={name}
                                            type="text"
                                            placeholder="Enter Your Name"
                                            onChange={handledata}
                                        />
                                        {errors.name && (
                                            <span style={{ color: "red" }}>
                                                name field is Empty
                                            </span>
                                        )}
                                    </div>
                                    <div className="d-flex flex-column mb-3">
                                        <label>City</label>
                                        <input
                                            {...register("city", {
                                                required: "no records",
                                            })}
                                            name="city"
                                            value={city}
                                            type="text"
                                            placeholder="Enter Your city"
                                            onChange={handledata}
                                        />
                                        {errors.city && (
                                            <span style={{ color: "red" }}>
                                                city field is Empty
                                            </span>
                                        )}
                                    </div>
                                    <div className="d-flex flex-column mb-3">
                                        <label>Street</label>
                                        <input
                                            {...register("street", {
                                                required: "no records",
                                            })}
                                            name="street"
                                            value={street}
                                            type="text"
                                            placeholder="Enter Your street"
                                            onChange={handledata}
                                        />
                                        {errors.street && (
                                            <span style={{ color: "red" }}>
                                                street field is Empty
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="main-form1-right col-lg-6 col-md-10 col-sm-11">
                                    <div className="d-flex flex-column mb-3">
                                        <label>Phone No</label>
                                        <input
                                            {...register("phoneno", {
                                                required: "no records",
                                            })}
                                            name="phoneno"
                                            value={phoneno}
                                            type="text"
                                            placeholder="Enter Your phoneno"
                                            onChange={handledata}
                                        />
                                        {errors.phoneno && (
                                            <span style={{ color: "red" }}>
                                                phoneno field is Empty
                                            </span>
                                        )}
                                    </div>
                                    <div className="d-flex flex-column mb-3">
                                        <label>Aleter No</label>
                                        <input
                                            {...register("alterno", {
                                                required: "no records",
                                            })}
                                            name="alterno"
                                            value={alterno}
                                            type="text"
                                            placeholder="Enter Your alterno"
                                            onChange={handledata}
                                        />
                                        {errors.alterno && (
                                            <span style={{ color: "red" }}>
                                                alterno field is Empty
                                            </span>
                                        )}
                                    </div>
                                    <div className="d-flex flex-column mb-3">
                                        <label>Address</label>
                                        <input
                                            {...register("address", {
                                                required: "no records",
                                            })}
                                            name="address"
                                            value={address}
                                            type="text"
                                            placeholder="Enter Your address"
                                            onChange={handledata}
                                        />
                                        {errors.address && (
                                            <span style={{ color: "red" }}>
                                                address field is Empty
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div
                                className=""
                                style={{
                                    margin: "0 auto",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <button
                                    className="btns"
                                    style={{
                                        padding: "10px 100px",
                                        border: "none",
                                        outline: "none",
                                        borderRadius: "30px",
                                        backgroundColor: "lightblue",
                                        marginTop: "10px",
                                        fontSize: "1.4rem",
                                        fontWeight: "700",
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Address;
