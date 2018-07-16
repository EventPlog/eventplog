import React from 'react'
import { Loader } from 'semantic-ui-react'
import styled from 'styled-components'
import Error from './Error'

const StyledLoading = styled.div`
  margin: 100px;
`

const renderError = (error) => {
  console.log(error)
  return <Error msg={error.message} />
}

function Loading (props) {
  return (
    <StyledLoading>
      { props.error
        ? renderError(props.error)
        : <Loader active inline='centered'/>
      }
    </StyledLoading>
  )
}

Loading.Error = Error;

export default Loading