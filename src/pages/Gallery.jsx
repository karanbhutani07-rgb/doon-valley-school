import { useState } from 'react';

export default function Gallery() {
    const images = [
        'g01.webp', 'g02.webp', 'g03.webp', 'g04.webp', 'g05.webp', 'g06.webp',
        'g07.webp', 'g08.webp', 'g09.webp', 'g10.webp', 'g11.webp', 'g12.webp'
    ];

    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const nextImage = (e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev + 1) % images.length);
    };
    const prevImage = (e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <main>
            <div className="page-header">
                <h1>Gallery</h1>
            </div>

            <section className="gallery-grid">
                {images.map((img, idx) => (
                    <div key={idx} className="gallery-item" onClick={() => openLightbox(idx)}>
                        <img src={`/assets/images/${img}`} alt={`School activity ${idx + 1}`} loading="lazy" />
                    </div>
                ))}
            </section>

            <div className={`lightbox ${lightboxIndex !== null ? 'active' : ''}`} onClick={closeLightbox}>
                <button className="lightbox-close" aria-label="Close" onClick={closeLightbox}>×</button>
                <button className="lightbox-nav lightbox-prev" aria-label="Previous" onClick={prevImage}>❮</button>
                <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                    {lightboxIndex !== null && (
                        <img src={`/assets/images/${images[lightboxIndex]}`} alt="Enlarged gallery image" />
                    )}
                </div>
                <button className="lightbox-nav lightbox-next" aria-label="Next" onClick={nextImage}>❯</button>
            </div>
        </main>
    );
}
