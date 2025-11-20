import { useState } from "react";
import "../App.css";

function Health({ max, current }) {
    const percent = (current / max) * 100;
    return (
        <div style={{
            width: "250px",
            height: "25px",
            border: "2px solid #b65d14",
            borderRadius: "6px",
            backgroundColor: "#2a2a2a",
            overflow: "hidden",
            margin: "1rem auto"
        }}>
            <div style={{
                width: `${percent}%`,
                height: "100%",
                backgroundColor: "#ff4d4d",
                transition: "width 0.5s"
            }} />
        </div>
    );
}

function HealthBar() {
    const maxHP = 1000;
    const [currentHP, setCurrentHP] = useState(maxHP);

    const takeDamage = () => setCurrentHP(prev => Math.max(prev - 100, 0));
    const heal = () => setCurrentHP(prev => Math.min(prev + 100, maxHP));

    return (
        <div className="home-container">
            <header className="title-box">
                <h1>Health Bar Simulator</h1>
            </header>
            <main>
                <p>Simulate a health bar by dealing damage or healing.</p>
                <Health max={maxHP} current={currentHP} />
                <div style={{ marginTop: "1rem" }}>
                    <button onClick={takeDamage} className="button" style={{ marginRight: "1rem" }}>
                        Deal 100 Damage
                    </button>
                    <button onClick={heal} className="button">
                        Heal 100 HP
                    </button>
                </div>
                <p style={{ marginTop: "1rem", color: "#e0e0e0" }}>
                    Current HP: {currentHP} / {maxHP}
                </p>
            </main>
        </div>
    );
}

export default HealthBar;
