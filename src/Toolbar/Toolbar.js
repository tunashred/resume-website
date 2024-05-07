import React, {useState} from 'react';
import './Toolbar.css';

const Toolbar = () => {
    const [startMenuVisible, setStartMenuVisible] = useState(false);

    const toggleStartMenu = () => {
        console.log("Start menu visibility toggled");
        setStartMenuVisible(!startMenuVisible);
    };

    return (
        <div id="toolbar">
            <div className="toolbar-start-menu">
                <button className="start-button" onClick={toggleStartMenu}>
                    Start
                </button>
            </div>
            <div className="toolbar-separator"></div>
            <div className="toolbar-separator"></div>

            <div className="toolbar-right">
                <div className="time"><span className="hour"></span>:
                    <span className="minutes"></span> AM
                </div>
            </div>
        </div>
    );
}

export default Toolbar;
