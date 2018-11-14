import defaults from './theme/variables'
import { media, maxMedia } from './mixins'
import { css } from 'styled-components'
import { lighten } from 'polished'

const styles = css`
  --fg: ${defaults.fg};
  --bg: ${defaults.bg};
  --gray: ${defaults.gray};
  height: 100%;
  min-height: 100%;
  
  /*background: ${lighten(0.45, defaults.blue)};*/
  
  a, a:hover {
    color: var(--activeLink);
  }
  
  p {
    font-size: 1em;
    font-weight: 500;
    word-break: break-word; 
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  code {
    font-family: Andalemono;
    font-weight: 600;
  }
  
  .text-center {
    text-align: center;
  }
  
  .img-bg {
    position: relative;
  }
  
  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    opacity: 0.6;
    z-index: 0;
  } 
  
  .app-container {
    display: flex;
    align-items: center; 
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    
    ${
      maxMedia.phone`
        flex-direction: column;
        
        > * {
          width: 100%;
        }
      `
    }
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
    
    ${
      media.phone`
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
  
  .sticky-container {
    position: fixed !important;
    z-index: 100;
    top: 0;
  }
  
  
  .hashtags {
    padding: 0.3rem 0.5rem;
    background: ${defaults.gray};
    border-radius: 5px;
  }
  
  .ui.message p {
    font-size: 1rem;
  }
  
  .success {
    color: ${defaults.green};
  }
  
  .error {
    color: red;
  }
  
  .warning {
    color: orange;
  }
  
  .ui.label {
    background: transparent;
  }
`

export default styles;