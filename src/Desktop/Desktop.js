import {useState} from "react";
import './Desktop.css';
import Window from "../Window/Window";
import {useWindows} from '../Window/WindowManager';

import MyComputerIcon from '../images/computer_explorer-5.png';
import RecycleBinIcon from '../images/recycle_bin_empty-4.png';
import MyDocumentsIcon from '../images/directory_open_file_mydocs-4.png';
import NetworkIcon from '../images/network_cool_two_pcs-0.png';
import PortfolioIcon from '../images/computer_explorer-5.png';
import BlogIcon from '../images/outlook_express-0.png';
import ContactIcon from '../images/msie2-2.png';
import SettingsIcon from '../images/settings_gear-0.png';

import Portfolio from "../Portfolio/Portfolio";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";

const Desktop = ({selectedFont, setSelectedFont, selectedTheme, setSelectedTheme}) => {
    const gridSize = 80;
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [iconPositions, setIconPositions] = useState({
        'My Computer': {x: 0, y: 0},
        'Recycle Bin': {x: 5, y: 80},
        'My Documents': {x: -5, y: 160},
        'Network': {x: 0, y: 240},
        'Portfolio': {x: 690, y: 0},
        'Blog': {x: 770, y: 0},
        'Contact': {x: 1830, y: 690},
        'Settings': {x: 100, y: 500} // Position for the Settings icon
    });

    const {windows, openWindow, closeWindow} = useWindows();

    const handleIconClick = (iconName, e) => {
        e.stopPropagation(); // Stop propagation to prevent deselection
        // Toggle selection
        setSelectedIcon(prevIcon => prevIcon === iconName ? null : iconName);
    };

    const handleIconDoubleClick = (iconName) => {
        console.log("Clicked icon:", iconName);
        switch (iconName) {
            case "Portfolio":
            case "Blog":
            case "Contact":
            case "Settings": // Open Settings window on double click
                openWindow(iconName);
                break;
            default:
                break;
        }
    };

    const handleOutsideClick = () => {
        setSelectedIcon(null);
    };


    const handleIconDragStart = (e, iconName) => {
        e.dataTransfer.setData('iconName', iconName);
    };

    const handleIconDrop = (e) => {
        e.preventDefault();
        const iconName = e.dataTransfer.getData('iconName');
        const {clientX, clientY} = e;
        const desktopRect = e.target.getBoundingClientRect();

        // Calculate the grid position based on the cursor position
        const gridX = Math.round((clientX - desktopRect.left) / gridSize) * gridSize;
        const gridY = Math.round((clientY - desktopRect.top) / gridSize) * gridSize;

        let collisionDetected = false;
        Object.entries(iconPositions).forEach(([icon, position]) => {
            if (icon !== iconName && Math.abs(position.x - gridX) < gridSize && Math.abs(position.y - gridY) < gridSize) {
                collisionDetected = true;
            }
        });

        if (collisionDetected) {
            let nearestPosition = {x: gridX, y: gridY};
            let minDistance = Number.MAX_SAFE_INTEGER;
            const possiblePositions = [
                {x: gridX - gridSize, y: gridY - gridSize},
                {x: gridX, y: gridY - gridSize},
                {x: gridX + gridSize, y: gridY - gridSize},
                {x: gridX - gridSize, y: gridY},
                {x: gridX + gridSize, y: gridY},
                {x: gridX - gridSize, y: gridY + gridSize},
                {x: gridX, y: gridY + gridSize},
                {x: gridX + gridSize, y: gridY + gridSize}
            ];

            possiblePositions.forEach((position) => {
                let available = true;
                Object.values(iconPositions).forEach((existingPosition) => {
                    if (Math.abs(existingPosition.x - position.x) < gridSize && Math.abs(existingPosition.y - position.y) < gridSize) {
                        available = false;
                    }
                });
                if (available) {
                    const distance = Math.sqrt(Math.pow(position.x - gridX, 2) + Math.pow(position.y - gridY, 2));
                    if (distance < minDistance) {
                        nearestPosition = position;
                        minDistance = distance;
                    }
                }
            });

            // Update the icon position to the nearest available position
            setIconPositions(prevPositions => ({
                ...prevPositions,
                [iconName]: {x: nearestPosition.x, y: nearestPosition.y}
            }));
        } else {
            // No collision, update the icon position
            setIconPositions(prevPositions => ({
                ...prevPositions,
                [iconName]: {x: gridX, y: gridY}
            }));
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div
            id="desktop"
            onClick={handleOutsideClick}
            onDrop={handleIconDrop}
            onDragOver={handleDragOver}
            onDoubleClick={handleOutsideClick}
            style={ {fontFamily: selectedFont}}
        >
            {/* Desktop icons */}
            <div className="desktop-icons">
                {Object.entries(iconPositions).map(([iconName, position]) => (
                    <div
                        key={iconName}
                        className={`desktop-icon ${selectedIcon === iconName ? 'selected' : ''}`}
                        onClick={(e) => handleIconClick(iconName, e)} // Select icon on click
                        draggable={true}
                        onDragStart={(e) => handleIconDragStart(e, iconName)}
                        onDoubleClick={() => handleIconDoubleClick(iconName)}
                        style={{left: position.x, top: position.y}}
                    >
                        {iconName === 'My Computer' && <img src={MyComputerIcon} alt={iconName} title={iconName}/>}
                        {iconName === 'Recycle Bin' && <img src={RecycleBinIcon} alt={iconName} title={iconName}/>}
                        {iconName === 'My Documents' && <img src={MyDocumentsIcon} alt={iconName} title={iconName}/>}
                        {iconName === 'Network' && <img src={NetworkIcon} alt={iconName} title={iconName}/>}
                        {iconName === 'Portfolio' && <img src={PortfolioIcon} alt={iconName} title={iconName}/>}
                        {iconName === 'Blog' && <img src={BlogIcon} alt={iconName} title={iconName}/>}
                        {iconName === 'Contact' && <img src={ContactIcon} alt={iconName} title={iconName}/>}
                        {iconName === 'Settings' &&
                            <img src={SettingsIcon} alt={iconName} title={iconName}/>} {/* Render the Settings icon */}
                        <span>{iconName}</span>
                    </div>
                ))}
            </div>
            {windows.map(window => (
                <Window key={window.id} id={window.id} onClose={closeWindow} pageOpened={window.content}
                        selectedFont={selectedFont}
                        setSelectedFont={setSelectedFont}
                        selectedTheme={selectedTheme}
                        setSelectedTheme={setSelectedTheme}/>
            ))}
        </div>
    );
}

export default Desktop;