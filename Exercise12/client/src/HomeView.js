import React from "react";
import "./View.css";
import tiramisuImg from "./assets/Tiramisu.jpg";
import cookieImg from "./assets/Cookie.jpg";
import donutImg from "./assets/Donut.jpg";

function HomeView() {
    return (
        <div className="article-container">
            <div className="article-box">
                <h1> Welcome to Recipe! </h1>
                <div className="welcome-words">
                    <p> We provide 3 famous dessert recipes here. </p>
                    <p> They are <b>Tiramisu</b>, <b>Cookie</b> and <b>Donut</b>. </p>
                    <p> Wish you a pleasant time using these recipes! </p>
                </div>
            </div>
            <div className="image-box">
                <figure className="image-card">
                    <img src={tiramisuImg} alt="Tiramisu" />
                    <figcaption><a href="https://tastesbetterfromscratch.com/easy-tiramisu/" target="_blank">Tiramisu</a></figcaption>
                </figure>
                <figure className="image-card">
                    <img src={cookieImg} alt="Cookie"/>
                    <figcaption><a href="https://tastesbetterfromscratch.com/super-soft-sugar-cookies/" target="_blank">Cookie</a></figcaption>
                </figure>
                <figure className="image-card">
                    <img src={donutImg} alt="Donut"/>
                    <figcaption><a href="https://tastesbetterfromscratch.com/old-fashioned-sour-cream-donuts/" target="_blank">Donut</a></figcaption>
                </figure>
            </div>
        </div>
    );
}

export default HomeView;