import { useState } from 'react';

export default function Gallery() {
    const images = [
        'g01.jpg', 'g02.jpg', 'g03.jpg', 'g04.JPG', 'g05.JPG', 'g06.JPG',
        'g07.jpg', 'g08.jpg', 'g09.jpg', 'g10.jpg', 'g11.jpg', 'g12.jpg'
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
                        <img src={`/assets/images/${img}`} alt={`School activity ${idx + 1}`} />
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
