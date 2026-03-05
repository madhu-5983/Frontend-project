import React from "react";
import Hero from "../components/Hero";
import Divisions from "../components/Divisions";
import Solutions from "../components/Solutions";
import CourseList from "../components/CourseList";
import Reviews from "../components/Reviews";
import About from "../components/About";
import AddCourseForm from "../components/AddCourseForm";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Divisions />
            <Solutions />
            <CourseList />
            <Reviews />
            <About />
            <AddCourseForm />
            <Contact />
        </div>
    );
};

export default Home;
