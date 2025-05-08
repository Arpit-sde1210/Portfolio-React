import Chatbot from "../assets/Chatbot.jpg";
import Payroll from "../assets/Payroll.jpg";
import Portfolio from "../assets/Portfolio.png";
import Arrow from "../assets/arrow.png";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      img: Portfolio,
      url: "https://github.com/",
    },
    {
      title: "Streamlit Chatbot",
      img: Chatbot,
      url: "https://github.com/Arpit-sde1210/ChatBot-using-Gemini-LLM",
    },
    {
      title: "Employee Payroll System",
      img: Payroll,
      url: "https://github.com/Arpit-sde1210/Employee-PayRoll-System",
    },
  ];

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project, idx) => (
            <div className="details-container color-container" key={idx}>
              <div className="article-container">
                <img
                  src={project.img}
                  alt={project.title}
                  className={`project-img ${
                    project.title === "Employee Payroll System"
                      ? "payroll-img"
                      : ""
                  }`}
                />
              </div>
              <h2 className="experience-sub-title project-title">
                {project.title}
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = project.url)}
                >
                  Github
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={Arrow}
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "#contact")}
      />
    </section>
  );
};

export default Projects;
