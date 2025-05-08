import { useEffect } from "react";
import Typed from "typed.js";
import PP from "../assets/PP.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import resume from "../assets/resume.pdf";

const Profile = () => {
  useEffect(() => {
    const typed = new Typed("#element", {
      strings: [
        "Full Stack Developer",
        "Software Developer",
        "Web Designer",
        "Video Editor",
      ],
      typeSpeed: 50,
    });

    return () => typed.destroy(); // ✅ Cleanup to prevent memory leaks
  }, []);

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={PP} alt="Arpit's profile" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Arpit Srivastav</h1>
        <p className="section__text__p2">
          <span id="element"></span>
        </p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open(resume)}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedin}
            alt="LinkedIn"
            className="icon"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/arpit-srivastav-7300382a3/")
            }
          />
          <img
            src={github}
            alt="Github"
            className="icon"
            onClick={() =>
              (window.location.href = "https://github.com/Arpit-sde1210")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
