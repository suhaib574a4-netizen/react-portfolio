import { skills } from '../data/portfolio'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

function SkillCard({ group }) {
  return (
    <article className="skill-card">
      <div className="skill-card__header">
        <span className="skill-card__icon">
          <Icon name={group.icon} />
        </span>
        {group.placeholder && (
          <span className="pill pill--placeholder">Placeholder</span>
        )}
      </div>

      <h3>{group.title}</h3>
      <p className="skill-card__note">
        {group.placeholder
          ? 'Replace these example skills with your own.'
          : 'Skills I work with.'}
      </p>

      <ul className="skill-list">
        {group.items.map((item) => (
          <li
            className={`skill-badge ${item.placeholder ? 'skill-badge--placeholder' : ''}`}
            key={item.name}
            title={
              item.placeholder
                ? 'Placeholder — replace in src/data/portfolio.js'
                : undefined
            }
          >
            {item.name}
            {item.placeholder && <span className="sr-only"> (placeholder)</span>}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      aria-labelledby="skills-title"
      data-reveal
    >
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="02 / Skills"
          title="A toolkit built one skill at a time."
          description="Grouped by area so it is easy to see where I am focused and where I am still growing."
        >
          <p className="placeholder-banner">
            <Icon name="spark" />
            <span>
              Placeholder content — edit <code>src/data/portfolio.js</code> to
              add real skills.
            </span>
          </p>
        </SectionHeading>

        <div className="skills-grid">
          {skills.map((group) => (
            <SkillCard group={group} key={group.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
