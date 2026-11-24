export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <div className="section-heading">
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description && (
        <p className="section-heading__description">{description}</p>
      )}
      {children}
    </div>
  )
}
