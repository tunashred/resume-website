import React, { useState } from 'react';
import Portfolio from "./Portfolio/Portfolio";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import './Window.css';

const Window = ({ id, onClose, pageOpened }) => {
    const initialSettings = {
        Portfolio: { position: { x: 100, y: 100 }, size: { width: 1730, height: 810 } },
        Contact: { position: { x: 1340, y: 50 }, size: { width: 430, height: 620 } },
        Blog: { position: { x: 130, y: 140 }, size: { width: 1160, height: 780 } }
    };
    // Initialize window size and position based on the pageOpened
    const initialSize = initialSettings[pageOpened]?.size || { width: 500, height: 300 };
    const initialPosition = initialSettings[pageOpened]?.position || { x: 100, y: 100 };
    const [windowSize, setWindowSize] = useState(initialSize);
    const [windowPosition, setWindowPosition] = useState(initialPosition);

    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [isResizing, setIsResizing] = useState(false);
    const [resizeOffset, setResizeOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        const { clientX, clientY } = e;
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
            setDragOffset({ x: clientX - windowPosition.x, y: clientY - windowPosition.y });
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const newX = e.clientX - dragOffset.x;
            const newY = e.clientY - dragOffset.y;
            setWindowPosition({ x: newX, y: newY });
        }
        if (isResizing) {
            const newWidth = e.clientX - windowPosition.x + resizeOffset.x;
            const newHeight = e.clientY - windowPosition.y + resizeOffset.y;
            setWindowSize({ width: newWidth, height: newHeight });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setIsResizing(false);
    };

    return (
        <div className="window"
             style={{top: windowPosition.y, left: windowPosition.x, width: windowSize.width, height: windowSize.height}}
             onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <div className="window-toolbar" onMouseDown={handleMouseDown}>
                <span>{pageOpened}</span>
                <div className="window-buttons">
                    <button className="window-button close" onClick={() => onClose(id)}></button>
                    <button className="window-button help"></button>
                </div>
            </div>
            <div className="window-content">
                {pageOpened === "Portfolio" && <Portfolio />}
                {pageOpened === "Blog" && <Blog />}
                {pageOpened === "Contact" && <Contact />}
            </div>
            {/* Invisible icon handlers */}
            <div className="icon-handler bottom-right" onMouseDown={handleMouseDown}></div>
        </div>
    );
};

export default Window;
