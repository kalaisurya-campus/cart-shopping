import React from "react";
import { useParallax } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import p1 from "../../assests/parallax/p1.webp";

function AnotherParallax(props) {
    return (
        <ParallaxBanner
            className="your-class"
            layers={[
                {
                    image: "https://embed-ssl.wistia.com/deliveries/fdc853e044d920af183fff563ee477ad93f58cdc.jpg",
                    amount: 0.1,
                },
            ]}
            style={{
                height: "100vh",
            }}
        >
            <h1>Banner Children</h1>
        </ParallaxBanner>
    );
}

export default AnotherParallax;
