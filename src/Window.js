import React, { useState } from 'react';
import './Window.css';
import Portfolio from "./Portfolio/Portfolio";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";

const Window = ({ id, onClose, pageOpened }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [windowPosition, setWindowPosition] = useState({ x: 100, y: 100 }); // Initial position
    const [isResizing, setIsResizing] = useState(false);
    const [resizeOffset, setResizeOffset] = useState({ x: 0, y: 0 });
    const [windowSize, setWindowSize] = useState({ width: 500, height: 300 }); // Initial size

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
            <div className="window-resize-handle"></div>
        </div>
    );
};

export default Window;
