import React from 'react'
import withLoader from './loader/withLoader'
import './scss/About.scss/About.scss'

function About() {
  return (
    <div className='About'>
      <h1>About</h1>
      <hr />
      <h2>hello this is Scroll</h2>
      <h2>Here you can sell or buy items send message watch videos and add posts</h2>
      <h2>lets learn how to use all this</h2>
      <h2>first you have header where you see Scroll logo this help you to go in about page</h2>
      <h1 className='Alogo'></h1>
      <h2>next sing is background color you see sun and moon sun is white and moon is dark</h2>
      <h1 className='ADarkMode'></h1>

    </div>
  )
}

export default withLoader(About);