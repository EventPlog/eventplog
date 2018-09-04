import React from 'react'
import styled, {css} from 'styled-components'

import ContentPanel from 'js/components/shared/content-panel'
import { media } from 'js/styles/mixins'

const sample_pictures = [
  { file_name: 'Before the music took us away', url: '/tech_is_in_you.png' },
  { file_name: 'After the games', url: '/sample-bg.jpg' },
  { file_name: 'The queen herself took us out', url: '/sample-avatar.png' },
  { file_name: 'Then we all gathered for a selfie', url: '/login-bg.jpg' },
]

const styles = css`
  position: relative;
  
  .pic-frame {
    display: inline-block;
    width: calc(33.3% - 2rem);
    margin: 0.5rem 1rem;
    
    ${
      media.phone`  
        width: 100%;
      `
    }
  }
  
  .caption {
    margin: 1rem 0;
  }
  
  img {
    width: 100%;
    max-width: 100%;
  }
  
  .pictures-array {
    position: relative;
  }
  
`

const EventPictures = ({
  className,
  event_pictures = {}
}) => {
  const {data = [], meta = {}} = event_pictures
  return (
    <ContentPanel className={`${className}`} title="Pictures in discussions">
      <div className="pictures-array">
        {data && data.map(pic => (
          pic.url ?
          <div className="pic-frame">
            <div className="caption">
              {pic.file_name}
            </div>
            <img src={pic.url} />
          </div> :
            ''
        ))}
      </div>

    </ContentPanel>
  )
}

export default styled(EventPictures)`${styles}`