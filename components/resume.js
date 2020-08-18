import Html from "./icons/Html";
import Css from "./icons/Css";
import Javascript from "./icons/Javascript";
import Reacticon from "./icons/Reacticon";

function Resume() {
  return (
    <section id="resume" className="contain">
      <div className="row education">
        <div className="title1">
          <h1>
            <span>🎓Education</span>{" "}
          </h1>
        </div>
        <div className="main-col">
          <div className="edudesc">
            <div className="headtitle">
              <h3>Computer Engineer</h3>
              <p className="info">
                Bursa Technical University
                <span>
                  , <i>2019| 3.03/4</i>
                </span>
              </p>
              <p> </p>
              <p>
                I learned basic OOP, C, JavaActually I learned more than coding
                and I love it.Also I'm currently learning ReactJs, VueJs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row skills">
        <div className="title1">
          <h1>
            {" "}
            <span>🏆Skills</span>{" "}
          </h1>
        </div>
        <div className="main-col">
          <ul>
            <li>
              <a>
                <Html />
              </a>
            </li>
            <li>
              <a>
                <Css />
              </a>
            </li>
            <li>
              <a>
                <Javascript />
              </a>
            </li>
            <li>
              <a>
                <Reacticon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row cv">
        <div className="title1">
          <h1>
            <span>📝Resume</span>
          </h1>
        </div>
        <div className="main-col">
          <a href="#" target="_blank">
            <button className="button2">
              <span>View my Resume 📍</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
