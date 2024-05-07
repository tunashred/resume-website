// SettingsContext.js

import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
    const [selectedFont, setSelectedFont] = useState('Arial');
    const [selectedTheme, setSelectedTheme] = useState('classic');

    return (
        <SettingsContext.Provider value={{ selectedFont, setSelectedFont, selectedTheme, setSelectedTheme }}>
            {children}
        </SettingsContext.Provider>
    );
};
