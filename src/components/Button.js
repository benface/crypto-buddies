/** @jsx jsx */
import { jsx } from 'theme-ui'

const Button = ({ className, children }) => (
  <button type="button" className={className} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '280px', minHeight: '72px', px: 7, py: 5, border: 'none', bg: 'primary', boxShadow: 'elevatedPrimary', color: 'white', font: 'inherit', fontWeight: 'bold', fontSize: 3, letterSpacing: 'button', cursor: 'pointer', transition: 'background-color 200ms, transform 200ms, box-shadow 200ms', '&:hover:not(:active)': { transform: 'translateY(-3%)', boxShadow: 'elevatedPrimaryLg' }, '&:active': { bg: 'primaryLight', transition: 'none' } }}>
    {children}
  </button>
)

export default Button
