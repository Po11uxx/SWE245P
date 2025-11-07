import logo from './logo.svg';
import './App.css';
import './Header.css'
import './Footer.css'
import './Body.css'

import Header from './Header';
import Footer from './Footer';
import Body from './Body';

function App() {
    return (
        <div className="App">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
