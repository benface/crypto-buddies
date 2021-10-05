/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import unique from 'unique-string'
import { keyframes } from '@emotion/core'
import Link from './Link'

const hoverTransitionDuration = 300
const buddyLinkClass = `buddy-link-${unique()}`
const buddyImageClass = `buddy-image-${unique()}`
const buddyHeadingClass = `buddy-heading-${unique()}`

const buddyGridStyles = {
  [`.${buddyLinkClass}`]: {
    transition: `opacity ${hoverTransitionDuration}ms`,
  },

  [`.${buddyImageClass}`]: {
    pointerEvents: `none`,
    transition: `transform ${hoverTransitionDuration}ms, box-shadow ${hoverTransitionDuration}ms`,
  },

  [`.${buddyHeadingClass}`]: {
    transition: `color ${hoverTransitionDuration}ms`,
  },

  // Should technically be `:focus-visible-within`, but that doesn't exist (yet); no big deal
  [`&:hover .${buddyLinkClass}, &:focus-within .${buddyLinkClass}`]: {
    opacity: 0.5,

    '&:hover, &.focus-visible': {
      opacity: 1,

      [`.${buddyImageClass}`]: {
        transform: 'scale(1.075)',
        boxShadow: 'elevated',
      },

      [`.${buddyHeadingClass}`]: {
        color: 'black',
      },
    },

    '&.focus-visible': {
      [`.${buddyImageClass}`]: {
        boxShadow: (theme) => `${theme.shadows.elevated}, 0 0 0 4px ${theme.colors.primary}`,
      },
    }
  },
}

const slideUp = keyframes({
  from: {
    transform: 'translateY(calc(20% + var(--cb-buddy-index) * 12%))',
    opacity: 0,
  },
  to: {
    transform: 'translateY(0%)',
    opacity: 1,
  },
})

const BuddyGrid = ({ buddies, className }) => (
  <ul className={className} sx={{ ...buddyGridStyles, m: 0, p: 0, '--cb-inner-columns': [4, 6, null, 6, 10], display: 'grid', gridTemplateColumns: 'repeat(var(--cb-inner-columns), minmax(0, 1fr))', columnGap: 'calc(100% / (var(--cb-inner-columns) * 2 - 1))', rowGap: 6 }}>
    {buddies.map((buddy, index) => 
      <li key={buddy.id} sx={{ gridColumn: 'span 2', display: 'block', '--cb-buddy-index': index, animationName: slideUp, animationDuration: '400ms', animationFillMode: 'both' }}>
        <Link to={`/buddy/${buddy.id}`} className={buddyLinkClass} sx={{ display: 'block', outline: 'none' }}>
          <div className={buddyImageClass} sx={{ aspectRatio: '1/1', borderRadius: '9999px', bg: 'grayLight', backgroundImage: `url(${buddy.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <Heading as="h3" className={buddyHeadingClass} sx={{ mt: 3, color: 'gray', fontSize: 1, textAlign: 'center', lineHeight: 1.25 }}>
            {buddy.name}
          </Heading>
        </Link>
      </li>
    )}
  </ul>
)

export default BuddyGrid
