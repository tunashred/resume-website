import React from 'react';

const Settings = ({ selectedFont, setSelectedFont, selectedTheme, setSelectedTheme }) => {
    const handleFontChange = (e) => {
        setSelectedFont(e.target.value);
    };

    const handleThemeChange = (e) => {
        setSelectedTheme(e.target.value);
    };

    const setTheme = (theme) => {
        setSelectedTheme(theme);
    };

    const setFont = (font) => {
        setSelectedFont(font);
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
