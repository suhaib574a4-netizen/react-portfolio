import { site } from '../data/portfolio'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section
      id="about"
      className="section section--muted"
      aria-labelledby="about-title"
      data-reveal
    >
      <div className="container about__grid">
        <SectionHeading
          id="about-title"
          eyebrow="01 / About"
          title="Curious by default. Building with purpose."
          description="A little context about where I am and what I care about."
        />

        <div className="about__content">
          <div className="about__copy">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="focus-grid">
            {site.focusAreas.map((area) => (
              <li className="focus-item" key={area.id}>
                <span className="focus-item__icon">
                  <Icon name={area.icon} />
                </span>
                <strong>{area.title}</strong>
                <p>{area.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
