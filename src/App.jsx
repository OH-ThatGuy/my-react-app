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
                    <Route path="/my-react-app/" element={<Home />} />
                    <Route path="/my-react-app/healthbar" element={<HealthBar />} />
                    <Route path="/my-react-app/poison" element={<Poison />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
