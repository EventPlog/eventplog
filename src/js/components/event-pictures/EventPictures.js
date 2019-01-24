import React from 'react'
import styled, {css} from 'styled-components'

import ContentPanel from 'js/components/shared/content-panel'
import { media } from 'js/styles/mixins'

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
  
`

const EventPictures = ({
  className,
  event_pictures = {}
}) => {
  const {data = [], meta = {}} = event_pictures
  return (
      <div className={`${className} pictures-array`}>
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

  )
}

export default styled(EventPictures)`${styles}`