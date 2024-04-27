// Toolbar.js
import React, { useState } from 'react';
import './Toolbar.css';

const Toolbar = () => {
    const [startMenuVisible, setStartMenuVisible] = useState(false);

    const toggleStartMenu = () => {
        console.log("Start menu visibility toggled");
        setStartMenuVisible(!startMenuVisible);
    };

    return (
        <div id="toolbar">
            {/* Toolbar content */}
            <div className="toolbar-start-menu">
                <button className="start-button" onClick={toggleStartMenu}>
                    Start
                </button>

                {startMenuVisible && (
                    <div className="start-menu-wrapper">
                        <div className="start-menu-title">
                            <span><strong>Windows</strong>98</span>
                        </div>

                        <div className="start-menu">
                            <button className="start-menu-link">
                                Programs
                            </button>
                            <button className="start-menu-link">
                                Documents
                            </button>
                            <button className="start-menu-link">
                                Settings
                            </button>
                            <button className="start-menu-link">
                                Find
                            </button>
                            <button className="start-menu-link">
                                Help
                            </button>
                            <button className="start-menu-link">
                                Run
                            </button>
                            <button className="start-menu-link">
                                Log off
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="toolbar-separator"></div>

            <div className="toolbar-left">
                {/* Remove the unnecessary icons */}
            </div>

            <div className="toolbar-separator"></div>

            <div className="toolbar-right">
                <div className="time"><span className="hour"></span>:
                    <span className="minutes"></span> AM</div>
            </div>
        </div>
    );
}

export default Toolbar;
