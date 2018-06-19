import React from 'react'

const isDevelopment = process.env.NODE_ENV != 'production'

const ErrorComponent = ({msg}) => (
  <div className="app-container">
    <div>
      <h5> Oops ... Something went wrong. </h5>
      <p>{isDevelopment ? msg : ''}</p>
    </div>
  </div>
)

export default ErrorComponent