import React from 'react';
import './HelpPopup.css';

const HelpPopup = ({ message, onClose, position }) => {
    return (
        <div className="popup-windows98" style={{ position: 'fixed', top: position.y, left: position.x }}>
            <div className="popup-body">
                {message}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default HelpPopup;
