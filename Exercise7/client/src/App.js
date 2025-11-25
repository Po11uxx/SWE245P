// import './App.css';
//
// import { BrowserRouter, Routes, Route } from "react-router-dom";
//
// import Header from './Header';
// import Footer from './Footer';
// import Sidebar from './Sidebar';
// import LandingView from './LandingView';
// import SecondDataView from "./SecondDataView";
//
// function App() {
//     return (
//         <div className="App">
//             <BrowserRouter>
//                 <Header />
//                 <div className="content-wrapper">
//                     <Sidebar />
//                     <div className="main-content">
//                         <Routes>
//                             <Route index element={<LandingView />} />
//                             <Route path="seconddataview" element={<SecondDataView />}></Route>
//                         </Routes>
//                     </div>
//                 </div>
//                 <Footer />
//             </BrowserRouter>
//         </div>
//     );
// }
//
// export default App;

import React from "react";
import LoginForm from "./LoginForm";
import "./App.css";

function App() {

    // we are also writing a handleSubmit function that will be the output of our form and
    // that could be the interface to a connected backend service
    const handleSubmit = (data) => {
        const json = JSON.stringify(data, null, 4);
        console.clear(); // clearing previous console logs
        console.log(json); // showing what we actually submitted thru the form
    };

    // render method
    return (
        <div className="App">
            <h1>Welcome to Xinyi's Login Page</h1>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default App;