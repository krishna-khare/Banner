// src/app/components/BannerImageComp.tsx
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
            // Hide edit and download buttons before capture
            const icons = element.querySelectorAll('.hide-during-download');
            icons.forEach((icon) => {
                if (icon instanceof HTMLElement) {
                    icon.style.display = 'none';
                }
            });

            // Capture the image
            const canvas = await html2canvas(element);
            const dataURL = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = `${title}.png`;
            link.click();

            // Restore edit and download buttons after capture
            icons.forEach((icon) => {
                if (icon instanceof HTMLElement) {
                    icon.style.display = '';
                }
            });
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
                    <img src="/images/download btn.png" alt="Download" className="download-icon" />
                </button>
            </div>
            <button onClick={onEdit} className="edit-button hide-during-download">
                <img src="/images/edit-pen-icon.png" alt="Edit" className="edit-icon" />
            </button>
        </div>
    );
};

export default BannerImageComp;
