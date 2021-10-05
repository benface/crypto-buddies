/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Global } from '@emotion/core'
import Navigation from './Navigation'
import HeartIcon from '../assets/Heart.svg'

const Layout = ({ className, children }) => (
  <div className={className} sx={{ padding: '0 5%', overflow: 'hidden' }}>
    <Global styles={(theme) => ({
      a: {
        textDecoration: 'none',
      },
      svg: {
        fill: 'currentColor',
      },
      '.focus-visible': {
        outline: `4px dotted ${theme.colors.primary}`,
        outlineOffset: '2px',
      },
      // Override a class from `gatsby-plugin-transition-link`
      '.tl-edges': {
        overflow: 'visible !important',
      },
    })} />
    <div sx={{ margin: '0 auto', maxWidth: '1288px' }}>
      <Navigation />
      <main>
        {children}
      </main>
      <footer sx={{ pb: [8, null, null, null, 9], color: 'gray', fontStyle: 'italic', fontSize: 0, textAlign: 'center' }}>
        Made with <HeartIcon title="love" sx={{ width: '12px', ml: '-4px', mb: '-2px' }} />
      </footer>
    </div>
  </div>
)

export default Layout
