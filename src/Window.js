import React from 'react';
import './Window.css';

const Window = ({ id, onClose }) => {
    return (
        <div className="window">
            <div className="window-toolbar">
                <span>Window Title</span>
                <div className="window-buttons">
                    <button className="window-button close" onClick={() => onClose(id)}></button>
                    <button className="window-button help"></button>
                </div>
            </div>
            <div className="window-content">
                <p>This is the content of the window with id: {id}</p>
            </div>
            <div className="window-resize-handle"></div>
        </div>
    );
};

export default Window;
