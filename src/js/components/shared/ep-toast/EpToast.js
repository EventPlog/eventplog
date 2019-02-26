import React, { useState, useEffect } from 'react'
import { renderToStaticMarkup } from 'react-dom/server';

import styled from 'styled-components'

const StyledEpToast = styled.div`
  position: fixed;
  z-index: 10000;
  padding: 1rem;
  color: #276f86;
  background: #f8ffff;
  top: 10rem;
  right: 2rem;
  border-radius: 5px;
  min-width: 300px;
  max-width: 400px;
  
  .title {
    font-weight: 900;
  }
  
  &.success {
    color: #376337;
    background: #cefbce;
  }
  
  &.error {
    color: #db2828;
    background: #ffe8e6;
  
  }
  
  &.info {
    color: #2185d0;
    background: #dff0ff;
  
  }
  
`

function EpToast ({title, children, className}) {
  return (
    <StyledEpToast className={`toast show ${className}`}>
      <div className="title">
        {title}
      </div>
      {children}
    </StyledEpToast>
  )
}

EpToast.show = ({title, body, className}) => {
  console.log('the body: ', body)
  const staticMarkup = renderToStaticMarkup(<EpToast title={title} className={className}>{body}</EpToast>).toString()
  document.getElementsByTagName('body')[0]
          .insertAdjacentHTML('afterbegin', staticMarkup)

  setTimeout(() => {
    const el = document.getElementsByClassName('toast', 'show')[0]
    el && el.remove()
  }, 5000)
}

EpToast.success = ({title, body}) => {
  EpToast.show({title, body, className: 'success'})
}

EpToast.error = ({title, body}) => {
  EpToast.show({title, body, className: 'error'})
}

EpToast.info = ({title, body}) => {
  EpToast.show({title, body, className: 'info'})
}

export default EpToast

