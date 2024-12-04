
const RecentReleases = () => {
    return (
        <div className="recent-releases third-section">
        <div className="albums-singles">
          <div className="albums">
            <div className="titles">
              <h1 className="albums-singles-title div-title">Albums & Singles</h1>
              <p>
                Discover the latest hits from Meedo Records, featuring a curated selection of fresh tracks from talented artists.
              </p>
            </div>
            <a href="/albums/esatu se" className="album">
              <img className="" src="./img/Albums/esatu se.jpg" alt="" />
              <p className="album-title">Esatu Se</p>
            </a>
            <a href="asalafi" className="album">
              <img className="" src="./img/Albums/asalafi.jpg" alt="" />
              <p className="album-title">Asalafi</p>
            </a>
            <a href="/albums/bahl weg" className="album">
              <img className="" src="./img/Albums/bahl weg.jpg" alt="" />
              <p className="album-title">Bahil | Weg</p>
            </a>
            <a href="/albums/sanqa souq" className="album">
              <img className="" src="./img/Albums/sanqa suq.jpg" alt="" />
              <p className="album-title">Sanqa Souq</p>
            </a>
          </div>
          <a id="see-more-link" href="/artists">
              <button className="read-more see-more-light-btn">
                See All
              </button>
            </a>
        </div>
        
      </div>
    )
}

export default RecentReleases;