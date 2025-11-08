import './Body.css'

function Body() {
    return (
        <div className="body-container">
            <div className="sidenav">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>

            <div className="main">
                <h2>Welcome to Xinyi's Page!</h2>
                <p>This page is built from React.</p>
                <p>Scroll down the page to see the result.</p>
                <p></p>
            </div>
        </div>
    );
}

export default Body;