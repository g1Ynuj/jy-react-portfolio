import { useState } from "react";

const myStory = () => [
  {
    year: 2016,
    icon: "🏫",
    text: '<div class="text"><span>Jun Ying</span> started bachelor\'s degree <span>National Chi Nan University</span>.</div>',
  },
  {
    year: 2019,
    icon: "🧑🏻‍💻",
    text: '<div class="text">Got an internship opportunity at <span>Digiwin Software Co</span>.</div>',
  },
  {
    year: 2021,
    icon: "🎓",
    text: '<div class="text">Master\'s degree graduated from <span>National Chung Hsing University</span> MIS.</div>',
  },
];

const AboutMe = () => {
  const [story, setStory] = useState(myStory);

  const showStory = (items) => {
    return items.map((item, idx) => {
      return (
        <div className="story" key={idx}>
          <div className="card">
            <div className="timeline-icon">
              <p>{item.icon}</p>
            </div>
            <div className="banner">{item.year}</div>
            <div dangerouslySetInnerHTML={{ __html: item.text }} />
          </div>
        </div>
      );
    });
  };

  return (
    <section id="aboutme">
      <div className="container">
        <div className="tech-stack">
          <h2>Tech Stack</h2>
          <div className="tech-icons">
            <div className="tech-icon">
              <i className="fab fa-html5"></i>
            </div>
            <div className="tech-icon">
              <i className="fab fa-css3-alt"></i>
            </div>
            <div className="tech-icon">
              <i className="fab fa-js"></i>
            </div>
            <div className="tech-icon">
              <i className="fab fa-react"></i>
            </div>
            <div className="tech-icon">
              <img src={require("../../assets/tech-icons/python.png")} alt="" />
            </div>
            <div className="tech-icon">
              <img src={require("../../assets/tech-icons/java.png")} alt="" />
            </div>
          </div>
        </div>
        <div className="about-con">
          <div className="left-con">
            <img
              src={require("../../assets/me-using-laptop.jpeg")}
              alt=""
            ></img>
          </div>
          <div className="right-con">
            <h5>About me</h5>
            <div className="title">Developer in Taiwan from Malaysia.</div>
            <div className="description">
              <p>
                Hello, I'm from Malaysia and I have a strong interest in
                researching new technologies. I am also passionate about outdoor
                activities. In my portfolio, you will find some of the projects
                I have developed, along with personal development notes that I
                share. Feel free to leave me a message in the contact section.
              </p>
            </div>
          </div>
        </div>
        <div className="story-timeline">
          {!story && <p>No story found.</p>}
          {story && showStory(story)}
          <div className="story">
            <div className="card">
              <div className="timeline-icon">
                <p>🫵🏻</p>
              </div>
              <div className="banner">~ today</div>
              <div className="text">
                Currently looking for <span>full-time job</span>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
