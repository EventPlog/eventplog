import React from 'react'
import { Loader } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledLoading = styled.div`
  margin-top: 100px;
`

const Loading = (props) =>
  props.error
    ? <div>An error occured :(</div>
    : <StyledLoading>
        <Loader active inline='centered' />
      </StyledLoading>

export default Loading