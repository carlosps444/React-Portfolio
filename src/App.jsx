import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from '../components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css'

function App() {
    const [activeSection, setActiveSection] = useState('AboutMe');

    return (
        <div className="app">
            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
            <main>
                {activeSection === 'AboutMe' && <AboutMe />}
                {activeSection === 'Portfolio' && <Portfoltio />}
                {activeSection === 'Contact' && <Contact />}
            </main>
            <Footer />
        </div>
    );
}

export default App;