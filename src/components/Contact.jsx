import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={email}
            alt="Email"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:arpit.sde1210@gmail.com">Email</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img src={linkedin} alt="LinkedIn" className="icon contact-icon" />
          <p>
            <a href="https://www.linkedin.com/in/arpit-srivastav-7300382a3/">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
