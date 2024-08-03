"use client";

import { useState } from 'react';
import BannerImageComp from './components/BannerImageComp';
import EditBannerTemplateBs from './components/EditBannerTemplateBs';
import bannersData from './data/banners.json';

const Home = () => {
    const [banners, setBanners] = useState(bannersData);
    const [editingBanner, setEditingBanner] = useState<number | null>(null);

    const handleEdit = (index: number) => {
        setEditingBanner(index);
    };

    const handleSave = (newBanner: any) => {
        const updatedBanners = banners.map((banner, index) =>
            index === editingBanner ? { ...banner, ...newBanner } : banner
        );
        setBanners(updatedBanners);
        setEditingBanner(null);
    };

    const handleClose = () => {
        setEditingBanner(null);
    };

    return (
        <div>
            {banners.map((banner, index) => (
                <BannerImageComp
                    key={index}
                    title={banner.title}
                    description={banner.description}
                    cta={banner.cta}
                    image={banner.image}
                    background={banner.background}
                    onEdit={() => handleEdit(index)}
                />
            ))}
            {editingBanner !== null && (
                <EditBannerTemplateBs
                    title={banners[editingBanner].title}
                    description={banners[editingBanner].description}
                    cta={banners[editingBanner].cta}
                    image={banners[editingBanner].image}
                    background={banners[editingBanner].background}
                    onSave={handleSave}
                    onClose={handleClose}
                />
            )}
        </div>
    );
};

export default Home;
