import React, { useState } from 'react';

// Simple window state management
export const useWindows = () => {
    const [windows, setWindows] = useState([]);
    const [windowCounter, setWindowCounter] = useState(0); // Counter for generating unique IDs

    const openWindow = (content) => {
        const id = `window-${windowCounter}`; // Generate unique ID
        setWindows(prev => [...prev, { id, isOpen: true, content }]); // Include content in window object
        setWindowCounter(prev => prev + 1); // Increment counter
        return id; // Return the generated ID
    };

    const closeWindow = (id) => {
        setWindows(prev => prev.filter(window => window.id !== id));
    };

    const updateWindowContent = (id, newContent) => {
        setWindows(prev =>
            prev.map(window => (window.id === id ? { ...window, content: newContent } : window))
        );
    };

    return { windows, openWindow, updateWindowContent, closeWindow };
};




export default useWindows;
