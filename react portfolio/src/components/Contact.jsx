import { useState } from 'react'
import { site } from '../data/portfolio'
import Button from './Button'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

const initialValues = { name: '', email: '', message: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).'
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Please write a message of at least 10 characters.'
  }

  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [draft, setDraft] = useState(null)

  const clearError = (field) => {
    setErrors((current) => {
      const updated = { ...current }
      delete updated[field]
      return updated
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    clearError(name)
    setDraft(null)
  }

  const handleBlur = (event) => {
    const { name } = event.target
    const fieldErrors = validate(values)

    setErrors((current) => {
      const updated = { ...current }
      if (fieldErrors[name]) updated[name] = fieldErrors[name]
      else delete updated[name]
      return updated
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const fieldErrors = validate(values)
    setErrors(fieldErrors)
    setDraft(null)

    const firstInvalidField = ['name', 'email', 'message'].find(
      (field) => fieldErrors[field],
    )

    if (firstInvalidField) {
      document.getElementById(`contact-${firstInvalidField}`)?.focus()
      return
    }

    const name = values.name.trim()
    const email = values.email.trim()
    const message = values.message.trim()
    const subject = `Portfolio message from ${name}`
    const body = `${message}\n\nFrom: ${name}\nReply to: ${email}`

    setDraft({
      subject,
      mailto: `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    })
  }

  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-title"
      data-reveal
    >
      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow="04 / Contact"
          title="Let's build something useful."
          description="Have a question, an idea, or just want to connect? I'd be glad to hear from you."
        />

        <div className="contact__grid">
          <div className="contact__details">
            <p>
              The fastest way to reach me is by email. You can also use the form
              to prepare a message in your email app.
            </p>

            <div className="email-card">
              <p className="email-card__label">Email me directly</p>
              <a href={`mailto:${site.email}`}>
                <Icon name="mail" />
                <span>{site.email}</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <p className="form-note">
              <Icon name="mail" />
              <span>
                Frontend-only form: no backend is connected, so nothing is sent
                from this page. A valid submission opens a ready-to-send email
                draft instead.
              </span>
            </p>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                />
                {errors.name && (
                  <p className="field-error" id="contact-name-error" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                />
                {errors.email && (
                  <p className="field-error" id="contact-email-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="form-field form-field--full">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me what's on your mind..."
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'contact-message-error' : undefined
                  }
                />
                {errors.message && (
                  <p
                    className="field-error"
                    id="contact-message-error"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <div className="form-actions">
              <Button type="submit" icon="arrowRight">
                Send message
              </Button>
              <p className="form-actions__hint">
                Prefer to skip the form? Email me directly instead.
              </p>
            </div>

            {draft && (
              <div className="form-status" role="status">
                <span className="form-status__icon">
                  <Icon name="mail" />
                </span>
                <div>
                  <strong>Email draft ready — nothing was sent.</strong>
                  <p>
                    Your message has been prepared for “{draft.subject}”. Open
                    the draft in your email app to send it.
                  </p>
                  <a href={draft.mailto}>
                    Open email draft
                    <Icon name="external" />
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
