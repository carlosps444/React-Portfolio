import React from 'react';
import Navigation from './Navigation';

function Header({ activeSection, setActiveSection }) {
    return (
        <header>
            <div className="container">
                <h1>Carlos</h1>
                <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

            </div>
        </header>
    );
}

export default Header;