// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import FindDoctor from './pages/FindDoctor';
import Recommendations from './pages/Recommendations';
import { gsap } from 'gsap';
import ContentDisplay from './pages/ContentDisplay';
import SymptomChecker from './pages/SymptomChecker';
import './App.css';
import AITool from './pages/AITool';


const AnimatedRoutes = () => {
    const location = useLocation();
    
    React.useEffect(() => {
        gsap.from(window.scrollTo(0, 0), { opacity: 0, duration: 0.5 });
    }, [location]);

    return (
        <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<FindDoctor />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/content" element={<ContentDisplay />} />
            <Route path="/symptom-checker" element={<SymptomChecker />} />

        </Routes>
    );
};
const App = () => {
    return (
        <Router>
            <Header />
            <AnimatedRoutes>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/doctors" element={<FindDoctor />} />
                    <Route path="/recommendations" element={<Recommendations />} />
                    <Route path="/content" element={<ContentDisplay />} />
                    <Route path="/ai-tool" element={<AITool />} /> 
                    <Route path="/symptom-checker" element={<SymptomChecker />} />
                       {/* Add other routes as necessary */}
                </Routes>
            </AnimatedRoutes>
        </Router>
    );
  };
export default App;
