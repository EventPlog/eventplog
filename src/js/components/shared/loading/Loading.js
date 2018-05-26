import React from 'react'
import { Loader } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledLoading = styled.div`
  margin: 100px;
`

const isDevelopment = process.env.NODE_ENV != 'production'

const Loading = (props) =>
  <StyledLoading>
    { props.error
        ? <div>An error occured :( {isDevelopment && props.error.message}</div>
        : <Loader active inline='centered'/>
    }
  </StyledLoading>

export default Loading