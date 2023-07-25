const items = [
  {
    images: require("../../assets/tutorcn.png"),
    title: "TutorCN",
    description:
      "Design a platform that provides convenience and efficient matching for students and tutors, with a QR code check-in feature to record class locations and attendance status, thereby fostering better trust and transparency between students and tutors.",
    used_skills: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    images: require("../../assets/bpmtest.png"),
    title: "Automation testing",
    description:
      "Automated scripts can enhance the accuracy and consistency of software testing, enabling rapid execution of numerous test cases while reducing the likelihood of human errors during manual testing. This, in turn, elevates the efficiency of the development team.",
    used_skills: ["JAVA", "Selenium"],
  },
  {
    images: require("../../assets/nids-dashboard.png"),
    title: "NIDS Dashboard",
    description:
      "In smart factories, personnel can remotely monitor production environments through IoT devices. To ensure the security of network activities, deep learning models are applied to detect abnormal behaviors, enabling anomaly alerts and proactive defense measures.",
    used_skills: ["Flask", "Sqlite3", "Autoencoder", "LSTM"],
  },
];

const Portfolio = () => {
  const showPortfolio = (items) => {
    return items.map((item, idx) => {
      return (
        <div className="portfolio-item" key={idx}>
          <div className="image">
            <img src={item.images} alt=""></img>
          </div>
          <div className="descr">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="skills">
              {item.used_skills.map((skill, idx) => {
                return <p key={idx}>{skill}</p>;
              })}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section id="portfolio">
      <div className="container">
        <div className="portfolio-con">
          <h5>Portfolio</h5>
          <p>Every project is making my development path.</p>
        </div>
        <div className="portfolios">
          {!items && <p>Please wait the portfolio load.</p>}
          {items && showPortfolio(items)}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
