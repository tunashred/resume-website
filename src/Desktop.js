// Desktop.js
import React, { useState } from 'react';
import './Desktop.css';
import MyComputerIcon from './images/computer_explorer-5.png';
import RecycleBinIcon from './images/recycle_bin_empty-4.png';
import MyDocumentsIcon from './images/directory_open_file_mydocs-4.png';
import NetworkIcon from './images/network_cool_two_pcs-0.png';
import PortfolioIcon from './images/computer_explorer-5.png'; // Update with actual path
import BlogIcon from './images/outlook_express-0.png';
import ContactIcon from './images/msie2-2.png';

// Define initial icon positions
const initialIconPositions = {
    'My Computer': { x: 0, y: 0 },
    'Recycle Bin': { x: 0, y: 0 },
    'My Documents': { x: 0, y: 0 },
    'Network': { x: 0, y: 0 },
    'Portfolio': { x: 0, y: 0 },
    'Blog': { x: 0, y: 0 },
    'Contact': { x: 0, y: 0 }
};

const Desktop = () => {
    // State to manage the currently selected icon
    const [selectedIcon, setSelectedIcon] = useState(null);
    // State to store the position of each desktop icon
    const [iconPositions, setIconPositions] = useState({
        'My Computer': { x: 50, y: 50 },
        'Recycle Bin': { x: 200, y: 50 },
        'My Documents': { x: 350, y: 50 },
        'Network': { x: 50, y: 150 },
        'Portfolio': { x: 200, y: 150 },
        'Blog': { x: 350, y: 150 },
        'Contact': { x: 50, y: 250 }
    });

    // Handle icon click
    const handleIconClick = (iconName, e) => {
        e.stopPropagation(); // Stop propagation to prevent deselection
        // Toggle selection
        setSelectedIcon(prevIcon => prevIcon === iconName ? null : iconName);
    };

    // Handle click outside of icons to deselect the icon
    const handleOutsideClick = () => {
        setSelectedIcon(null);
    };

    // Function to handle icon drag start
    const handleIconDragStart = (e, iconName) => { 
        e.dataTransfer.setData('iconName', iconName);
    };

    const handleIconDrop = (e) => {
        e.preventDefault();
        const iconName = e.dataTransfer.getData('iconName');
        const { clientX, clientY } = e;
        const desktopRect = e.target.getBoundingClientRect();

        // Calculate the grid position based on the cursor position
        const gridX = Math.round((clientX - desktopRect.left) / gridSize) * gridSize;
        const gridY = Math.round((clientY - desktopRect.top) / gridSize) * gridSize;

        // Check for collisions with other icons
        let collisionDetected = false;
        Object.entries(iconPositions).forEach(([icon, position]) => {
            if (icon !== iconName && Math.abs(position.x - gridX) < gridSize && Math.abs(position.y - gridY) < gridSize) {
                // Collision detected, adjust position
                collisionDetected = true;
                return;
            }
        });

        // If collision detected, move the icon back to its original position
        if (collisionDetected) {
            setIconPositions(prevPositions => ({
                ...prevPositions,
                [iconName]: { x: initialIconPositions[iconName].x, y: initialIconPositions[iconName].y }
            }));
        } else {
            // No collision, update the icon position
            setIconPositions(prevPositions => ({
                ...prevPositions,
                [iconName]: { x: gridX, y: gridY }
            }));
        }
    };

// Define gridSize in pixels (e.g., 50px)
    const gridSize = 80;

    // Function to handle drag over
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div
            id="desktop"
            onClick={handleOutsideClick}
            onDrop={handleIconDrop}
            onDragOver={handleDragOver}
        >
            {/* Desktop icons */}
            <div className="desktop-icons">
                {/* My Computer */}
                <div
                    className={`desktop-icon ${selectedIcon === 'My Computer' ? 'selected' : ''}`}
                    onClick={(e) => handleIconClick('My Computer', e)}
                    draggable={true}
                    onDragStart={(e) => handleIconDragStart(e, 'My Computer')}
                    style={{ left: iconPositions['My Computer'].x, top: iconPositions['My Computer'].y }}
                >
                    <img src={MyComputerIcon} alt="My Computer" title="My Computer" />
                    <span>My Computer</span>
                </div>
                {/* Recycle Bin */}
                <div
                    className={`desktop-icon ${selectedIcon === 'Recycle Bin' ? 'selected' : ''}`}
                    onClick={(e) => handleIconClick('Recycle Bin', e)}
                    draggable={true}
                    onDragStart={(e) => handleIconDragStart(e, 'Recycle Bin')}
                    style={{ left: iconPositions['Recycle Bin'].x, top: iconPositions['Recycle Bin'].y }}
                >
                    <img src={RecycleBinIcon} alt="Recycle Bin" title="Recycle Bin" />
                    <span>Recycle Bin</span>
                </div>
                {/* My Documents */}
                <div
                    className={`desktop-icon ${selectedIcon === 'My Documents' ? 'selected' : ''}`}
                    onClick={(e) => handleIconClick('My Documents', e)}
                    draggable={true}
                    onDragStart={(e) => handleIconDragStart(e, 'My Documents')}
                    style={{ left: iconPositions['My Documents'].x, top: iconPositions['My Documents'].y }}
                >
                    <img src={MyDocumentsIcon} alt="My Documents" title="My Documents" />
                    <span>My Documents</span>
                </div>
                {/* Network Neighborhood */}
                <div
                    className={`desktop-icon ${selectedIcon === 'Network' ? 'selected' : ''}`}
                    onClick={(e) => handleIconClick('Network', e)}
                    draggable={true}
                    onDragStart={(e) => handleIconDragStart(e, 'Network')}
                    style={{ left: iconPositions['Network'].x, top: iconPositions['Network'].y }}
                >
                    <img src={NetworkIcon} alt="Network" title="Network" />
                    <span>Network</span>
                </div>
                {/* Portofolio */}
                <div
                    className={`desktop-icon ${selectedIcon === 'Portfolio' ? 'selected' : ''}`}
                    onClick={(e) => handleIconClick('Portfolio', e)}
                    draggable={true}
                    onDragStart={(e) => handleIconDragStart(e, 'Portfolio')}
                    style={{ left: iconPositions['Portfolio'].x, top: iconPositions['Portfolio'].y }}
                >
                    <img src={PortfolioIcon} alt="Portofolio" title="Portofolio" />
                    <span>Portofolio</span>
                </div>
                {/* Blog */}
                <div
                    className={`desktop-icon ${selectedIcon === 'Blog' ? 'selected' : ''}`}
                    onClick={(e) => handleIconClick('Blog', e)}
                    draggable={true}
                    onDragStart={(e) => handleIconDragStart(e, 'Blog')}
                    style={{ left: iconPositions['Blog'].x, top: iconPositions['Blog'].y }}
                >
                    <img src={BlogIcon} alt="Blog" title="Blog" />
                    <span>Blog</span>
                </div>
                {/* Contact */}
                <div
                    className={`desktop-icon ${selectedIcon === 'Contact' ? 'selected' : ''}`}
                    onClick={(e) => handleIconClick('Contact', e)}
                    draggable={true}
                    onDragStart={(e) => handleIconDragStart(e, 'Contact')}
                    style={{ left: iconPositions['Contact'].x, top: iconPositions['Contact'].y }}
                >
                    <img src={ContactIcon} alt="Contact" title="Contact" />
                    <span>Contact</span>
                </div>
            </div>
        </div>
    );
}

export default Desktop;
