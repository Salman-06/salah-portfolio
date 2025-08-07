import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "MYSQL"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <div className="skill-icons">
                        <FontAwesomeIcon icon={faHtml5} size="2x" />
                        <FontAwesomeIcon icon={faCss3} size="2x" />
                        <FontAwesomeIcon icon={faJs} size="2x" />
                        <FontAwesomeIcon icon={faReact} size="2x" />
                        <FontAwesomeIcon icon={faDatabase} size="2x" />
                    </div>
                    <h3>Full Stack Web Development</h3>
                    <p>With over 7+ years of hands-on experience as a Full Stack Web Developer, I bring more to the table than just buzzwords and boilerplate code. I specialize in building seamless, responsive, and performance-driven web applications — from scratch to launch and beyond.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;