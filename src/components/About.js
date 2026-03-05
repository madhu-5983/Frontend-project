import React from "react";
import "./About.css";

const About = () => {
    return (
        <section id="about-section" className="section-padding bg-light">
            <div className="container">
                {/* About Us Section */}
                <div className="about-container mb-xl">
                    <div className="about-content">
                        <h2>About Us</h2>
                        <div className="about-text">
                            <p>
                                Welcome to <strong>Shiva Sai Perseverance Software Training Institute</strong>. Our institute is committed to providing top-notch education in the field of software development and IT.
                            </p>
                            <p>
                                At <strong>Shiva Sai Perseverance</strong>, we believe in fostering a learning environment that encourages creativity, critical thinking, and hands-on experience. Our dedicated team of instructors brings industry expertise to the classroom, ensuring that our students are well-prepared for the challenges of the IT field.
                            </p>
                            <div className="about-highlight">
                                <p>
                                    Whether you're looking to start a career in DevOps, Cloud Computing, Programming, or other IT domains, <strong>Shiva Sai Perseverance</strong> is here to guide you on your journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Information Grid */}
                <div className="info-grid">
                    {/* Why Choose Us */}
                    <div className="info-card card">
                        <div className="info-icon">🎯</div>
                        <h3>Why Choose Us</h3>
                        <p>We combine theoretical knowledge with extensive practical training. Our curriculum is constantly updated to match current industry demands, ensuring you learn exactly what employers are looking for.</p>
                        <ul className="feature-list">
                            <li>Expert Instructors</li>
                            <li>Real-world Projects</li>
                            <li>Placement Assistance</li>
                        </ul>
                    </div>

                    {/* Course Benefits */}
                    <div className="info-card card">
                        <div className="info-icon">💼</div>
                        <h3>Course Benefits</h3>
                        <p>Our courses are designed to transform beginners into professionals. You'll gain hands-on experience, build a professional portfolio, and develop the confidence to crack tough technical interviews.</p>
                        <ul className="feature-list">
                            <li>Industry Certification</li>
                            <li>Lifetime Access to Materials</li>
                            <li>1-on-1 Mentorship</li>
                        </ul>
                    </div>

                    {/* Training Features */}
                    <div className="info-card card">
                        <div className="info-icon">⚡</div>
                        <h3>Training Features</h3>
                        <p>Experience a modern approach to learning with our state-of-the-art training methodology. We focus on interactive sessions rather than just traditional lectures.</p>
                        <ul className="feature-list">
                            <li>Flexible Learning Schedules</li>
                            <li>Interactive Live Sessions</li>
                            <li>Comprehensive Study Material</li>
                        </ul>
                    </div>

                    {/* Student Success */}
                    <div className="info-card card">
                        <div className="info-icon">🌟</div>
                        <h3>Student Success</h3>
                        <p>Our greatest achievement is the success of our students. Hundreds of our alumni are now working in top tech companies, startups, and multinational corporations worldwide.</p>
                        <ul className="feature-list">
                            <li>High Placement Rate</li>
                            <li>Alumni Network</li>
                            <li>Continuous Career Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
