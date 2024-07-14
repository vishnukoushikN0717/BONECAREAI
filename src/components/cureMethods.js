import React from 'react';
import '../styles/CureMethods.css';

function CureMethods() {
    return (
        <div className="cure-methods">
            <h2>Cure Methods</h2>
            <h3>Medical Treatments:</h3>
            <ul>
                <li>
                    <div className="treatment-info">
                        <strong>Immobilization with casts or splints</strong> - Stabilizes the bone and allows it to heal properly. This is often the first step in fracture management to prevent further injury. Casts and splints provide the necessary support to keep the broken bone in place and are usually worn for several weeks, depending on the severity of the fracture. During this time, it's important to follow your doctor's instructions on care and activity restrictions to ensure proper healing.
                        <p>For more information, read about <a href="https://orthoinfo.aaos.org/en/recovery/care-of-casts-and-splints/#:~:text=Casts%20and%20splints%20hold%20the,provide%20less%20support%20than%20casts." target="_blank" rel="noopener noreferrer">Casts and Splints</a>.</p>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/WhatsApp Image 2024-07-13 at 1.29.12 PM.jpeg`} alt="Cast" className="treatment-image" />
                </li>
                <li>
                    <div className="treatment-info">
                        <strong>Surgery with internal or external fixation</strong> - Necessary for complex fractures where metal rods, screws, or plates are used to hold the bones in place. This can involve both open and minimally invasive procedures. Surgery is often required for fractures that cannot be properly aligned or stabilized with casts or splints alone. The type of surgery and fixation method depends on the fracture location, type, and patient’s overall health.
                        <p>Learn more about <a href="https://orthoinfo.aaos.org/en/treatment/internal-fixation-for-fractures/" target="_blank" rel="noopener noreferrer">Internal Fixation</a>.</p>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/WhatsApp Image 2024-07-13 at 1.29.12 PM.jpeg`} alt="Surgery" className="treatment-image" />
                </li>
                <li>
                    <div className="treatment-info">
                        <strong>Physical therapy and rehabilitation</strong> - Helps in regaining strength and mobility post-treatment. This can include exercises, manual therapy, and other modalities. Physical therapy is crucial for restoring function and movement in the affected area. It can help reduce pain, improve flexibility, and prevent further injury. A physical therapist will create a customized program based on the specific needs and progress of the patient.
                        <p>Discover the benefits of <a href="https://www.physio-pedia.com/Physiotherapy_Management_of_Fractures" target="_blank" rel="noopener noreferrer">Physical Therapy for Fractures</a>.</p>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/WhatsApp Image 2024-07-13 at 1.29.12 PM.jpeg`} alt="Therapy" className="treatment-image" />
                </li>
            </ul>
            <h3>Home Remedies:</h3>
            <ul>
                <li>
                    <div className="treatment-info">
                        <strong>Rest and avoid activities that may worsen the fracture</strong> - Essential for proper healing and to prevent further injury. This includes immobilizing the affected area and following your doctor's advice. Rest is crucial during the initial healing phase to allow the bone to repair itself. Activities that put stress on the fracture should be avoided to prevent complications.
                        <p>For tips on managing fractures at home, see <a href="https://orthoinfo.aaos.org/en/diseases--conditions/fractures-broken-bones/#:~:text=Types%20of%20Fractures&text=The%20severity%20of%20a%20fracture,gunshot%2C%20the%20bone%20may%20shatter." target="_blank" rel="noopener noreferrer"> Guide to Fractures</a>.</p>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/WhatsApp Image 2024-07-13 at 1.29.12 PM.jpeg`} alt="Rest" className="treatment-image" />
                </li>
                <li>
                    <div className="treatment-info">
                        <strong>Apply ice to reduce swelling</strong> - Ice packs can be applied for 20 minutes every few hours to manage pain and swelling. Be sure to wrap the ice pack in a towel to prevent frostbite. Ice is effective in the first 48 hours following the injury, as it helps to constrict blood vessels and reduce inflammation.
                        <p>Read about the <a href="https://www.webmd.com/first-aid/rice-method-injuries" target="_blank" rel="noopener noreferrer">Proper Way to Ice an Injury</a>.</p>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/WhatsApp Image 2024-07-13 at 1.29.12 PM.jpeg`} alt="Ice" className="treatment-image" />
                </li>
                <li>
                    <div className="treatment-info">
                        <strong>Maintain a balanced diet rich in calcium and vitamin D</strong> - Promotes bone health and aids in the healing process. Consider foods like dairy products, leafy greens, and fish. Calcium and vitamin D are essential for bone repair and strength. Supplements may be recommended if dietary intake is insufficient.
                        <p>Learn more about a <a href="https://www.bones.nih.gov/health-info/bone/bone-health/nutrition/calcium-and-vitamin-d-important-every-age" target="_blank" rel="noopener noreferrer">Diet for Bone Health</a>.</p>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/WhatsApp Image 2024-07-13 at 1.29.12 PM.jpeg`} alt="Diet" className="treatment-image" />
                </li>
            </ul>
        </div>
    );
}

export default CureMethods;
