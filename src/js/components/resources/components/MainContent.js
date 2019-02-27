import React from 'react'
import styled, {css} from 'styled-components'

import Resources from './resources'
import NewResource from './new-resource'
import ContentPanel from 'js/components/shared/content-panel'
import EventSubpageWrapper from 'js/components/shared/event-subpage-wrapper'
import Loading from 'js/components/shared/loading'

const styles = css`
  position: relative;
  
  &.app-container {
    padding: 1rem;
    
    > div {
      width: 100%;
    }
  }
  
  .pic-frame {
    margin: 2rem 0;
  }
  
  .caption {
    margin: 1rem 0;
  }
  
  img {
    max-width: 100%;
  }
  
  .img-holder {
    max-width: 160px;
  }
  
  .pagination-wrapper {
    display: flex;
  }
`

const MainContent = ({
  className,
  title,
  resources,
  loading,
  error,
  currentUser,
  requester,
  recipient_id,
  recipient_type,
}) => {

  if (loading) return <Loading />
  if (error) return <Loading.Error msg={error} />

  return (
    <EventSubpageWrapper>
      <div className={`${className} app-container`}>
        <div>
          <Resources title={title || "All resources"}
                     currentUser={currentUser}
                     requester={requester}
                     resources={resources} />
          {currentUser && currentUser.id &&
          <ContentPanel title="Add a resource">
            <NewResource editResource {...{requester}} />
          </ContentPanel>
          }
        </div>
      </div>
    </EventSubpageWrapper>
  )
}

export default styled(MainContent)`${styles}`
