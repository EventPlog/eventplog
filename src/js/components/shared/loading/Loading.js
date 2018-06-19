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

const Loading = (props) =>
  <StyledLoading>
    { props.error
        ? renderError(props.error)
        : <Loader active inline='centered'/>
    }
  </StyledLoading>

export default Loading