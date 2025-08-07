import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2018 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Full Stack Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Coimbatore, TN</h4>
            <p>
              Started my career by jumping straight into freelancing right after college – because who needs a cubicle anyway? Designed and developed responsive websites, web apps, admin dashboards, and custom CMS solutions using a stack of technologies like HTML, CSS, JavaScript, PHP, MySQL, Laravel, React, and more.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Rathinam College of Arts and Science</h4>
            <p>
              Graduated with a solid foundation in programming, databases, and software development. Participated in college tech fests and projects that hinted at the freelance path I’d eventually dominate.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;