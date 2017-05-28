import { injectGlobal } from 'styled-components'
import { base, colors } from './theme'

injectGlobal`
  html,
  body {
    -webkit-font-smoothing: subpixel-antialiased;
    height: 100%;
    margin: 0;
    max-width: 100%;
    padding: 0;
    text-rendering: optimizeLegibility;
  }

  html {
    box-sizing: border-box;
    overflow-x: hidden;
  }

  * {
    &,
    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  body {
    background-color: ${base.backgroundColor};
    color: ${base.textColor};
    font-family: ${base.fontFamily};
    font-size: ${base.fontSize};
    font-weight: ${base.fontWeight};
    line-height: ${base.lineHeight};
  }

  .root {
    height: 100%;
  }

  a {
    border-bottom: 1px solid ${colors.transparent};
    color: ${colors.blue};
    cursor: pointer;
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid ${colors.blue};
    }

    .touch & { // .touch a
      -webkit-tap-highlight-color: ${colors.transparent};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${base.fontFamily};
    font-weight: 500;
    line-height: ${base.lineHeight};
    margin: 0;
    text-transform: capitalize;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  small {
    font-size: .75em;
  }

  @-ms-viewport {
    width: device-width;
  }
`
