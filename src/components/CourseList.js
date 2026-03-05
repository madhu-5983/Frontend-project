import React, { useEffect, useState } from "react";
import "./CourseList.css";
import { getCourses } from "../services/courseServices";
import { Link } from "react-router-dom";

const topPrograms = [
    {
        category: "DEVOPS",
        categoryColor: "#06b6d4",
        icon: "🖥️",
        title: "Cloud DevOps",
        description: "Design and manage cloud-native DevOps pipelines, automation, and scalable environments.",
        tags: ["CI/CD", "Docker & K8s", "Automation"],
    },
    {
        category: "AI",
        categoryColor: "#8b5cf6",
        icon: "✨",
        title: "Artificial Intelligence (AI)",
        description: "Master Generative AI, Machine Learning, and intelligent system design.",
        tags: ["GenAI", "LLMs", "Prompt Eng"],
    },
    {
        category: "CLOUD",
        categoryColor: "#0ea5e9",
        icon: "☁️",
        title: "Cloud Computing",
        description: "Master AWS, Azure, & GCP with modern architecture and deployments.",
        tags: ["Multi-Cloud", "Architecture", "Security"],
    },
    {
        category: "DATA",
        categoryColor: "#f59e0b",
        icon: "📊",
        title: "Data Science",
        description: "Unlock the power of data with statistics, ML workflows, and insights.",
        tags: ["Python", "Statistics", "Visualization"],
    },
    {
        category: "DEVELOPMENT",
        categoryColor: "#10b981",
        icon: "</>",
        title: "Python",
        description: "Python programming for application development and automation.",
        tags: ["Scripting", "Backend", "Automation"],
    },
    {
        category: "AUTOMATION",
        categoryColor: "#ef4444",
        icon: ">_",
        title: "Shell Scripting - Bash",
        description: "Automate tasks and cloud operations using advanced Bash scripting.",
        tags: ["Linux", "Scripting", "DevOps"],
    },
];

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await getCourses();
                setCourses(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchCourses();
    }, []);

    return (
        <section id="featured-courses-section" className="section-padding">
            <div className="container">
                {/* Section Header */}
                <div className="section-header text-center">
                    <h2>Our Top Rated Programs</h2>
                </div>

                {/* Top Programs Grid */}
                <div className="courses-grid">
                    {topPrograms.map((program, index) => (
                        <div key={index} className="program-card card">
                            <div className="program-card-top">
                                <span
                                    className="program-badge"
                                    style={{ backgroundColor: `${program.categoryColor}18`, color: program.categoryColor }}
                                >
                                    {program.category}
                                </span>
                                <span className="program-icon-top">{program.icon}</span>
                            </div>
                            <h3 className="program-title">{program.title}</h3>
                            <p className="program-description">{program.description}</p>
                            <div className="program-tags">
                                {program.tags.map((tag, i) => (
                                    <span key={i} className="program-tag">✓ {tag}</span>
                                ))}
                            </div>
                            <a
                                href="https://wa.me/919035011859"
                                target="_blank"
                                rel="noreferrer"
                                className="enquire-btn"
                            >
                                Enquire Now ➜
                            </a>
                        </div>
                    ))}
                </div>

                {/* View All Courses button */}
                <div className="text-center" style={{ marginTop: "2rem" }}>
                    <Link to="/register" className="view-all-btn">View All Courses →</Link>
                </div>
            </div>
        </section>
    );
};

export default CourseList;
