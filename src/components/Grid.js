/** @jsx jsx */
import { jsx } from 'theme-ui'

const Grid = ({ className, children }) => (
  <div className={className} sx={{ '--cb-columns': [4, 6, null, 8, 12], display: 'grid', gridTemplateColumns: 'repeat(var(--cb-columns), minmax(0, 1fr))', columnGap: 'calc(100% / (var(--cb-columns) * 2 - 1))', pt: [10, null, null, 11, 12], pb: [10, null, null, 11, 13] }}>
    {children}
  </div>
)

export default Grid
