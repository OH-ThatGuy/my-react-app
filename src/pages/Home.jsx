import { useState } from "react";
import "../App.css";

import area1 from "../images/area1.jpg";
import boss1 from "../images/boss1.jpg";
import area2 from "../images/area2.jpg";
import boss2 from "../images/boss2.jpg";
import area3 from "../images/area3.jpg";
import boss3 from "../images/boss3.jpg";
import area4 from "../images/area4.jpg";
import boss4 from "../images/boss4.jpg";
import area5 from "../images/area5.jpg";
import boss5 from "../images/boss5.jpg";
import area6 from "../images/area6.jpg";
import boss6 from "../images/boss6.jpg";
import area7 from "../images/area7.jpg";
import boss7 from "../images/boss7.jpg";
import area8 from "../images/area8.jpg";
import boss8 from "../images/boss8.jpg";

function Home() {
    const areas = [
        {
            name: "Forest of Fallen Giants",
            areaImg: area1,
            areaText: "An old forest with remnants of battle and giant trees (literally).",
            bossImg: boss1,
            bossName: "The Last Giant",
            bossText: "The last of his kind, until you meet like 3 more giants in a big hole."
        },
        {
            name: "Heide's Tower of Flame",
            areaImg: area2,
            areaText: "No clue who Heide is but this is his tower.",
            bossImg: boss2,
            bossName: "Dragonrider",
            bossText: "Suspicious lack of dragon with this guy."
        },
        {
            name: "Brightstone Cove Tseldora",
            areaImg: area3,
            areaText: "A mine filled with spiders and sand, but mostly spiders.",
            bossImg: boss3,
            bossName: "The Duke's Dear Freja",
            bossText: "This is the outcome of 'If You Give a Mouse a Cookie.'"
        },
        {
            name: "Huntsman's Copse",
            areaImg: area4,
            areaText: "This area taught me what a copse is.",
            bossImg: boss4,
            bossName: "The Executioner's Chariot",
            bossText: "Drunk driving incident as a boss battle."
        },
        {
            name: "Drangleic Castle",
            areaImg: area5,
            areaText: "A massive castle with way too many traps.",
            bossImg: boss5,
            bossName: "Looking Glass Knight",
            bossText: "He uses a pane of glass as a shield and it works somehow."
        },
        {
            name: "Memory of Jeigh",
            areaImg: area6,
            areaText: "This game has time travel now.",
            bossImg: boss6,
            bossName: "The Giant Lord",
            bossText: "The last of his kind, but again."
        },
        {
            name: "The Iron Keep",
            areaImg: area7,
            areaText: "You go up an elevator in the clouds to arrive at a keep sunken in lava, makes sense.",
            bossImg: boss7,
            bossName: "Old Iron King",
            bossText: "Somehow this used to be a normal guy."
        },
        {
            name: "The Black Gulch",
            areaImg: area8,
            areaText: "Statues spit poison at you for 10 minutes.",
            bossImg: boss8,
            bossName: "The Rotton",
            bossText: "He's a lot sweeter than he looks (I think)."
        }
    ];

    const [current, setCurrent] = useState(null);
    const [showBoss, setShowBoss] = useState(false);

    const randomArea = () => {
        const i = Math.floor(Math.random() * areas.length);
        setCurrent(areas[i]);
        setShowBoss(false);
    };

    const toggleBoss = () => {
        if (current) setShowBoss(prev => !prev);
    };

    return (
        <div className="home-container">
            <header className="title-box">
                <h1>Dark Souls II Area Explorer</h1>
            </header>

            <main>
                {!current && (
                    <>
                        <p>Click the button to discover a random area from Dark Souls II.</p>
                        <button onClick={randomArea} className="button">
                            Reveal Area
                        </button>
                    </>
                )}

                {current && (
                    <>
                        <button onClick={randomArea} className="button reroll-button">
                            Reroll Area
                        </button>

                        <div className={`gallery ${showBoss ? "show-boss" : ""}`}>
                            <div className="area" onClick={toggleBoss}>
                                <img src={current.areaImg} alt={current.name} className="area-img" />
                                <div className="text">
                                    <h2>{current.name}</h2>
                                    <p>{current.areaText}</p>
                                    <p className="hint">(Click the image to reveal the boss)</p>
                                </div>
                            </div>

                            <div className="boss" onClick={toggleBoss}>
                                <img src={current.bossImg} alt={current.bossName} className="boss-img" />
                                <div className="text boss-text">
                                    <h2>{current.bossName}</h2>
                                    <p>{current.bossText}</p>
                                    <p className="hint">(Click the boss to return to area)</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}

export default Home;
