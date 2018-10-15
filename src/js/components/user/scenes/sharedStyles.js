import { css } from 'styled-components'

// =========== INTERNAL ============
import { media } from 'js/styles/mixins'

export default css`
  .ui.grid.app-container {
    align-items: flex-start;
  }
  
  .ui.grid>[class*="twelve wide"].column,
  .ui.grid>.stretched.column:not(.row),
  .stretched.twelve.wide.column {
    ${
      media.phone`
        width: 100% !important;
      `
    }
  }
  
  .four.wide.column {
    ${
      media.phone`
        width: 100% !important;
        padding: 0;
      `
    }
  }
  
  .ui.fluid.vertical.menu {
    ${
      media.phone`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100% !important;
        border: 1px solid ${props => props.theme.gray};
        
          .active.item {
            border: none;
            border-bottom: 1px solid;
            border-radius: 0 !important;
          }
        }
      `
    }
  }
`
