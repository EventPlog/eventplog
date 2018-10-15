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
import Resource from '../resource'


const Resources = ({
  title,
  resources,
  attendEvent,
  getResources,
  currentUser
}) => {
  const {loading, error, data = [], meta = {}} = resources;
  const shouldDisplayData = (!loading && !error && data);

  return (
    <ContentPanel title={title}>
      {loading && <Loading />}
      {error && <Loading.Error msg={resources.error} />}
      {shouldDisplayData && data.map(resource =>
         <Resource {...{resource, attendEvent, currentUser}} />
      )}

      {shouldDisplayData && data.length < 1 &&
        <div>
          <p>
            No one has shared an ebook, video or some other helpful resource yet.&nbsp;
          </p>
          <p>
            We send notifications to people interested in an event when someone does. Remember you could share too :)
          </p>

        </div>
      }

      <div className="pagination-wrapper">
      {
        meta && meta.total_pages && (data.length > 0 || meta.current_page > 1)
          ? <Pagination totalPages={meta.total_pages}
                        activePage={meta.current_page}
                        onPageChange={getResources} />
          : ''
      }
      </div>
    </ContentPanel>
  )
}

export default Resources