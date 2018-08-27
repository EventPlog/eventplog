import React from 'react'
import styled, {css} from 'styled-components'

import ContentPanel from 'js/components/shared/content-panel'

const sample_pictures = [
  { file_name: 'Before the music took us away', url: '/tech_is_in_you.png' },
  { file_name: 'After the games', url: '/sample-bg.jpg' },
  { file_name: 'The queen herself took us out', url: '/sample-avatar.png' },
  { file_name: 'Then we all gathered for a selfie', url: '/login-bg.jpg' },
]

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
  pictures = sample_pictures
}) => {
  return (
    <ContentPanel className={`${className}`} title="Highlights">
      <div className="pictures-array">
        {pictures.map(pic => (
          <div className="pic-frame">
            <div className="caption">
              {pic.file_name}
            </div>
            <img src={pic.url} />
          </div>
        ))}
      </div>

    </ContentPanel>
  )
}

export default styled(EventPictures)`${styles}`