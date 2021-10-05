/** @jsx jsx */
import { jsx } from 'theme-ui'
import TransitionLink from 'gatsby-plugin-transition-link'
import { transitionDuration } from './Transition'

const Link = ({ to, className, children }) => (
  <TransitionLink to={to} className={className} entry={{ length: transitionDuration / 1000 }} exit={{ length: transitionDuration / 1000, trigger: () => { window.scroll({top: 0, left: 0, behavior: 'smooth'}) }}} preventScrollJump>
    {children}
  </TransitionLink>
)

export default Link
