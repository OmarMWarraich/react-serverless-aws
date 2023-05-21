/* import React, {useState, useEffect} from 'react';

const Welcome = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    fetch("https://awcoduj2y9.execute-api.us-east-1.amazonaws.com/Production/galleries")
      .then(res => res.json())
      .then(
        (result) => {
          setGalleryData(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [])

  return (
    <div className="scene" id="welcome">
        <article className="content">
          <div className="gallery">
            {
              galleryData.map((gallery,i) =>
                <img key={i} src={gallery.src} alt={gallery.alt} className={gallery.className}/>
              )
            }
          </div>
          <h1>Welcome to the Landon&nbsp;Hotel</h1>
          <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
        </article>
      </div>
  )
}

export default Welcome */

import React from 'react'
import galleryData from '../data/gallery.json'

const Welcome = () => {
  return (
    <div className="scene" id="welcome">
        <article className="content">
          <div className="gallery">
            {
              galleryData.map((gallery,i) =>
                <img key={i} src={gallery.src} alt={gallery.alt} className={gallery.className}/>
              )
            }
          </div>
          <h1>Welcome to the Landon&nbsp;Hotel</h1>
          <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
        </article>
      </div>
  )
}

export default Welcome 