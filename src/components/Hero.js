import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const carouselSlides = [
    {
        image: "/images/carousel_software_dev.png",
        label: "Software Development",
    },
    {
        image: "/images/carousel_cloud_computing.png",
        label: "Cloud Computing",
    },
    {
        image: "/images/carousel_ai_tech.png",
        label: "Artificial Intelligence",
    },
    {
        image: "/images/carousel_devops.png",
        label: "DevOps & CI/CD",
    },
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % carouselSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const goTo = (index) => setCurrent(index);
    const prev = () => setCurrent((c) => (c - 1 + carouselSlides.length) % carouselSlides.length);
    const next = () => setCurrent((c) => (c + 1) % carouselSlides.length);

    return (
        <div className="hero-section">
            {/* Background decoration */}
            <div className="hero-bg-blob"></div>

            <div className="hero-content container">
                <h1 className="hero-title">
                    Shape Your Future in <br />
                    <span>Technology &amp; Software</span>
                </h1>
                <p className="hero-subtitle">
                    Join Perseverance Software Training Institute on the journey to becoming a highly skilled IT Professional. Learn from industry experts and secure your dream career.
                </p>
                <div className="hero-actions">
                    <Link to="/register" className="btn-primary hero-btn">Register Now</Link>
                    <a href="#featured-courses-section" className="btn-secondary hero-btn">Explore Courses</a>
                </div>

                {/* Image Carousel */}
                <div className="hero-carousel">
                    <button className="carousel-arrow carousel-prev" onClick={prev} aria-label="Previous slide">&#8249;</button>

                    <div className="carousel-track">
                        {carouselSlides.map((slide, index) => (
                            <div
                                key={index}
                                className={`carousel-slide ${index === current ? "active" : index === (current - 1 + carouselSlides.length) % carouselSlides.length ? "prev" : ""}`}
                            >
                                <img src={slide.image} alt={slide.label} />
                                <div className="carousel-label">{slide.label}</div>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-arrow carousel-next" onClick={next} aria-label="Next slide">&#8250;</button>

                    <div className="carousel-dots">
                        {carouselSlides.map((_, index) => (
                            <button
                                key={index}
                                className={`carousel-dot ${index === current ? "active" : ""}`}
                                onClick={() => goTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
