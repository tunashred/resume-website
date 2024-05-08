import React from 'react';

const Settings = ({ selectedFont, setSelectedFont, selectedTheme, setSelectedTheme }) => {
    const handleFontChange = (e) => {
        const font = e.target.value;
        setSelectedFont(font); // Call setSelectedFont function with the new font value
    };

    const handleThemeChange = (e) => {
        const theme = e.target.value;
        setSelectedTheme(theme); // Call setSelectedTheme function with the new theme value
    };

    return (
        <div>
            <h2>Settings</h2>
            <label>
                Select Font:
                <select value={selectedFont} onChange={handleFontChange}>
                    <option value="Open Sans Regular">Open Sans Regular</option>
                    <option value="Open Sans Medium Italic">Open Sans Medium Italic</option>
                    <option value="Open Sans Bold">Open Sans Bold</option>
                    <option value="Open Sans Extrabold">Open Sans Extrabold</option>
                    <option value="Open Sans Medium">Open Sans Medium</option>
                    <option value="Open Sans SemiCondensed Medium Italic">Open Sans SemiCondensed Medium Italic</option>
                    <option value="Open Sans SemiCondensed Extrabold">Open Sans SemiCondensed Extrabold</option>
                    <option value="Open Sans Semibold">Open Sans Semibold</option>
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
