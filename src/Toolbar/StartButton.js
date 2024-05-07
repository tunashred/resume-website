import React, { useState } from 'react';

const StartButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <button className={`start-button ${isMenuOpen ? 'selected' : ''}`} onClick={toggleMenu} title="Click here to begin.">
                <img src="../images/start_menu_xp-0.png" alt="Start" />
                <b>Start</b>
            </button>
            {isMenuOpen && (
                <div className="start-menu" style={{ zIndex: 5001 }}>
                    {/* Contents of your start menu */}
                </div>
            )}
        </>
    );
};

export default StartButton;
