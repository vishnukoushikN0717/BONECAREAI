import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    useEffect(() => {
        const handleBubbleEffect = (e) => {
            const bubbleContainer = document.createElement('span');
            bubbleContainer.classList.add('bubble-container');
            e.currentTarget.appendChild(bubbleContainer);

            for (let i = 0; i < 5; i++) {
                const bubble = document.createElement('span');
                bubble.classList.add('bubble');
                const size = Math.random() * 10 + 5;
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.left = `${e.clientX - e.currentTarget.getBoundingClientRect().left}px`;
                bubble.style.top = `${e.clientY - e.currentTarget.getBoundingClientRect().top}px`;
                bubbleContainer.appendChild(bubble);
            }

            setTimeout(() => {
                bubbleContainer.remove();
            }, 600);
        };

        const links = document.querySelectorAll('.navbar a');
        links.forEach(link => {
            link.addEventListener('click', handleBubbleEffect);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleBubbleEffect);
            });
        };
    }, []);

    return (
        <nav className="navbar">
            <h1 className="navhead">Bone Fracture Cure</h1>
            <ul className="listel">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-bone-fracture">About Bone Fracture</Link></li>
                <li><Link to="/cure-methods">Cure Methods</Link></li>
                <li><Link to="/ai-model">AI Model</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
