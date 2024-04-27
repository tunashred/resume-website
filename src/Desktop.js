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

const Desktop = () => {
    // State to manage the currently selected icon
    const [selectedIcon, setSelectedIcon] = useState(null);

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

    return (
        <div id="desktop" onClick={handleOutsideClick}>
            {/* Desktop icons */}
            <div className="desktop-icons">
                {/* My Computer */}
                <div className={`desktop-icon ${selectedIcon === 'My Computer' ? 'selected' : ''}`} onClick={(e) => handleIconClick('My Computer', e)}>
                    <img src={MyComputerIcon} alt="My Computer" title="My Computer" />
                    <span>My Computer</span>
                </div>
                {/* Recycle Bin */}
                <div className={`desktop-icon ${selectedIcon === 'Recycle Bin' ? 'selected' : ''}`} onClick={(e) => handleIconClick('Recycle Bin', e)}>
                    <img src={RecycleBinIcon} alt="Recycle Bin" title="Recycle Bin" />
                    <span>Recycle Bin</span>
                </div>
                {/* My Documents */}
                <div className={`desktop-icon ${selectedIcon === 'My Documents' ? 'selected' : ''}`} onClick={(e) => handleIconClick('My Documents', e)}>
                    <img src={MyDocumentsIcon} alt="My Documents" title="My Documents" />
                    <span>My Documents</span>
                </div>
                {/* Network Neighborhood */}
                <div className={`desktop-icon ${selectedIcon === 'Network' ? 'selected' : ''}`} onClick={(e) => handleIconClick('Network', e)}>
                    <img src={NetworkIcon} alt="Network" title="Network" />
                    <span>Network</span>
                </div>
                {/* Portofolio */}
                <div className={`desktop-icon ${selectedIcon === 'Portfolio' ? 'selected' : ''}`} onClick={(e) => handleIconClick('Portfolio', e)}>
                    <img src={PortfolioIcon} alt="Portofolio" title="Portofolio" />
                    <span>Portofolio</span>
                </div>
                {/* Blog */}
                <div className={`desktop-icon ${selectedIcon === 'Blog' ? 'selected' : ''}`} onClick={(e) => handleIconClick('Blog', e)}>
                    <img src={BlogIcon} alt="Blog" title="Blog" />
                    <span>Blog</span>
                </div>
                {/* Contact */}
                <div className={`desktop-icon ${selectedIcon === 'Contact' ? 'selected' : ''}`} onClick={(e) => handleIconClick('Contact', e)}>
                    <img src={ContactIcon} alt="Contact" title="Contact" />
                    <span>Contact</span>
                </div>
            </div>
        </div>
    );
}

export default Desktop;
