import React, { useState } from 'react';
import Desktop from './Desktop/Desktop';
import Toolbar from './Toolbar/Toolbar';
import './Settings.css';
import './App.css';

const App = () => {
    // Initialize state with default values
    const [selectedFont, setSelectedFont] = useState('Open Sans Regular');
    const [selectedTheme, setSelectedTheme] = useState('classic');

    // Handler function to update font and theme based on Settings component
    const handleFontChange = (font) => {
        setSelectedFont(font);
    };

    const handleThemeChange = (theme) => {
        setSelectedTheme(theme);
    };

    return (
        <div className={`App ${selectedTheme}`}>
            <Desktop
                selectedFont={selectedFont}
                setSelectedFont={handleFontChange} // Pass handler function instead of setSelectedFont directly
                selectedTheme={selectedTheme}
                setSelectedTheme={handleThemeChange} // Pass handler function instead of setSelectedTheme directly
            />
            <Toolbar />
        </div>
    );
};

export default App;
