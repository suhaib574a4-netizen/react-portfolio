import { site, socials } from '../data/portfolio'
import Icon from './Icon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__about">
          <a className="brand brand--footer" href="#home">
            <span className="brand__mark" aria-hidden="true">
              {site.name.charAt(0)}
            </span>
            <span className="brand__text">
              {site.name}
              <span className="brand__dot">.</span>
            </span>
          </a>
          <p>
            Thanks for visiting. I&apos;m always looking for new ideas to learn
            from and problems worth solving.
          </p>
        </div>

        <div className="footer-links">
          <p className="footer-links__label">Connect</p>
          <ul>
            <li>
              <a className="footer-link" href={`mailto:${site.email}`}>
                <Icon name="mail" />
                {site.email}
              </a>
            </li>
            {socials.map((social) =>
              social.url && !social.placeholder ? (
                <li key={social.id}>
                  <a
                    className="footer-link"
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Icon name="external" />
                    {social.label}
                  </a>
                </li>
              ) : (
                <li key={social.id}>
                  <span
                    className="footer-placeholder"
                    title={`Add your ${social.label} URL in src/data/portfolio.js`}
                  >
                    {social.label}
                    <small>add URL</small>
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {year} {site.name}</p>
        <p>Built with React · Designed to keep learning.</p>
        <a href="#home">
          Back to top
          <Icon name="arrowUp" />
        </a>
      </div>
    </footer>
  )
}
