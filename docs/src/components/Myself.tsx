import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Myself.css";
import picture from "../img/picture.png";

const Myself = () => {
  return (
    <div className="intro">
      <div className="intro__left">
        <h2>Hello,</h2>
        <h1 className="intro__name">I am Sudha</h1>
        <div className="intro__title">
          <div className="intro__title_animation">
            <div className="intro__title__item">Frontend Developer</div>
            <div className="intro__title__item">
              Aspiring FullStack Developer
            </div>
          </div>
        </div>
        <div className="intro__desc">
          <p>
            I am a Frontend Developer who likes developing user experience/web
            apps with ReactJs. And also I am passionate about coding and
            aspiring to become a Fullstack Developer
          </p>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/sudhamani-kampamalla-65a331137/"
            target="_blank"
            className="intro__iconlink"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Sudhamani544"
            target="_blank"
            className="intro__iconlink"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>

      <div className="intro__right">
        <div className="intro__right__bg"></div>
        <img src={picture} className="intro__right__img" />
      </div>
    </div>
  );
};

export default Myself;
