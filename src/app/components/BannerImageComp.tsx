"use client";

import React from 'react';
import html2canvas from 'html2canvas';

interface BannerImageCompProps {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
    onEdit: () => void;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ title, description, cta, image, background, onEdit }) => {
    const handleDownload = async () => {
        const element = document.getElementById(`banner-${title}`);
        if (element) {
            const icons = element.querySelectorAll('.hide-during-download');
            icons.forEach((icon) => (icon.style.display = 'none'));
            const canvas = await html2canvas(element);
            const dataURL = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = `${title}.png`;
            link.click();

            icons.forEach((icon) => (icon.style.display = ''));
        }
    };

    return (
        <div id={`banner-${title}`} style={{ background }} className="banner">
            <img src={image} alt={title} className="banner-image" />
            <div className="banner-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <button className="cta-button" onClick={() => alert(cta)}>{cta}</button>
                <button className="download-button hide-during-download" onClick={handleDownload}>
                    <img src="./images/download btn.png" alt="Download" className="download-icon" />
                </button>
            </div>
            <button onClick={onEdit} className="edit-button hide-during-download">
                <img src="./images/edit-pen-icon.png" alt="Edit" className="edit-icon" />
            </button>
        </div>
    );
};

export default BannerImageComp;
