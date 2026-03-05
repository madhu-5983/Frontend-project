import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact-section" className="section-padding bg-light">
            <div className="container text-center">
                <div className="contact-header mb-xl">
                    <h2>Get In Touch</h2>
                    <p>Ready to start your journey? Contact us today for admissions and inquiries.</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-card card">
                        <div className="contact-icon">📍</div>
                        <h3>Visit Us</h3>
                        <p>Perseverance Software Training Institute<br />Tirupati, Andhra Pradesh</p>
                    </div>

                    <div className="contact-card card">
                        <div className="contact-icon">📞</div>
                        <h3>Call Us</h3>
                        <p><strong>9035011859</strong><br />Mon - Sat, 9:00 AM - 6:00 PM</p>
                    </div>

                    <div className="contact-card card">
                        <div className="contact-icon">✉️</div>
                        <h3>Email Us</h3>
                        <p><a href="mailto:persevcareers@gmail.com">persevcareers@gmail.com</a><br />Online support 24/7</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
