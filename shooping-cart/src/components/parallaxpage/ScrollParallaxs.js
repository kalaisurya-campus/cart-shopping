import React from "react";
import { Parallax, Background } from "react-parallax";
import "./styles/ScrollParallaxs.scss";

import p1 from "../../assests/parallax/p1.webp";
import p2 from "../../assests/parallax/p2.jpg";
import p3 from "../../assests/parallax/p3.jpg";
import p4 from "../../assests/parallax/p4.jpg";
import p5 from "../../assests/parallax/p5.webp";
import p6 from "../../assests/parallax/p6.jpg";
import AnotherParallax from "./AnotherParallax";
function ScrollParallaxs(props) {
    return (
        <div className="containers">
            <div className="box">
                <Parallax
                    bgImage={p1}
                    bgImageAlt="the cat"
                    className="imag-sc"
                    strength={200}
                >
                    Content goes here. Parallax height grows with content
                    height.
                </Parallax>
            </div>
            <div className="box">
                <Parallax
                    bgImage={p2}
                    bgImageAlt="the cat"
                    className="imag-sc"
                    strength={200}
                >
                    Content goes here. Parallax height grows with content
                    height.
                </Parallax>
            </div>

            <div className="box">
                <Parallax
                    bgImage={p3}
                    bgImageAlt="the cat"
                    className="imag-sc"
                    strength={200}
                >
                    Content goes here. Parallax height grows with content
                    height.
                </Parallax>
            </div>
            <div className="box">
                <Parallax
                    bgImage={p4}
                    bgImageAlt="the cat"
                    className="imag-sc"
                    strength={200}
                >
                    Content goes here. Parallax height grows with content
                    height.
                </Parallax>
            </div>
            <div className="box">
                <Parallax
                    bgImage={p5}
                    bgImageAlt="the cat"
                    className="imag-sc"
                    strength={200}
                >
                    Content goes here. Parallax height grows with content
                    height.
                </Parallax>
            </div>
            <div className="box">
                <Parallax
                    bgImage={""}
                    bgImageAlt="the cat"
                    className="imag-sc"
                    strength={200}
                >
                    <Background className="imag-sc">
                        <img src={p6} alt="fill murray" className="imag-sc" />
                    </Background>
                </Parallax>
            </div>
        </div>
    );
}

export default ScrollParallaxs;
