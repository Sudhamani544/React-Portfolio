import "./Project.css";
import { data } from "../Data";

const Project = () => {
  return (
    <div className="project">
      <div className="project__wrapper">
        {data.map((item) => {
          return (
            <div className="project__maincard">
              <div className="project__card">
                <div className="project__browser"></div>
                <a href={item.link} target="_blank">
                  <img src={item.img} className="project__cardimg" />
                </a>
              </div>
              <div>
                <h3 className="project__title">{item.name}</h3>
                <p className="project__title">{item.skills}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
