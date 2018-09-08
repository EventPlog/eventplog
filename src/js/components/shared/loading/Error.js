import React from 'react'

const ErrorComponent = ({className, msg}) => (
  <div className={`${className} app-container`} style={{margin: '2rem auto', padding: '0 2rem'}}>
    <div>
      <h5> Oops ... Something went wrong. </h5>
      <p>{msg.toString()}</p>
    </div>
  </div>
)

export default ErrorComponent