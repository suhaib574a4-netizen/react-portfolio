import Icon from './Icon'

/**
 * Renders an anchor when `href` is provided, otherwise a button element.
 */
export default function Button({
  href,
  variant = 'primary',
  icon,
  children,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `button button--${variant} ${className}`.trim()
  const content = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} />}
    </>
  )

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...props}>
      {content}
    </button>
  )
}
