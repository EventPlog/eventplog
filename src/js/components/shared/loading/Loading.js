import React from 'react'
import { Loader } from 'semantic-ui-react'
import styled from 'styled-components'
import Error from './Error'

const StyledLoading = styled.div`
  margin: 100px;
`


const Loading = (props) =>
  <StyledLoading>
    { props.error
        ? <Error msg={props.error.message} />
        : <Loader active inline='centered'/>
    }
  </StyledLoading>

export default Loading