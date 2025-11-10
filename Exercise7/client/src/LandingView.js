import React, { useState, useEffect, useRef } from "react";
import "./LandingView.css";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function LandingView() {

    const [loadingData, setLoadingData] = useState(true);
    const [error, setError] = useState(false);
    const [emptyData, setEmptyData] = useState(false);
    const [data, setData] = useState(false);

    const nodeRef = useRef(null);

    const lat = "35.6895";
    const lon = "139.6917";

    const APIkey = "3cd20fd790580997074cea60f7080ddf"

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
        )
            // handling responses
            .then((response) => response.json())
            // handling normal data state
            .then((actualData) => {
                setLoadingData(false);
                setError(false);
                if (!actualData || !actualData.main) {
                    setEmptyData(true);
                    return;
                }
                setData(actualData);
            })
            // handling errors
            .catch((err) => {
                // console.log(err.message);
                setLoadingData(false);
                setError(true);
            });
    }, []);
    const kelvinToCelsius = (k) => (k - 273.15).toFixed(1);
    // Render
    // UI status：use key to let SwitchTransition know the changes
    let currentState = "loading";
    if (error) currentState = "error";
    else if (data) currentState = "data";
    else if (emptyData) currentState = "empty";

    return (
        <div className="main">
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={currentState}
                    timeout={500}
                    nodeRef={nodeRef}
                    classNames="fade"
                    unmountOnExit
                >
                    <div ref={nodeRef}>
                        {loadingData && <p>Loading weather data...</p>}

                        {error && <p className="error">Error loading data</p>}

                        {emptyData && <p>No data found for this location.</p>}

                        {!loadingData && !error && data && (
                            <>
                                <h2>Weather in {data.name}</h2>
                                <p>Temperature: {kelvinToCelsius(data.main.temp)} °C</p>
                                <p>
                                    Min: {kelvinToCelsius(data.main.temp_min)} °C | Max:{" "}
                                    {kelvinToCelsius(data.main.temp_max)} °C
                                </p>
                                <p>
                                    Condition: {data.weather[0].main} (
                                    {data.weather[0].description})
                                </p>
                                <p> Wind: {data.wind.speed} m/s, direction {data.wind.deg}° </p>
                            </>
                        )}
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
}

export default LandingView;