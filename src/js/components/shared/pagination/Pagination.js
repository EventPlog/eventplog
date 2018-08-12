import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationComponent = (props) => (
  <Pagination
    className="pagination"
    defaultActivePage={1}
    firstItem={null}
    lastItem={null}
    pointing
    secondary
    totalPages={3}
    {...props}
  />
)

export default PaginationComponent