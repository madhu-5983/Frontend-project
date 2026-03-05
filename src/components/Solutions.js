import React from "react";
import "./Solutions.css";

const solutions = [
    {
        icon: "☁️",
        title: "Cloud Computing",
        description: "Scalable cloud infrastructure on AWS, Azure & GCP — designed for performance, reliability, and cost efficiency.",
    },
    {
        icon: "⚙️",
        title: "DevOps",
        description: "End-to-end CI/CD pipelines, containerization with Docker & Kubernetes, and automated deployment workflows.",
    },
    {
        icon: "🤖",
        title: "AI Workflows",
        description: "Intelligent automation, machine learning integrations, and generative AI solutions for modern business processes.",
    },
    {
        icon: "🌐",
        title: "Website Development",
        description: "Responsive, high-performance websites and web apps built with the latest frontend and backend technologies.",
    },
    {
        icon: "📱",
        title: "Mobile App Development",
        description: "Cross-platform iOS and Android applications with seamless user experiences and robust backend support.",
    },
    {
        icon: "🛠️",
        title: "Custom Software Development",
        description: "Tailor-made enterprise software solutions that align with your unique business requirements and workflows.",
    },
    {
        icon: "📊",
        title: "Monitoring & Observability",
        description: "24/7 infrastructure monitoring, log management, and real-time alerting to ensure maximum system uptime.",
    },
];

const Solutions = () => {
    return (
        <section id="solutions-section" className="solutions-section section-padding">
            <div className="container">
                <div className="text-center" style={{ marginBottom: "var(--spacing-xl)" }}>
                    <span className="solutions-badge">SSP SS — Software Solutions</span>
                    <h2>Our Top Solutions</h2>
                    <p className="solutions-subtitle">
                        Transforming ideas into production-ready software across every modern technology domain.
                    </p>
                </div>

                <div className="solutions-grid">
                    {solutions.map((s, i) => (
                        <div key={i} className="solution-card card">
                            <div className="solution-icon">{s.icon}</div>
                            <h3>{s.title}</h3>
                            <p>{s.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: "var(--spacing-xl)" }}>
                    <a
                        href="https://wa.me/919035011859"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                        style={{ padding: "14px 32px" }}
                    >
                        Get in Touch →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
