import { useState } from "react"
import "./App.css"
import area1 from "./images/area1.jpg"
import boss1 from "./images/boss1.jpg"
import area2 from "./images/area2.jpg"
import boss2 from "./images/boss2.jpg"
import area3 from "./images/area3.jpg"
import boss3 from "./images/boss3.jpg"

function App() {
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
            bossText: "This is the outcome of If You Give a Mouse a Cookie."
        }
    ]

    const [current, setCurrent] = useState(null)
    const [showBoss, setShowBoss] = useState(false)

    const randomArea = () => {
        const i = Math.floor(Math.random() * areas.length)
        setCurrent(areas[i])
        setShowBoss(false)
    }

    const toggleBoss = () => {
        if (current) setShowBoss(prev => !prev)
    }

    return (
        <div className="App">
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
                )}
            </main>
        </div>
    )
}

export default App
