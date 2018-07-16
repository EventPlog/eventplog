import React from 'react'

const isDevelopment = process.env.NODE_ENV != 'production'

const ErrorComponent = ({msg}) => (
  <div className="app-container" style={{margin: '50px auto'}}>
    <div>
      <h5> Oops ... Something went wrong. </h5>
      <p>{isDevelopment ? msg.toString() : ''}</p>
    </div>
  </div>
)

export default ErrorComponent