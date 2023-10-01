import React from 'react'
import withLoader from './loader/withLoader'
import './scss/About.scss/About.scss'

function About() {
  return (
    <div className='About'>
      <h1>About</h1>
      <hr />
      <h2>Welcome to Scroll: Your Gateway to a World of Possibilities</h2>
      <h2>At Scroll, we offer you a platform where you can seamlessly buy and sell items, connect with others through messaging, enjoy a vast library of videos, and express yourself by sharing your thoughts through posts.</h2>
      <h2>Let's embark on a journey to discover all that Scroll has to offer.</h2>
      <h2>As you start, you'll notice a prominent header featuring the Scroll logo, which serves as your gateway to explore our 'About' page and so much more.</h2>
    <center>
      <h1 className='Alogo'></h1>
      </center>
      <hr/>
      <h2>The next step is all about colors. Picture a bright white sun and a dark moon</h2>
      <h1 className='Dark'></h1>
      <hr/>
      <h2>Next, we embark on the journey of crafting a card, both in the bustling marketplace and for your application. It's a straightforward process — just click the '+' icon on the pages and meticulously complete all the essential details.</h2>
      <h1 className='Add'></h1>
      <hr/>
      <h2>in Market page you can sell and buy items</h2>
      <h1 className='Market'></h1>
      <hr/>
      <h2>in Apply you can add posts</h2>
      <h1 className='Apply'></h1>
      <hr/>
      <h2>in Scroll you can add videos not over 2min</h2>
      <h1 className='Scroll'></h1>
      <hr/>
      <h2>in Message you can chat with you friends</h2>
      <h1 className='Message'></h1>
      <hr/>
      <h2>Embark on your journey with us. Your entry point awaits - you can elegantly log in or begin your adventure with a simple sign-up, all right from this spot.</h2>
      <h1 className='log'></h1>
    </div>
  )
}

export default withLoader(About);