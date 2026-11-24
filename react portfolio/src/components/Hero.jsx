import { site } from '../data/portfolio'
import Button from './Button'
import Icon from './Icon'

const codeSample = `const suhaib = {
  focus: "full-stack",
  stage: "third-year CSE",
  goal: "useful web experiences"
};`

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Computer Science Engineering — Third Year
          </p>

          <h1 id="hero-title">
            Hi, I'm <span>{site.name}.</span>
          </h1>

          <p className="hero__role">{site.role}</p>
          <p className="hero__intro">{site.intro}</p>

          <div className="hero__actions">
            <Button href="#projects" icon="arrowRight">
              View My Projects
            </Button>
            <Button href={`mailto:${site.email}`} variant="secondary" icon="mail">
              Contact Me
            </Button>
          </div>

          <p className="hero__meta">
            <Icon name="spark" />
            Currently focused on full-stack development and learning by building.
          </p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__glow" />

          <div className="code-card">
            <div className="code-card__bar">
              <span className="code-card__dot" />
              <span className="code-card__dot" />
              <span className="code-card__dot" />
              <span className="code-card__file">about-suhaib.js</span>
            </div>

            <div className="code-card__body">
              <pre><code>{codeSample}</code></pre>

              <div className="code-card__footer">
                <span>Build</span>
                <span>+</span>
                <span>Learn</span>
                <span>+</span>
                <span>Repeat</span>
              </div>
            </div>
          </div>

          <div className="hero__chip hero__chip--top">
            <Icon name="code" />
            Curious mind
          </div>

          <div className="hero__chip hero__chip--bottom">
            <Icon name="layout" />
            User-friendly by design
          </div>
        </div>
      </div>
    </section>
  )
}
