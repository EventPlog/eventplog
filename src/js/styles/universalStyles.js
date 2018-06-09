import defaults from './theme/variables'
import { media } from './mixins'
import { css } from 'styled-components'

const styles = css`
  --fg: ${defaults.fg};
  --bg: ${defaults.bg};
  --activeLink: ${defaults.activeLink};
  --gray: ${defaults.gray};
  height: 100%;
  
  a, a:hover {
    color: var(--activeLink);
  }
  
  p {
    font-size: 1.2em;
    font-weight: 300;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  .text-center {
    text-align: center;
  }
  
  .hidden {
    display: none !important;
  }
  
  .hidden-lg {
    display: none !important;
    
    ${
      media.tablet`
        display: inherit !important;
      `
    }
    
  }
  
  .hidden-md {
    ${
      media.tablet`
        display: none !important;
      `
    }
    
    ${
      media.phone`
        display: inherit !important;
      `
    }
  }
  
  .hidden-xs {
    ${
      media.phone`
        display: none !important;
      `
    }
  }
  
`
export default styles;