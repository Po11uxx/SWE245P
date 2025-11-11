import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

import HomeView from "./HomeView";
import AboutView from "./AboutView";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Header />
                <section className="content">
                    <Nav />
                    <Routes>
                        <Route path="/" element={<HomeView />} />
                        <Route path="/recipedetail" element={<AboutView />} />
                    </Routes>
                </section>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;