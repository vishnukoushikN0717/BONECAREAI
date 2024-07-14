import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutBoneFracture from './components/AboutBoneFracture';
import CureMethods from './components/cureMethods';
import AIModelIntegration from './components/AImodel';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-bone-fracture" element={<AboutBoneFracture />} />
                        <Route path="/cure-methods" element={<CureMethods />} />
                        <Route path="/ai-model" element={<AIModelIntegration />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
