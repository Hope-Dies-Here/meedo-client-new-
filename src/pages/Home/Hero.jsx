import React from 'react';

const HomePageHero = (props) => {
  return (
    <div className="hero">
        <h1 id="meedo-home-text" className="meedo-home-text">Meedo Records</h1>
        <div className="hero-text">
          <h1 className="big-hero-text">
            <span>To</span>
            <span>Move</span>
            <span>a sonic</span>
            <span>nation</span>
            {/*<!-- Moving to sonic nation --> */}
          </h1>
          
          <div className="social-links">
            <p>Follow Us</p>
            <img className="" src="./img/custom icons/instagram.svg" alt="" />
            <img className="" src="./img/custom icons/facebook.svg" alt="" />
            <img className="" src="./img/custom icons/youtube.svg" alt="" />
            <img className="" src="./assets/amazon music.png" alt="" />
            <a href="#" className="img">
              <img className="" src="./assets/instagram.png" alt="" />
            </a>
            <a href="#" className="img">
              <img className="" src="./assets/spotify.png" alt="" />
            </a>
            <a href="#" className="img">
            <img className="" src="./assets/yutub.png" alt="" />
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
            placeat.
          </p>
        </div>
        <p id="sonic-text">Sonic nation</p>
        <img
          id="dribbble"
          className="dribbble"
          src="./img/circle-brand.png"
          alt=""
        />
      </div>
  )
}

export default HomePageHero;