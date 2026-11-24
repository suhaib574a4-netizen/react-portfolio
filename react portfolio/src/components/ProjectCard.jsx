import Icon from './Icon'

export default function ProjectCard({ project, index }) {
  const hasLinks = Boolean(project.githubUrl || project.liveUrl)

  return (
    <article
      className={`project-card ${project.placeholder ? 'project-card--placeholder' : ''}`}
    >
      <div className="project-card__top">
        <span className="project-card__index">
          {String(index + 1).padStart(2, '0')}
        </span>
        {project.placeholder && (
          <span className="pill pill--placeholder">Placeholder</span>
        )}
      </div>

      <span className="project-card__icon">
        <Icon name="code" />
      </span>

      <h3>{project.name}</h3>
      <p className="project-card__description">{project.description}</p>

      <ul className="tag-list">
        {project.tags.map((tag) => (
          <li
            className={`tag ${project.placeholder ? 'tag--placeholder' : ''}`}
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="project-card__footer">
        {hasLinks ? (
          <div className="project-card__links">
            {project.githubUrl && (
              <a
                className="project-link"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name="github" />
                GitHub
                <span className="sr-only"> repository for {project.name}</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                className="project-link"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name="external" />
                Live demo
                <span className="sr-only"> for {project.name}</span>
              </a>
            )}
          </div>
        ) : (
          <span className="project-card__hint">
            Add links in <code>src/data/portfolio.js</code>
          </span>
        )}
      </div>
    </article>
  )
}
