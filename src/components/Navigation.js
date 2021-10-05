/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from './Link'
import Logo from '../assets/logo.svg'
import UserIcon from '../assets/user.svg'

const Navigation = ({ className }) => (
  <header className={className} sx={{ pt: '28px', pb: '20px' }}>
    <div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" sx={{ color: 'black', '&:hover': { color: 'primary' } }}>
        <Logo title="Crypto Buddies Logo" sx={{ display: 'block', width: '32px' }} />
      </Link>
      <Link to="/" sx={{ color: 'black', '&:hover': { color: 'primary' } }}>
        <UserIcon title="My Account" sx={{ display: 'block', width: '24px' }} />
      </Link>
    </div>
  </header>
)

export default Navigation
