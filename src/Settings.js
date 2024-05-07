import React from 'react';

const Settings = ({ selectedFont, setSelectedFont, selectedTheme, setSelectedTheme }) => {
    const handleFontChange = (e) => {
        setSelectedFont(e.target.value);
    };

    const handleThemeChange = (e) => {
        setSelectedTheme(e.target.value);
    };

    return (
        <div>
            <h2>Settings</h2>
            <label>
                Select Font:
                <select value={selectedFont} onChange={handleFontChange}>
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                    {/* Add more font options */}
                </select>
            </label>
            <label>
                Select Theme:
                <select value={selectedTheme} onChange={handleThemeChange}>
                    <option value="classic">Classic</option>
                    <option value="dark">Dark</option>
                </select>
            </label>
        </div>
    );
};

export default Settings;
