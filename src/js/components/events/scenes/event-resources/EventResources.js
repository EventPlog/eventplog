import React from 'react'
import styled, {css} from 'styled-components'

import ContentPanel from 'js/components/shared/content-panel'
import Resources from './Resources'

const resources = {
  data: [
    {
      id: 2,
      title: 'ReactJS and Serverless',
      type: 'video',
      link: 'http://example.com',
      description: 'Here contains my slides and effects',
      owner: {display_name: 'James Oyyanna'},
      publish_time: '2 weeks ago',
      no_of_views: 41,
      no_of_reviews: 5,
      rating: 4
    },
    {
      id: 3,
      title: 'Metrics and outputs of numbers',
      type: 'video',
      link: 'http://example.com',
      description: 'Here contains my slides and effects',
      owner: {display_name: 'Ozumba Mbadiwe'},
      publish_time: '2 weeks ago',
      no_of_views: 4,
      no_of_reviews: 3,
      rating: 3
    },
    {
      id: 4,
      title: 'Lessons from the ghastly talks',
      owner: {display_name: 'Loveth Okoh'},
      type: 'video',
      link: 'http://example.com',
      description: 'Here contains my slides and effects',
      publish_time: '3 weeks ago',
      no_of_views: 24,
      no_of_reviews: 32,
      rating: 9
    },
  ],
  meta: {
    total_pages: 3,
    total_count: 4,
  }
}

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
`

const EventPictures = ({
  className,
  speaker_resources = resources,
  other_resources = resources,
}) => {
  return <div>When available, the speakers' deck/slides and any other resource shared by the organizers will be available here.</div>
  return (
    <div className={`${className}`}>
      <Resources title="Speaker Decks/Slides"
                      resources={speaker_resources} />

      <Resources title="Additional Resources"
                      resources={other_resources} />
    </div>
  )
}

export default styled(EventPictures)`${styles}`