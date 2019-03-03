import React from 'react'
import { Loader } from 'semantic-ui-react'
import styled from 'styled-components'
import Error from './Error'

const StyledLoading = styled.div`
  min-height: 100px;
  display: flex;
  
  .loader-holder {
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
  }
`

const LoaderComp = () => (
  <div className="loader-holder">
    <div class="ovals-loading"></div>
    <div class="ovals-loading"></div>
  </div>
)

const renderError = (error) => {
  console.log(error)
  return <Error msg={error.message} />
}

function Loading (props) {
  return (
    <StyledLoading>
      { props.error
        ? renderError(props.error)
        : <LoaderComp />
      }
    </StyledLoading>
  )
}

Loading.Error = Error;

export default Loading