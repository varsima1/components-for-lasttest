import React from 'react'
import withLoader from './loader/withLoader';


function Message() {
  return (
    <div>Message</div>
  )
}

export default withLoader(Message)