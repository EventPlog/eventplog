import React from 'react'

//========== INTERNAL ===========
import BannerPage from 'js/components/shared/banner-page'
import { genEventLink } from 'js/utils'
import { Button } from 'js/components/shared'

const generateTitle = (event) => (
  <span>
    {event.title}
    {event && event.id &&
      <div>
        <Button.Link inverted
                     className="btn"
                     to={genEventLink(event)}>
          View Event Page
        </Button.Link>
      </div>
    }
  </span>
)

const EventSubpageWrapper = ({ event, children }) => (
  <BannerPage title={generateTitle(event)}
              bannerImage={event.featured_image}>
    {children}
  </BannerPage>
)

export default EventSubpageWrapper
