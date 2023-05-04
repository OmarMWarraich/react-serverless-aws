import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuLinksData, setMenuLinksData] = useState([]);

  useEffect(() => {
    fetch("https://awcoduj2y9.execute-api.us-east-1.amazonaws.com/Production/menulinks")
      .then(res => res.json())
      .then(
        (result) => {
          setMenuLinksData(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [])

  return (
    <header id="intro">
      <article className="fullheight">
        <div className="hgroup">
          <h1>Landon Hotel</h1>
          <h2>West London</h2>
          <p><a href="#welcome"><img src="images/arrow.png" alt="down arrow"/></a></p>
        </div>
      </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
          <ul>
            {
                menuLinksData.map((link,i) => 
                <li key={i}><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>    
                )
            }
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header