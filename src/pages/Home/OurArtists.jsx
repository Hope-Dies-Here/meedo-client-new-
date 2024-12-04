import React from 'react';

const OurArtists = () => {
    return (
        <div className="artists">
          <div className="artist-title">
            <h1 className="the-artist-title div-title">Our Artists</h1>
            <p>
              Discover the talented artists, each with their own unique style and passion for music, creating unforgettable tracks that resonate with listeners around the world.
            </p>
          </div>
          <div className="artists-list">
            <a href="/artists/kassmasse" className="artist">
              <img className="" src="./img/Artists/dagi.jpg" alt="" />
              {/*<!-- <p className="artist-name">Kassmasse</p> -->*/}
            </a>
            <div className="artist middle-artist">
              <img className="" src="./img/Artists/kassmasse.jpg" alt="" />
              {/*<!-- <p className="artist-name">Kassmasse</p> -->*/}
            </div>
            <div className="artist">
              <img className="" src="./img/Artists/jd.jpg" alt="" />
              {/*<!-- <p className="artist-name">Kassmasse</p> -->*/}
            </div>
          </div>
          <div className="goto-artists">
            <a id="see-more-link" href="/artists">
              <button className="read-more see-more-light-btn">
                See All
                </button>
            </a>
          </div>
        </div>
    )
}

export default OurArtists;