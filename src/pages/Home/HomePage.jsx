import React from 'react';

import HomePageHero from './Hero'
import AboutUs from './AboutUs'
import RecentReleases from './RecentReleases'
import OurArtists from './OurArtists'
const HomePage = () => {
  return (
  	<div className="grid">
      <HomePageHero />
      <AboutUs />
      <RecentReleases />
      <OurArtists />

      <div className="news">
        <div className="news-title">
          <h1 className="div-title">Leatest News</h1>
          <a className="more-news" href="#">More News</a>
        </div>
        <div className="news-grid">
          <div className="news-item">
            <img src="./img/Announcement/concert-1.jpg" alt="" />
            <h4>Lorem ipsum dolor sit amet, consec tetur adipisicing.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              numquam nulla eligendi architecto vel.
            </p>
            <a className="" href="#">
              <button className="read-more">Read More</button>
            </a>
            <hr/>
          </div>
          <div className="news-item">
            <img src="./img/Albums/rekik.jpg" alt="" />
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              numquam nulla eligendi architecto vel.
            </p>
            <a className="" href="#">
              <button className="read-more">Read More</button>
            </a>
            <hr/>
          </div>

<div className="news-item">
  <img src="./img/laeke-news.jpg" alt="" />
  <h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet. Aperiam numquam nulla eligendi architecto vel.</p>
  <a className="" href="#">
    <button className="read-more">
      Read More
    </button>
    </a>
</div>
<div className="news-item">
  <img src="./img/Announcement/concert-1.jpg" alt="" />
  <h4>Lorem ipsum dolor sit amet, consec tetur adipisicing.</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam numquam nulla eligendi architecto vel.</p>
  <a className="" href="#">
    <button className="read-more">
      Read More
    </button>
    </a>
</div>
        </div>
      </div>
      <div className="contact-us">
        <div className="contact-container">
          <h1 className="contact-us-title div-title">Contact Us</h1>
          <input type="text" name="" id="email" value="" placeholder="Email" />
          <input type="button" name="" id="subscribe" value="Subscribe Now" />
        </div>
      </div>
      <h1> Footer </h1>
    </div>
  )
}

export default HomePage;