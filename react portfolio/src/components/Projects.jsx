import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

export default function Projects() {
  return (
    <section
      id="projects"
      className="section section--muted"
      aria-labelledby="projects-title"
      data-reveal
    >
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="03 / Projects"
          title="Work I'm building toward."
          description="Each card is a place to show what you built, the technologies you used, and what you learned along the way."
        >
          <p className="placeholder-banner">
            <Icon name="spark" />
            <span>
              Placeholder projects — replace them in{' '}
              <code>src/data/portfolio.js</code>.
            </span>
          </p>
        </SectionHeading>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
