import React, { useState, useEffect } from "react";
import "../App.css";

function Poison() {
    const [fill, setFill] = useState(0);
    const [poisoned, setPoisoned] = useState(false);
    const [filling, setFilling] = useState(false);

    const startPoison = () => {
        if (!filling && !poisoned) setFilling(true);
    };

    useEffect(() => {
        if (!filling) return;

        const interval = setInterval(() => {
            setFill(prev => {
                const next = prev + 1;
                if (next >= 100) {
                    clearInterval(interval);
                    setPoisoned(true);
                    setFilling(false);
                    return 100;
                }
                return next;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [filling]);

    return (
        <div className="home-container">
            <h1 style={{ color: poisoned ? "limegreen" : "#e0e0e0" }}>
                {poisoned ? "POISONED" : "Poison Status"}
            </h1>
            <div className="health-bar-container">
                <div
                    className="health-bar-fill"
                    style={{ width: `${fill}%` }}
                ></div>
            </div>
            {!poisoned && (
                <button className="button" onClick={startPoison}>
                    Apply Poison
                </button>
            )}
        </div>
    );
}

export default Poison;
