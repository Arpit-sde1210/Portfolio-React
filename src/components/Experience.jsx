import arrow from "../assets/arrow.png";
import Checkmark from "../assets/checkmark.png";

const Experience = () => {
  const webSkills = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Material UI", level: "Intermediate" },
  ];

  const softwareSkills = [
    { name: "Python", level: "Experienced" },
    { name: "Java", level: "Intermediate" },
    { name: "Microservices", level: "Basic" },
    { name: "Git", level: "Intermediate" },
    { name: "Data Structures", level: "Intermediate" },
    { name: "Spring Boot", level: "Basic" },
  ];

  const renderSkills = (skills) =>
    skills.map((skill) => (
      <article key={skill.name}>
        <img src={Checkmark} alt="Check" className="icon" />
        <div>
          <h3>{skill.name}</h3>
          <p>{skill.level}</p>
        </div>
      </article>
    ));

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Key Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Web Development</h2>
            <div className="article-container">{renderSkills(webSkills)}</div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Software Development</h2>
            <div className="article-container">
              {renderSkills(softwareSkills)}
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "#projects")}
      />
    </section>
  );
};

export default Experience;
