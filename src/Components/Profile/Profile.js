import classes from "./Profile.module.scss";
import { FaTwitter, FaSlack } from "react-icons/fa";
import profilePic from "../../assets/DSC_3334.jpg";
import shareBtn from "../../assets/_Avatar share button.svg";
import shareBtn2 from "../../assets/_Avatar share button-2.svg";

const Profile = (props) => {
  return (
    <>
      <header>
        <div className={classes["profile-pic"]} id="profile-img">
          <img src={profilePic} alt="profile-pic" />
        </div>
        <p className={classes.name}>Ejim Favour</p>
        <div className={classes["profile-links"]} id="twitter">
          <FaTwitter className={classes["twitter-icon"]} />
          <a
            href="http://twitter.com/@favourejim56"
            target={"_blank"}
            rel="noreferrer"
          >
            @favourejim56
          </a>
        </div>
        <div
          className={`${classes["profile-links"]} ${classes["slack-link"]}`}
          id="slack"
        >
          <FaSlack className={classes["twitter-icon"]} />
          <a href="http://slack.com/@jimmy" target={"_blank"} rel="noreferrer">
            @jimmy
          </a>
        </div>
        <div className={classes["share-btn"]}>
          <img
            src={shareBtn}
            alt="share-btn"
            className={classes["share-btn-1"]}
          />
          <img
            src={shareBtn2}
            alt="share-btn"
            className={classes["share-btn-2"]}
          />
        </div>
      </header>
    </>
  );
};

export default Profile;
