import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import LandingView from './LandingView';
import SecondDataView from "./SecondDataView";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <div className="content-wrapper">
                    <Sidebar />
                    <div className="main-content">
                        <Routes>
                            <Route index element={<LandingView />} />
                            <Route path="seconddataview" element={<SecondDataView />}></Route>
                        </Routes>
                    </div>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
