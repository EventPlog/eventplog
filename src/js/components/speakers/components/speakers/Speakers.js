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
import Speaker from '../speaker'


const nSpeakers = {
  data: [
    {
      id: 1,
      title: 'A great talk',
      summary: 'This is a very short summary about the talk by the greatest',
      details: 'This is a very long details about the talk by the greatest',
      start_time: '12:04pm',
      end_time: '12:30pm',
      user: {
        id: 1,
        display_name: 'Maranatha Spolvich',
      }
    }
  ],
  meta: {

  }
}
const Speakers = ({
  title,
  speakers,
  attendEvent,
  getSpeakers,
  currentUser
}) => {
  const {loading, error, data = [], meta = {}} = nSpeakers;
  const shouldDisplayData = (!loading && !error && data);

  return (
    <ContentPanel title={title}>
      {loading && <Loading />}
      {error && <Loading.Error msg={speakers.error} />}
      {shouldDisplayData && data.map(speaker =>
         <Speaker {...{speaker, attendEvent, currentUser}} />
      )}

      {shouldDisplayData && data.length < 1 &&
        <div>
          <p>
            No speaker has been added yet.
          </p>
        </div>
      }

      <div className="pagination-wrapper">
      {
        meta && meta.total_pages && (data.length > 0 || meta.current_page > 1)
          ? <Pagination totalPages={meta.total_pages}
                        activePage={meta.current_page}
                        onPageChange={getSpeakers} />
          : ''
      }
      </div>
    </ContentPanel>
  )
}

export default Speakers