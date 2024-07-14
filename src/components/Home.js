import React from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home">
            <div className="header">
                <h1>Bone Fracture Cure</h1>
                <p>Your ultimate resource for bone fracture remedies and AI-powered solutions.</p>
            </div>
            <div className="content">
                <section className="intro">
                    <img src={`${process.env.PUBLIC_URL}/WhatsApp Image 2024-07-13 at 1.29.12 PM.jpeg`} alt="Bone Fracture" className="intro-image" />
                    <div className="intro-text">
                        <h2>About Us</h2>
                        <p>We provide comprehensive information on bone fractures, treatments, and the latest AI advancements in medical technology.</p>
                    </div>
                </section>
                <section className="features">
                    <h2>Our Features</h2>
                    <div className="feature-list">
                        <div className="feature-item">
                            <img src={`${process.env.PUBLIC_URL}/WhatsApp Image 2024-07-13 at 1.04.32 PM.jpeg`} alt="Bone Fracture" className="intro-image" />
                            <h3>Expert Advice</h3>
                            <p>Get insights from medical professionals.</p>
                        </div>
                        <div className="feature-item">
                            <img src={`${process.env.PUBLIC_URL}/WhatsApp Image 2024-07-13 at 1.11.29 PM.jpeg`} alt="Bone Fracture" className="intro-image" />
                            <h3>AI Solutions</h3>
                            <p>Utilize AI to aid in diagnosis and treatment.</p>
                        </div>
                        <div className="feature-item">
                            <img src={`${process.env.PUBLIC_URL}/WhatsApp Image 2024-07-13 at 3.11.11 PM.jpeg`} alt="Bone Fracture" className="intro-image" />
                            <h3>Comprehensive Resources</h3>
                            <p>Access a wide range of articles and research.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
