import React, { useState } from 'react';

// Simple window state management
export const useWindows = () => {
    const [windows, setWindows] = useState([]);

    const openWindow = (id) => {
        setWindows(prev => [...prev, { id, isOpen: true }]);
    };

    const closeWindow = (id) => {
        setWindows(prev => prev.filter(window => window.id !== id));
    };

    return { windows, openWindow, closeWindow };
};

export default useWindows;
