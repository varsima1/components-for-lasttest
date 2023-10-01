import React,{useState} from 'react';
import withLoader from './loader/withLoader';



function Scroll() {
  return (
    <div>
      scroll
    </div>
  )
}

export default withLoader(Scroll)