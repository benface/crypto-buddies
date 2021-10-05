export default {
  breakpoints: ['420px', '640px', '768px', '1024px', '1280px'],
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 320, 384],
  colors: {
    gray: '#6e7379',
    grayLight: '#b6b8ba',
    primary: '#ca28cd',
    primaryLight: '#d04fdb',
    text: 'black',
    background: 'white',
  },
  fonts: {
    body: 'Space Mono, monospace',
    heading: 'Space Mono, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96, 128],
  lineHeights: {
    body: 1.5,
    heading: 1,
  },
  letterSpacings: {
    body: 'normal',
    heading: '-0.035em',
    button: '0.07em',
  },
  shadows: {
    elevated: '0 4px 60px -10px rgba(0, 0, 0, 0.5)',
    elevatedPrimary: '0 4px 60px -6px rgba(188, 64, 199, 0.6)',
    elevatedPrimaryLg: '0 6px 70px -6px rgba(188, 64, 199, 0.8)',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading',
    },
  },
  styles: {
    root: {
      margin: 0,
      fontFamily: 'heading',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
  },
}
