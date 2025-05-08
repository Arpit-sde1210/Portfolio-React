import arrow from "../assets/arrow.png";
import education from "../assets/education.png";
import experience from "../assets/experience.png";
import Web from "../assets/Web.jpg";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={Web} alt="Profile" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experience} alt="Experience" className="icon" />
              <h3>Experience</h3>
              <p>
                Intern at Newgen Software <br />
                as Python Developer
              </p>
            </div>
            <div className="details-container">
              <img src={education} alt="Education" className="icon" />
              <h3>Education</h3>
              <p>B.Tech Bachelors Degree</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Results-oriented programmer with a strong foundation in Python,
              Java, and C. Proficient in data manipulation using Pandas and
              NumPy, and model development with PyTorch. Adept at crafting
              dynamic web applications using HTML, CSS, JavaScript, and
              frameworks like Flutter and Flask. Possessing a keen eye for
              design, I leverage Bootstrap to create visually appealing user
              interfaces.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "#experience")}
      />
    </section>
  );
};

export default About;
