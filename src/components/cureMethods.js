import React from 'react';
import './CureMethods.css';

function CureMethods() {
    return (
        <div className="cure-methods">
            <h2>Cure Methods</h2>
            <h3>Medical Treatments:</h3>
            <ul>
                <li>Immobilization with casts or splints</li>
                <li>Surgery with internal or external fixation</li>
                <li>Physical therapy and rehabilitation</li>
            </ul>
            <h3>Home Remedies:</h3>
            <ul>
                <li>Rest and avoid activities that may worsen the fracture</li>
                <li>Apply ice to reduce swelling</li>
                <li>Maintain a balanced diet rich in calcium and vitamin D</li>
            </ul>
        </div>
    );
}

export default CureMethods;
