// Import unique ID generator for React keys
import uniqid from 'uniqid';
// Import projects data from portfolio configuration
import { projects } from '../../portfolio'
// Import the ProjectContainer component that renders individual project cards
import ProjectContainer from '../ProjectContainer/ProjectContainer'
// Import associated styles
import './Projects.css'

/**
 * Projects component that renders a grid of project cards
 * Returns null if no projects are defined in the portfolio
 */
const Projects = () => {
  // Early return if projects array is empty
  if (!projects.length) return null

  return (
    // Main projects section with id for navigation
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      {/* Grid container for project cards */}
      <div className='projects__grid'>
        {/* Map through projects array and render a ProjectContainer for each */}
        {projects.map((project) => (
          <ProjectContainer 
            key={uniqid()} // Unique key for React list rendering optimization
            project={project} 
          />
        ))}
      </div>
    </section>
  )
}

export default Projects