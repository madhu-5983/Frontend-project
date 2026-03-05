import React from "react";
import "./Reviews.css";

const reviews = [
    {
        name: "Karthik A",
        initial: "K",
        color: "#6366f1",
        rating: 5,
        text: "Best destination for Cloud, Python, and AI. Well-structured curriculum with hands-on projects and supportive instructors.",
    },
    {
        name: "Venkatesh A",
        initial: "V",
        color: "#8b5cf6",
        rating: 5,
        text: "Excellent hands-on learning with real-world projects. Individual attention and structured content helped me build strong practical skills.",
    },
    {
        name: "Krishna Prasad",
        initial: "K",
        color: "#0ea5e9",
        rating: 5,
        text: "Well-structured training with a perfect balance of theory and practice. Industry-aligned curriculum and valuable hands-on exposure.",
    },
    {
        name: "Bunny Vissu",
        initial: "B",
        color: "#10b981",
        rating: 5,
        text: "Exceptional Cloud DevOps training with deep conceptual clarity. Strong mentorship, constant guidance, and a genuine learning-first culture.",
    },
    {
        name: "Lakshmi Arunagiri",
        initial: "L",
        color: "#f59e0b",
        rating: 5,
        text: "Great learning experience in Cloud and DevOps. Dedicated mentors, structured curriculum, and continuous hands-on support throughout.",
    },
];

const Stars = ({ count }) => (
    <div className="review-stars">
        {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < count ? "star filled" : "star"}>★</span>
        ))}
    </div>
);

const Reviews = () => {
    return (
        <section className="reviews-section section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Student Reviews</h2>
                </div>

                <div className="reviews-track">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card card">
                            <div className="review-top">
                                <div className="review-avatar" style={{ background: review.color }}>
                                    {review.initial}
                                </div>
                                <div>
                                    <p className="review-name">{review.name}</p>
                                    <Stars count={review.rating} />
                                </div>
                            </div>
                            <p className="review-text">{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
