import React from 'react'
import styled from 'styled-components'

const StyledVideo = styled.div`
  width: 100%;
  margin: 2rem 0;
`
const Video = ({
  videoSrc,
  alt,
}) => {
  return(
    <StyledVideo>
     <iframe width="655" 
        height="384" 
        src={videoSrc}
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen>
    </iframe>
    </StyledVideo>
  );
}

export default Video;



