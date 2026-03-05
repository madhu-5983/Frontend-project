import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                {/* Column 1 — Brand */}
                <div className="footer-brand">
                    <h3>SSP Institute</h3>
                    <p>
                        Gain industry-relevant skills through a wide range of programs designed for real-world careers. Explore Cloud, DevOps, AI, Full Stack, and much more—built to make you confident, capable, and job-ready.
                    </p>
                </div>

                {/* Column 2 — Programs */}
                <div className="footer-col">
                    <h4>Programs</h4>
                    <ul>
                        <li><a href="/#featured-courses-section">Cloud &amp; DevOps</a></li>
                        <li><a href="/#featured-courses-section">Cloud Computing</a></li>
                        <li><a href="/#featured-courses-section">Full Stack Development</a></li>
                        <li><a href="/#featured-courses-section">Artificial Intelligence (AI)</a></li>
                        <li><a href="/#featured-courses-section">And Much More</a></li>
                    </ul>
                </div>

                {/* Column 3 — Company */}
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/#featured-courses-section">Trainings</a></li>
                        <li><a href="/#featured-courses-section">Internships</a></li>
                        <li><a href="/#featured-courses-section">Placements</a></li>
                        <li><a href="/#featured-courses-section">Crash Courses</a></li>
                    </ul>
                </div>

                {/* Column 4 — Get in Touch */}
                <div className="footer-col footer-contact-col">
                    <h4>Get in Touch</h4>
                    <ul className="contact-list">
                        <li>
                            <span className="contact-icon">📍</span>
                            <span>Annamaiah Circle, Beside DMART, Caratlane Building, AIR Bypass Road, Tirupati, Andhra Pradesh</span>
                        </li>
                        <li>
                            <span className="contact-icon">📞</span>
                            <a href="tel:+919035011859">+91-9035011859</a>
                        </li>
                        <li>
                            <span className="contact-icon">✉️</span>
                            <a href="mailto:persevcareers@gmail.com">persevcareers@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom text-center">
                <p>&copy; {new Date().getFullYear()} SSP Global. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
