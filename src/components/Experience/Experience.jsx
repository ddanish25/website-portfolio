import { useContext } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experience, education } from '../../portfolio';
import { ThemeContext } from '../../contexts/theme';

const Experience = () => {
  const [{ themeName }] = useContext(ThemeContext);

  // Use CSS variables from the theme
  const primaryColor = themeName === 'dark' ? 'var(--clr-primary)' : 'var(--clr-primary)';

  return (
    <section className="section experience" id="experience">
      <h2 className="section__title">Experience</h2>
      <VerticalTimeline lineColor={'!white'}>
        {experience.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={exp.date}
            iconStyle={{ background: primaryColor, color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {exp.company} - {exp.location}
            </h4>
            <p>{exp.description}</p>
          </VerticalTimelineElement>
        ))}

        {education.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            date={edu.date}
            iconStyle={{ background: 'var(--clr-primary)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">{edu.degree}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {edu.school} - {edu.location}
            </h4>
            <p>{edu.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
