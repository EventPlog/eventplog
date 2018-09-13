import React from 'react'
import ContentEditable from './ContentEditable'

const ContentEditableWrapper = ({children, canEdit = true, ...ownProps}) => (
  canEdit
    ? <ContentEditable {...ownProps}>
        {
          ({onClick, ...props}) =>
            <div onClick={(e) => onClick(e, ownProps.defaultValue)} {...props}>
              {children}
            </div>
        }
      </ContentEditable>
    : [children]
)

export default ContentEditableWrapper