import React from 'react';
import '../styles/AboutBoneFracture.css';

function AboutBoneFracture() {
    const fractureLinks = {
        'Simple Fracture': 'https://en.wikipedia.org/wiki/Fracture',
        'Compound Fracture': 'https://en.wikipedia.org/wiki/Fracture',
        'Comminuted Fracture': 'https://en.wikipedia.org/wiki/Fracture',
        'Greenstick Fracture': 'https://en.wikipedia.org/wiki/Fracture',
        'Transverse Fracture': 'https://en.wikipedia.org/wiki/Fracture',
        'Oblique Fracture': 'https://en.wikipedia.org/wiki/Fracture',
        'Spiral Fracture': 'https://en.wikipedia.org/wiki/Fracture'
    };

    return (
        <div className="about-bone-fracture">
            <h2>About Bone Fractures</h2>
            <p>
                Bone fractures are a common injury that can result from trauma, overuse, or diseases that weaken the bones.
                They can vary in severity and type, affecting treatment and recovery time.
            </p>
            <h3 className='heado'>Types of Bone Fractures:</h3>
            <ul>
                {Object.keys(fractureLinks).map((type, index) => (
                    <li key={type} className="fracture-item" style={{ animationDelay: `${index * 0.1}s` }}>
                        <a href={fractureLinks[type]} target="_blank" rel="noopener noreferrer">
                            <strong>{type}:</strong> {type === 'Simple Fracture' ? 'A single break in the bone that doesn\'t penetrate the skin.' :
                                type === 'Compound Fracture' ? 'A break where the bone pierces the skin, increasing the risk of infection.' :
                                    type === 'Comminuted Fracture' ? 'The bone is shattered into three or more pieces, usually due to a high-impact trauma.' :
                                        type === 'Greenstick Fracture' ? 'An incomplete fracture where the bone bends and cracks, common in children.' :
                                            type === 'Transverse Fracture' ? 'A horizontal break across the bone, often caused by a direct blow.' :
                                                type === 'Oblique Fracture' ? 'An angled break across the bone, typically from a sharp angled blow.' :
                                                    'A fracture caused by a twisting force, resulting in a helical break around the bone.'
                            }
                        </a>
                    </li>
                ))}
            </ul>
            <h3 className='heado'>Prevention and Treatment</h3>
            <p>
                To prevent fractures, it's important to maintain a healthy diet rich in calcium and vitamin D, engage in regular weight-bearing exercises, and avoid smoking.
                Treatment options vary depending on the type and severity of the fracture and can range from immobilization with casts or splints to surgical interventions.
            </p>
        </div>
    );
}

export default AboutBoneFracture;
