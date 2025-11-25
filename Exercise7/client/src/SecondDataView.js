// Components

import Main from "./Main.js";

// Data

import { MAIN_DATA } from "./data.js";

function SecondDataView() {
    return (
        <>
            <Main content={MAIN_DATA[1].content} />
        </>
    );
}

export default SecondDataView;
//
// import { useEffect } from "react";
// import page1 from './assets/IMG_5454.JPG'
// import page2 from './assets/IMG_5455.jpg'
// import page3 from './assets/IMG_5456.JPG'
// import './SecondDataView.css'
//
// function SecondDataView() {
//     useEffect(() => {
//         // Run DOM code after the component is mounted
//         const slideContainer = document.querySelector(".slide__container");
//         const images = document.querySelectorAll(".slide__container img");
//         const prevButton = document.querySelector("#prevButton");
//         const nextButton = document.querySelector("#nextButton");
//
//         if (!images.length) return; // safeguard
//         let imgSize = images[0].clientWidth;
//
//         let counter = 1;
//         slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;
//
//         const next = () => {
//             if (counter >= images.length - 1) return;
//             counter++;
//             slideContainer.style.transition = "1s ease-in-out";
//             slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;
//         };
//
//         const prev = () => {
//             if (counter <= 0) return;
//             counter--;
//             slideContainer.style.transition =
//                 "transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)";
//             slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;
//         };
//
//         const transitionEnd = () => {
//             if (images[counter].id === "firstClone") {
//                 slideContainer.style.transition = "none";
//                 counter = images.length - counter;
//             }
//             if (images[counter].id === "lastClone") {
//                 slideContainer.style.transition = "none";
//                 counter = images.length - 2;
//             }
//             slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;
//         };
//
//         nextButton.addEventListener("click", next);
//         prevButton.addEventListener("click", prev);
//         slideContainer.addEventListener("transitionend", transitionEnd);
//
//         // Cleanup listeners when component unmounts
//         return () => {
//             nextButton.removeEventListener("click", next);
//             prevButton.removeEventListener("click", prev);
//             slideContainer.removeEventListener("transitionend", transitionEnd);
//         };
//     }, []); // Empty dependency: run once after mount
//
//     return (
//         <>
//             <h1> Big Bear Lake View </h1>
//             <div className="carousel">
//                 <div className="slide__container">
//                     {/* Copy of last image for looping */}
//                     <img src={page3} alt="page3" id="lastClone" />
//                     {/* Main images */}
//                     <img src={page1} alt="page1" />
//                     <img src={page2} alt="page2" />
//                     <img src={page3} alt="page3" />
//                     {/* Copy of first image for looping */}
//                     <img src={page1} alt="page1" id="firstClone" />
//                 </div>
//                 <button id="prevButton">prev</button>
//                 <button id="nextButton">next</button>
//             </div>
//         </>
//     );
// }
//
// export default SecondDataView;