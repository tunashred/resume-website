import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="taskbar-time">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
    );
};

export default Clock;
