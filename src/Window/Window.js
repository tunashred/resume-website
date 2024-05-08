import React, {useEffect, useRef, useState} from 'react';

import Portfolio from "../Portfolio/Portfolio";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import HelpPopup from "./HelpPopup";

import './Window.css';
import Settings from "../Settings";

const Window = ({ selectedFont, setSelectedFont, selectedTheme, setSelectedTheme, id, onClose, pageOpened }) => {
    const initialSettings = {
        Portfolio: {position: {x: 100, y: 100}, size: {width: 1730, height: 810}},
        Contact: {position: {x: 1340, y: 50}, size: {width: 430, height: 620}},
        Blog: {position: {x: 130, y: 140}, size: {width: 1160, height: 780}}
    };

    const initialSize = initialSettings[pageOpened]?.size || {width: 500, height: 300};
    const initialPosition = initialSettings[pageOpened]?.position || {x: 100, y: 100};
    const [windowSize, setWindowSize] = useState(initialSize);
    const [windowPosition, setWindowPosition] = useState(initialPosition);

    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({x: 0, y: 0});
    const [isResizing, setIsResizing] = useState(false);
    const [resizeOffset, setResizeOffset] = useState({x: 0, y: 0});

    const handleMouseDown = (e) => {
        const {clientX, clientY} = e;
        const rect = e.target.getBoundingClientRect();

        // Check if clicked on the resize handle
        if (clientX > rect.right - 20 && clientY > rect.bottom - 20) {
            setIsResizing(true);
            setResizeOffset({
                x: windowSize.width - clientX,
                y: windowSize.height - clientY
            });
        } else {
            setIsDragging(true);
            setDragOffset({x: clientX - windowPosition.x, y: clientY - windowPosition.y});
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const newX = e.clientX - dragOffset.x;
            const newY = e.clientY - dragOffset.y;
            setWindowPosition({x: newX, y: newY});
        }
        if (isResizing) {
            const newWidth = e.clientX - windowPosition.x + resizeOffset.x;
            const newHeight = e.clientY - windowPosition.y + resizeOffset.y;
            setWindowSize({width: newWidth, height: newHeight});
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setIsResizing(false);
    };

    const [showHelp, setShowHelp] = useState(false);
    // Manually hardcoded starting position for the popup
    const initialHelpPosition = {x: 0, y: 0};
    const [helpPosition, setHelpPosition] = useState(initialHelpPosition);

    const helpButtonRef = useRef(null);

    const calculatePopupPosition = () => {
        if (helpButtonRef.current) {
            const buttonRect = helpButtonRef.current.getBoundingClientRect();
            // Calculate position relative to the button
            const popupX = buttonRect.left - 161;
            const popupY = buttonRect.bottom - 75;
            return {x: popupX, y: popupY};
        }
        // If button reference is not available, return default position
        return {x: 0, y: 0};
    };

    useEffect(() => {
        // Update popup position on initial render and window resize
        calculatePopupPosition();
        window.addEventListener('resize', calculatePopupPosition);
        return () => window.removeEventListener('resize', calculatePopupPosition);
    }, []);

    const toggleHelp = () => {
        setShowHelp(!showHelp);
        // Recalculate and set the popup position when opening the help
        if (!showHelp) {
            setHelpPosition(calculatePopupPosition());
        }
    };

    const closeHelp = () => {
        setShowHelp(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (showHelp) {
                setHelpPosition(calculatePopupPosition());
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [showHelp]);

    let helpMessage = ''; // Define the help message based on the page opened
    if (pageOpened === "Portfolio") {
        helpMessage = "Here is a list of the projects I made. You can find a short description for each of them and access the GitHub links.";
    } else if (pageOpened === "Blog") {
        helpMessage = "This is the Blog page help message.";
    } else if (pageOpened === "Contact") {
        helpMessage = "This is the Contact page help message.";
    }

    return (
        <div style = { {fontFamily: selectedFont} } >
            <div className="window"
                 style={{top: windowPosition.y, left: windowPosition.x, width: windowSize.width, height: windowSize.height}}
                 onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} >
                <div className="window-toolbar" onMouseDown={handleMouseDown}>
                    <span>{pageOpened}</span>
                    <div className="window-buttons">
                        <button className="window-button close" onClick={() => onClose(id)}></button>
                        <button className="window-button help" onClick={toggleHelp} ref={helpButtonRef}></button>
                    </div>
                </div>
                <div className="window-content">
                    {pageOpened === "Portfolio" && <Portfolio/>}
                    {pageOpened === "Blog" && <Blog/>}
                    {pageOpened === "Contact" && <Contact/>}
                    {pageOpened === "Settings" && (
                        <Settings
                            selectedFont={selectedFont}
                            setSelectedFont={setSelectedFont}
                            selectedTheme={selectedTheme}
                            setSelectedTheme={setSelectedTheme}
                        />
                    )}
                </div>
                {/* Invisible icon handlers */}
                <div className="icon-handler bottom-right" onMouseDown={handleMouseDown}></div>

                {/* Conditionally render the HelpPopup component */}
                {showHelp && <HelpPopup message={helpMessage} onClose={closeHelp} position={helpPosition}/>}
            </div>
        </div>
    );
};

export default Window;
