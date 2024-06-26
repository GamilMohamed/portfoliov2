import "./footer.css";
import arrow from "../assets/arrow.svg";
import { scrollToElement } from "../App";
function Footer({ to }: { to: any }) {
  return (
    <div className="footer">
      <img
        src={arrow}
        onClick={() => scrollToElement(to)}
        alt="arrow"
        style={{
          width: "75px",
          height: "75px",
          rotate: "180deg",
          cursor: "pointer",
        }}
      />
      <div>
        <a
          className="devicon-linkedin-plain"
          target="_blank"
          href="https://www.linkedin.com/in/mohamed-gamil-033466195/"
        ></a>
        <a
          className="devicon-github-plain"
          target="_blank"
          href="https://www.github.com/GamilMohamed"
        ></a>
      </div>
      <hr
        style={{ backgroundColor: "rgb(249, 246, 238)", width: "30%", textAlign: "center" }}
      />
    </div>
  );
}

export default Footer;
