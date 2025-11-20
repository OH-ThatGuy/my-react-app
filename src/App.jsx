import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HealthBar from "./pages/Health";
import Poison from "./pages/Poison";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="page-wrapper">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/healthbar" element={<HealthBar />} />
                    <Route path="/poison" element={<Poison />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
