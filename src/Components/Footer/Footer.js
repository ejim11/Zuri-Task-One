import classes from "./Footer.module.scss";
import zuriImg from "../../assets/zuri img.svg";
import I4GImg from "../../assets/I4G.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={zuriImg} alt={"zuri-logo"} />
      </div>
      <p>HNG Internship 9 Frontend Task</p>
      <div>
        <img src={I4GImg} alt={"I4G-logo"} />
      </div>
    </footer>
  );
};

export default Footer;
