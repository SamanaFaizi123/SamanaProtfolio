import NavbarMenue from "./Components/NavBar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";



function App() {
    return (
        <div>

            <Router>
                < NavbarMenue />
                
                <Routes>
                    <Route path="/about" element={<About />}>
                    </Route>
                    <Route path="/projects" element={<Projects />}>
                    </Route>
                    <Route path="/Contact" element={<Contact />}>
                    </Route>
                    <Route path="/" element={<Home />}>
                    </Route>
                </Routes>
                
                <Footer />
            </Router>
        </div>
    )
}
export default App;