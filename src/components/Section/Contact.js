const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.first_name);
  };

  const cvDownloadHandler = (event) => {
    event.preventDefault();
    const cv = require("../../assets/resume.pdf");
    window.open(cv);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-con">
          <h5>Contact</h5>
          <div className="title">Don't be shy to knock me! ✊🏻</div>
        </div>
        <div className="content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-control">
              <input type="text" name="first_name" placeholder="First Name" />
              <input type="text" name="last_name" placeholder="Last Name" />
            </div>
            <div className="input-control">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="input-control">
              <textarea
                cols="15"
                rows="8"
                name="review"
                placeholder="Leave your review."
              ></textarea>
            </div>
            <div className="submit-btn">
              <input type="submit" value="Submit it!" />
            </div>
          </form>
          <div className="resume-download">
            <div className="chinese-resume">
              <button type="button" onClick={cvDownloadHandler}>
                下載履歷
              </button>
            </div>
            <div className="english-resume">
              <button type="button" onClick={cvDownloadHandler}>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
