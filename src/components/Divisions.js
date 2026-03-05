import React from "react";
import "./Divisions.css";

const Divisions = () => {
    return (
        <section className="divisions-section section-padding">
            <div className="container">
                {/* Brand Header */}
                <div className="divisions-header text-center">
                    <span className="parent-brand-label">Parent Organization</span>
                    <h2>
                        SSP Global <span className="brand-full-form">– Shiva Sai Perseverance</span>
                    </h2>
                    <p>One vision, two powerful divisions driving innovation in education and technology.</p>
                </div>

                {/* Division Cards */}
                <div className="divisions-grid">
                    {/* SSP STI */}
                    <div className="division-card division-sti">
                        <div className="division-icon-wrap">
                            <span className="division-icon">🎓</span>
                        </div>
                        <div className="division-tag">SSP STI</div>
                        <h3>Software Training Institute</h3>
                        <p>
                            Training students in modern technologies like Cloud, DevOps, Software Development, and AI — shaping the next generation of IT professionals.
                        </p>
                        <ul className="division-features">
                            <li>Cloud &amp; DevOps</li>
                            <li>Artificial Intelligence</li>
                            <li>Full Stack Development</li>
                            <li>Placement Assistance</li>
                        </ul>
                        <a
                            href="#featured-courses-section"
                            className="division-btn division-btn-primary"
                        >
                            Explore Training →
                        </a>
                    </div>

                    {/* SSP SS */}
                    <div className="division-card division-ss">
                        <div className="division-icon-wrap">
                            <span className="division-icon">💻</span>
                        </div>
                        <div className="division-tag">SSP SS</div>
                        <h3>Software Solutions</h3>
                        <p>
                            Building scalable web applications, cloud platforms, and enterprise software solutions — turning ideas into powerful, production-ready products.
                        </p>
                        <ul className="division-features">
                            <li>Web Application Development</li>
                            <li>Cloud Platforms &amp; DevOps</li>
                            <li>Enterprise Software</li>
                            <li>AI &amp; Data Solutions</li>
                        </ul>
                        <a
                            href="#solutions-section"
                            className="division-btn division-btn-outline"
                        >
                            Our Solutions →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Divisions;
