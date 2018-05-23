import React from 'react';
import styled from 'styled-components';

// internal components
import FileUploader from './FileUploader';

const StyledSettings = styled.div`
  
`
const Settings = () => {
  return (
    <StyledSettings>
      <FileUploader />
    </StyledSettings>
  )
}

export default Settings;