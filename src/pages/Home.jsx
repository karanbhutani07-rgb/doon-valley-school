import { useState, useEffect, useRef } from 'react';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = 5;
    const timerRef = useRef(null);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesCount);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);

    const startAuto = () => {
        stopAuto();
        timerRef.current = setInterval(nextSlide, 4000);
    };

    const stopAuto = () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };

    useEffect(() => {
        startAuto();
        return stopAuto;
    }, []);

    const handleManualNext = () => {
        nextSlide();
        startAuto();
    };

    const handleManualPrev = () => {
        prevSlide();
        startAuto();
    };

    const handleDotClick = (index) => {
        setCurrentSlide(index);
        startAuto();
    };

    return (
        <main>
            <section className="hero">
                <div className="hero-left">
                    <div
                        className="slideshow"
                        onMouseEnter={stopAuto}
                        onMouseLeave={startAuto}
                    >
                        {['slide1.jpg', 'slide2.jpg', 'slide3.JPG', 'slide4.jpg', 'slide5.JPG'].map((fileName, idx) => (
                            <img
                                key={fileName}
                                src={`/assets/images/${fileName}`}
                                alt={`Slide ${idx + 1}`}
                                className={`slide ${idx === currentSlide ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                    <div className="slide-controls">
                        <button className="slide-arrow slide-prev" aria-label="Previous slide" onClick={handleManualPrev}>❮</button>
                        <div className="slide-dots" aria-label="Slide dots">
                            {[0, 1, 2, 3, 4].map((idx) => (
                                <span
                                    key={idx}
                                    className={`dot ${idx === currentSlide ? 'active' : ''}`}
                                    onClick={() => handleDotClick(idx)}
                                ></span>
                            ))}
                        </div>
                        <button className="slide-arrow slide-next" aria-label="Next slide" onClick={handleManualNext}>❯</button>
                    </div>
                </div>

                <div className="hero-right">
                    <img src="/assets/images/logo.png" alt="Doon Valley School Logo" className="school-logo-large" />
                    <h1 className="hero-title">Doon Valley<br />Secondary School</h1>
                    <p className="hero-tagline">Empowering minds, shaping futures in the heart of Alwar.</p>
                </div>
            </section>

            <section className="welcome">
                <div className="welcome-container">
                    <h2>Welcome to Doon Valley</h2>
                    <p>
                        We are committed to providing an exceptional educational experience that fosters intellectual growth,
                        character development, and a lifelong love for learning. Our dedicated faculty and modern facilities
                        ensure every student reaches their full potential.
                    </p>
                </div>
            </section>

            <section className="values">
                <div className="values-grid">
                    <div className="value-card">
                        <h3>Holistic Development</h3>
                        <p>Nurturing the mind, body, and spirit through a balanced curriculum of academics, arts, and athletics.</p>
                    </div>
                    <div className="value-card">
                        <h3>Learning with Purpose</h3>
                        <p>Engaging students in meaningful educational experiences that connect classroom knowledge to real-world applications.</p>
                    </div>
                    <div className="value-card">
                        <h3>Respect, Values &amp; Responsibility</h3>
                        <p>Cultivating a culture of integrity, empathy, and civic duty to prepare students for global citizenship.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
