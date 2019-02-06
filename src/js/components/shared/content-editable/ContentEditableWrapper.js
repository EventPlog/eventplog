import React from 'react'
import ContentEditable from './ContentEditable'
import styled from 'styled-components'

const StyledDefaults = styled.div`
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  
  ul, ol {
    margin-left: 2rem;
    padding-left: 0;
  }
  
  code {
    background: var(--gray);
    padding: 0.5rem;
    white-space: pre-wrap;
  }
`
const ContentEditableWrapper = ({children, canEdit, ...ownProps}) => (
  <StyledDefaults>
    { canEdit
      ? <ContentEditable {...ownProps}>
          {
            ({onClick, ...props}) =>
              <div onClick={(e) => onClick(e, ownProps.defaultValue)} {...props}>
                {children}
              </div>
          }
        </ContentEditable>
      : [children]
    }
  </StyledDefaults>
)

export default ContentEditableWrapper