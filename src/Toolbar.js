// Toolbar.js
import React from 'react';
import './Toolbar.css';

const Toolbar = () => {
    return (
        <div id="toolbar">
            {/* Toolbar content */}
            <div className="toolbar-start-menu">
                <button className="start-button">
                    Start
                </button>

                <div className="start-menu-wrapper">
                    <div className="start-menu-title">
                        <span><strong>Windows</strong>98</span>
                    </div>

                    <div className="start-menu">
                        <button className="start-menu-link">
                            Shut down
                        </button>
                    </div>
                </div>
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
