import React from 'react'
import styled, {css} from 'styled-components'

import Resources from './speakers'
import NewResource from './new-speaker'
import ContentPanel from 'js/components/shared/content-panel'
import Loading from 'js/components/shared/loading'

const styles = css`
  position: relative;
  
  .pic-frame {
    margin: 2rem 0;
  }
  
  .caption {
    margin: 1rem 0;
  }
  
  img {
    max-width: 100%;
  }
  
  .pagination-wrapper {
    display: flex;
  }
`

const MainContent = ({
  className,
  speakers,
  loading,
  error,
  currentUser
}) => {

  if (loading) return <Loading />
  if (error) return <Loading.Error msg={error} />

  return (
    <div className={`${className}`}>
      <Resources title="All speakers"
                 currentUser={currentUser}
                 speakers={speakers} />
      {currentUser && currentUser.id &&
        <ContentPanel title="Add a speaker">
          <NewResource />
        </ContentPanel>
      }
    </div>
  )
}

export default styled(MainContent)`${styles}`
