// Window.js
import React from 'react';
import './Window.css';

const Window = () => {
    return (
        <div id="window" className="window">
            <div className="window-toolbar">
                <div className="window-buttons">
                    <div className="window-button close"></div>
                    <div className="window-button minimize"></div>
                </div>
                <div className="window-title">Window Title</div>
            </div>
            <div className="window-content"></div>
        </div>
    );
}

export default Window;
