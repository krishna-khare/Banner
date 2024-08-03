"use client";

import React, { useState } from 'react';

interface EditBannerTemplateBsProps {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
    onSave: (newBanner: any) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ title, description, cta, image, background, onSave }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newCta, setNewCta] = useState(cta);
    const [newImage, setNewImage] = useState(image);
    const [newBackground, setNewBackground] = useState(background);

    const handleSave = () => {
        onSave({
            title: newTitle,
            description: newDescription,
            cta: newCta,
            image: newImage,
            background: newBackground,
        });
    };

    return (
        <div className="edit-banner-bottom-sheet">
            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Title" />
            <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Description" />
            <input type="text" value={newCta} onChange={(e) => setNewCta(e.target.value)} placeholder="CTA" />
            <input type="text" value={newImage} onChange={(e) => setNewImage(e.target.value)} placeholder="Image URL" />
            <input type="color" value={newBackground} onChange={(e) => setNewBackground(e.target.value)} placeholder="Background Color" />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default EditBannerTemplateBs;