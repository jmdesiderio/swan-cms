export const colors = {
  blueGray: '#1b2d38',
  blue: '#0d78f2',
  green: '#69a740',
  orange: '#d88300',
  salmon: '#ff6d6d',
  red: '#da5a47',
  pink: '#ebccd1',
  pinkLight: '#f2dede',

  // gray scale
  white: '#fff',
  ghost: '#fafafa',
  snow: '#f9f9f9',
  vapor: '#f6f6f6',
  whiteSmoke: '#f5f5f5',
  silver: '#efefef',
  smoke: '#eee',
  gainsboro: '#ddd',
  iron: '#ccc',
  base: '#aaa',
  aluminum: '#999',
  jumbo: '#888',
  monsoon: '#777',
  steel: '#666',
  charcoal: '#555',
  tuatara: '#444',
  oil: '#333',
  jet: '#222',
  black: '#000',

  // Misc colors
  transparent: 'rgba(255, 255, 255, 0)'
}

export const font = {
  family: '"Helvetica Neue", sans-serif'
}

export const base = {
  backgroundColor: colors.silver,
  fontFamily: font.family,
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 1.3,
  textColor: colors.jet
}

export const breakpoints = {
  bigDesktopWidthMin: '1800px',
  desktopWidthMin: '1200px',
  tabletWidthMax: '1199px',
  tabletWidthMin: '600px',
  mobileWidthMax: '599px'
}

export const mediaQueries = {
  mobile: `only screen and (max-width: ${breakpoints.mobileWidthMax})`,
  tabletUp: `only screen and (min-width: ${breakpoints.tabletWidthMin})`,
  tablet: `only screen and (min-width: ${breakpoints.tabletWidthMin}) and (max-width: ${breakpoints.tabletWidthMax})`,
  tabletDown: `only screen and (max-width: ${breakpoints.tabletWidthMax})`,
  desktopUp: `only screen and (min-width: ${breakpoints.desktopWidthMin})`
}

export const margins = {
  smallWrap: '12px',
  bigWrap: '24px'
}

export const transitions = {
  defaultDurationMS: 150,
  defaultDuration: '.15s',
  defaultTiming: 'ease-in-out',
  default: '.15s ease-in-out'
}

export const sizes = {
  sidebarWidth: '13.75rem'
}
