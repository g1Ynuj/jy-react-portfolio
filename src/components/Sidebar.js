const Sidebar = () => {
  const onClickHandler = (event) => {
    const { id } = event.target;
    const element = document.getElementById(id.slice(4));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sidebar">
      <div>
        <div className="avatar-con">
          <div className="avatar">
            <img src={require("../assets/myavatar.png")} alt=""></img>
          </div>
        </div>
        <div className="label-con">
          <div className="label-icon">
            <p>Web Developer</p>
          </div>
          <div className="label-icon">
            <p>Cybersecurity</p>
          </div>
          <div className="label-icon">
            <p>Machine Learning</p>
          </div>
        </div>
      </div>
      <ul className="sidebar-nav">
        <li>
          <button type="button" id="nav-aboutme" onClick={onClickHandler}>
            About me
          </button>
        </li>
        <li>
          <button type="button" id="nav-portfolio" onClick={onClickHandler}>
            Portfolio
          </button>
        </li>
        <li>
          <button type="button" id="nav-blogs" onClick={onClickHandler}>
            Blogs
          </button>
        </li>
        <li>
          <button type="button" id="nav-contact" onClick={onClickHandler}>
            Contact
          </button>
        </li>
      </ul>
      <div className="footer">
        <div className="greeting-text">
          <p>Thanks you for visiting my page.</p>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
