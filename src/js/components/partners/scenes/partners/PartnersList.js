import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import Loading from 'js/components/shared/loading'
import Error from 'js/components/shared/loading/Error'
import Button from 'js/components/shared/button'
import Pagination from 'js/components/shared/pagination'
import { pluralize, genEventLink } from 'js/utils'
import Presentation from '../partner-card'

const PresentationsList = ({
  title,
  partners,
  attendEvent,
  getPresentations,
  currentUser
}) => {
  const {loading, error, data = [], meta = {}} = partners;
  const shouldDisplayData = (!loading && !error && data);

  return (
    <ContentPanel title={title}>
      {loading && <Loading />}
      {error && <Loading.Error msg={partners.error} />}
      {shouldDisplayData && data.map(partner =>
         <Presentation {...{partner, attendEvent, currentUser}} />
      )}

      {shouldDisplayData && data.length < 1 &&
        <div>
          <p>
            No partner has been added yet.
          </p>
        </div>
      }

      <div className="pagination-wrapper">
      {
        meta && meta.total_pages && (data.length > 0 || meta.current_page > 1)
          ? <Pagination totalPages={meta.total_pages}
                        activePage={meta.current_page}
                        onPageChange={getPresentations} />
          : ''
      }
      </div>
    </ContentPanel>
  )
}

export default PresentationsList