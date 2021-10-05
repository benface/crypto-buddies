/** @jsx jsx */
/** @typedef { import('../../mocks/generated/prisma-client/index').Buddy } Buddy */
import { jsx, Heading } from 'theme-ui'
import Transition from '../components/Transition'
import Grid from '../components/Grid'
import Button from '../components/Button'

const Details = ({ pageContext }) => {
  /** @type {Buddy} */
  const buddy = pageContext.buddy

  return (
    <Transition>
      <Grid>
        <div sx={{ gridColumn: ['2 / span 2', '3 / span 2', '1 / span 2'], aspectRatio: '1/1', borderRadius: '9999px', bg: 'grayLight', backgroundImage: `url(${buddy.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'translateY(-40%)' }} />
        <div sx={{ position: 'relative', gridColumn: ['1 / -1', null, '3 / -1', null, '3 / -2'], mt: ['-0.32em', null, null, '-0.4em'], variant: 'text.heading', fontSize: [5, 6, 7, 8, 9] }}>
          <Heading as="h1" sx={{ pb: 2, font: 'inherit', letterSpacing: 'inherit', textAlign: ['center', null, 'left'], textOverflow: 'ellipsis', overflow: 'hidden' }}>
            {buddy.name}
          </Heading>
          <div sx={{ mt: [8, null, 6], display: 'flex', justifyContent: ['center', null, 'flex-start'] }}>
            <Button>Add Buddy</Button>
          </div>
        </div>
      </Grid>
    </Transition>
  )
}

export default Details
