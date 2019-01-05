import React from 'react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components'

import PartnersList from './PartnersList'
import NewPartner from '../new-partner'
import ContentPanel from 'js/components/shared/content-panel'
import Loading from 'js/components/shared/loading'
import { genEventLink } from 'js/utils'

const styles = css`
  position: relative;
  
  &.app-container {
    margin-top: 3rem;
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
  
  .pagination-wrapper {
    display: flex;
  }
`

export const generateTitle = (event) => {
  const title = <Link to={`${genEventLink(event, event.community)}?utm_source=feedback_form`}>{event.title}</Link>
  return <p>All partners - {title}</p>
}

export const Partners = ({
  className,
  partners,
  event,
  loading,
  error,
  currentUser
}) => {

  if (loading) return <Loading />
  if (error) return <Loading.Error msg={error} />

  return (
    <div className={`${className} partners app-container`}>
      <div>
        <PartnersList title={generateTitle(event)}
                  currentUser={currentUser}
                  partners={partners} />
        { event.is_stakeholder &&
          <ContentPanel title="Add a partner">
            <NewPartner newPartner />
          </ContentPanel>
        }
      </div>
    </div>
  )
}

export default styled(Partners)`${styles}`
