import React from 'react'
import { Pagination } from 'semantic-ui-react'

// ======== internal =========
import ShowMoreButton from './show-more-button'

class PaginationComponent extends React.Component {
  render() {
    return (
      <Pagination
        className="pagination"
        defaultActivePage={1}
        firstItem={null}
        lastItem={null}
        pointing
        secondary
        totalPages={3}
        {...this.props}
      />
    )
  }
}

PaginationComponent.ShowMoreButton = ShowMoreButton

export default PaginationComponent