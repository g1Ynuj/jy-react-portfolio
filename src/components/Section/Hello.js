const Hello = () => {
  const giftCoffeeHandler = () => {
    alert("Currently not available.");
  };
  return (
    <section id="hello">
      <div className="nav-bar">
        <button type="button" onClick={giftCoffeeHandler}>
          Gift Coffee
        </button>
      </div>
      <div className="container">
        <div className="introduction">
          <div className="title">
            <h1>
              Front-End
              <br />
              React Developer 👋🏻
            </h1>
            <div className="subtitle">
              <p className="name">
                Hey, I'm Jun Ying. A passionate developer in 🇹🇼 from 🇲🇾. The
                things I like to do is
                <span> workout</span>
                <span> basketball</span>
                <span> traveling</span>
                <span> coding.</span>
              </p>
            </div>
          </div>
          <div className="media-icons">
            <div className="media-icon">
              <a href="https://shorturl.at/dyzD0" target="_blank">
                <i className="fab fa-github fa-swap-opacity"></i>
              </a>
            </div>
            <div className="media-icon">
              <a href="https://shorturl.at/sEJXY" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="media-icon">
              <a href="https://shorturl.at/hyGO9" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="media-icon">
              <a href="mailto:immwing@gmail.com">
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="down-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hello;
