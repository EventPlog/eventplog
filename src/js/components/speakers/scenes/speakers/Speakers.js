import React from 'react'
import styled, {css} from 'styled-components'

import SpeakersList from './SpeakersList'
import NewSpeaker from '../new-speaker'
import ContentPanel from 'js/components/shared/content-panel'
import Loading from 'js/components/shared/loading'
import { genEventLink } from 'js/utils'

const styles = css`
  position: relative;
  
  &.app-container {
    margin-top: 2rem;
    padding: 1rem;
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
  
  .pagination-wrapper {
    display: flex;
  }
`

export const generateTitle = (event) => {
  const title = <a href={`${window.location.origin}${genEventLink(event, event.community)}?utm_source=feedback_form`}>{event.title}</a>
  return <p>All presentations - {title}</p>
}

export const Speakers = ({
  className,
  speakers,
  event,
  loading,
  error,
  currentUser
}) => {

  if (loading) return <Loading />
  if (error) return <Loading.Error msg={error} />

  return (
    <div className={`${className} speakers app-container`}>
      <div>
        <SpeakersList title={generateTitle(event)}
                  currentUser={currentUser}
                  speakers={speakers} />
        { event.is_stakeholder &&
          <ContentPanel title="Add a speaker">
            <NewSpeaker newSpeaker />
          </ContentPanel>
        }
      </div>
    </div>
  )
}

export default styled(Speakers)`${styles}`
