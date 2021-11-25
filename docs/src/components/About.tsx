import "./About.css";
import aboutme from "../img/aboutme.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about__left">
        <img src={aboutme} className="about__left__img" />
      </div>
      <div className="about__right">
        <div>
          <p>
            Being a programming enthusiast and logical thinking person, I am
            making efforts to learn and stay current and relevant with the
            latest technologies. I love coding and I strive to achieve better
            user experience with my frontend skills. I am learning backend which
            helps me to understand the full functionality of the end to end
            development process.
          </p>
          <p>
            I have good analytical skills which help in efficient programming
            and testing. I am result oriented person with good problem-solving
            skills. I am self-motivated and have good communication skills which
            helps me to be good at stakeholder management
          </p>
          <p>
            Currently I am pursuing a Full Stack Developer course at Integrify
            Academy. The comprehensive 5-month program from Integrify Academy
            focuses on the most modern technologies such as JavaScript,
            React.js, TypeScript, REST API, Node.js, Express.js, Mongodb, Devops
            & AWS
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
