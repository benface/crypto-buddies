/** @jsx jsx */
import { jsx } from 'theme-ui'
import { TransitionState } from 'gatsby-plugin-transition-link'
import { keyframes } from '@emotion/core'

export const transitionDuration = 500

export const entering = keyframes({
  from: {
    transform: 'translateX(calc(var(--cb-transition-translate-x) * -1))',
    opacity: 0,
  },
  to: {
    transform: 'translateX(0%)',
    opacity: 1,
  },
})

export const exiting = keyframes({
  from: {
    transform: 'translateX(0%)',
    opacity: 1,
  },
  to: {
    transform: 'translateX(calc(var(--cb-transition-translate-x)))',
    opacity: 0,
  },
})

const Transition = ({ children }) => (
  <TransitionState>
    {({ transitionStatus }) => {
      let animationName = 'none'
      if (transitionStatus === 'entering') {
        animationName = entering
      }
      if (transitionStatus === 'exiting') {
        animationName = exiting
      }
      return (
        <div sx={{ '--cb-transition-translate-x': [null, null, '19.2%', '12.8%', '8.5%'], animationName: animationName, animationDuration: `${transitionDuration}ms`, animationFillMode: 'both' }}>
          {children}
        </div>
      )
    }}
  </TransitionState>
)

export default Transition
