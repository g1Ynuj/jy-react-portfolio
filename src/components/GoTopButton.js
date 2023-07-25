import { useState, useEffect } from "react";

const GoTopButton = () => {
  const [showButton, setShowButton] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Effect to detect user scrolling the page down.
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    // updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [scrollPosition]);

  const clickHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setShowButton(!showButton);
  };

  return (
    <div className="nav-gotop">
      <div className={scrollPosition < 300 ? "hide" : "show"}>
        <button type="button" id="goTopButton" onClick={clickHandler}>
          <i className="fa fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default GoTopButton;
