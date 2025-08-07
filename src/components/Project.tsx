import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://houseofmm.in/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://houseofmm.in/" target="_blank" rel="noreferrer"><h2>House Of MM</h2></a>
                <p>A sleek eCommerce platform built to make shopping for trendy dresses effortless. From product listings to secure checkout, this project blends style with functionality, giving users a smooth and modern shopping experience.</p>
            </div>
            <div className="project">
                <a href="https://www.gowthamhospital.com/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.gowthamhospital.com/" target="_blank" rel="noreferrer"><h2>Gowtham Multi-Speciality Hospital</h2></a>
                <p>A fully responsive and informative website created for a trusted medical institution. It includes sections like About Hospital, Doctor Profiles, and Appointment Booking – giving patients everything they need to connect with quality healthcare, right from their screens.</p>
            </div>
            <div className="project">
                <a href="https://ashmii.com/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ashmii.com/" target="_blank" rel="noreferrer"><h2>Ashmii</h2></a>
                <p>Designed to reflect luxury living and architectural finesse, this site showcases Ashmii’s elegant interior and exterior projects. Visual storytelling meets web precision – perfect for turning visitors into leads.</p>
            </div>
            <div className="project">
                <a href="https://erode-association-architecture.vercel.app/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://erode-association-architecture.vercel.app/" target="_blank" rel="noreferrer"><h2>Erode Association Architecture</h2></a>
                <p>An official showcase platform for the Erode architecture community. It highlights member activities, project showcases, and association news – all wrapped in a professional design that represents the creative minds of the city.</p>
            </div>
            <div className="project">
                <a href="https://precicraft-cnc-works.vercel.app/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://precicraft-cnc-works.vercel.app/" target="_blank" rel="noreferrer"><h2>Precicraft CNC Works</h2></a>
                <p>This project delivers a clean and professional interface for CNC machining services. With galleries, service listings, and company insights, it's crafted to impress both clients and collaborators.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>Met Studio</h2></a>
                <p>A dual-purpose web platform featuring a stylish product catalog on the front end and a powerful admin panel behind the scenes. It simplifies product management while maintaining a polished look for the public view.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2> GKR Hi-Tech Heavy Engineering</h2></a>
                <p>This site showcases the precision and scale of heavy engineering projects. Built with clarity and detail in mind, it allows potential clients to view services, past works, and technical capabilities with ease.</p>
            </div>            
        </div>
    </div>
    );
}

export default Project;