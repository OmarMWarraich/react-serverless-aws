import React from 'react'

const Footer = () => {
  return (
    <footer className="scene">
        <article className="content">
          <div id="socialmedia">
            <ul className="group">
              <li><a href="https://twitter.com"><img className="icon" src="images/twitter.png" alt="icon for twitter"/></a></li>
              <li><a href="http://www.facebook.com"><img className="icon" src="images/facebook.png" alt="icon for facebook"/></a></li>
              <li><a href="http://www.youtube.com"><img className="icon" src="images/youtube.png" alt="icon for youtube"/></a></li>    
            </ul>      
          </div>
        </article>
    </footer>
  )
}

export default Footer