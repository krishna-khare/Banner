"use client";

import React, { useState } from 'react';

interface EditBannerTemplateBsProps {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
    onSave: (newBanner: any) => void;
    onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ title, description, cta, image, background, onSave, onClose }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newCta, setNewCta] = useState(cta);
    const [newImage, setNewImage] = useState(image);
    const [newBackground, setNewBackground] = useState(background);

    const handleSubmit = () => {
        onSave({
            title: newTitle,
            description: newDescription,
            cta: newCta,
            image: newImage,
            background: newBackground,
        });
        onClose();
    };

    return (
        <div className="edit-banner-template-bs">
            <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
            <input value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
            <input value={newCta} onChange={(e) => setNewCta(e.target.value)} />
            <input value={newImage} onChange={(e) => setNewImage(e.target.value)} />
            <input value={newBackground} onChange={(e) => setNewBackground(e.target.value)} />
            <button onClick={handleSubmit}>Save</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
};

export default EditBannerTemplateBs;
