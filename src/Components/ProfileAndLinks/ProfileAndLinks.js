import Profile from "../Profile/Profile";
import LinksList from "../LinksList/LinksList";
import slackImg from "../../assets/slack.svg";
import gitHubImg from "../../assets/Social icon.svg";
import classes from "./ProfileAndLinks.module.scss";

const ProfileAndLinks = () => {
  return (
    <>
      <Profile />
      <main>
        <LinksList />
        <div className={classes["social-links"]}>
          <a href="https://app.slack.com/client/T042F7V19Q8/setup-welcome">
            <img src={slackImg} alt={"slack-logo"} />
          </a>
          <a href="https://github.com/ejim11">
            <img src={gitHubImg} alt={"github-logo"} />
          </a>
        </div>
      </main>
    </>
  );
};

export default ProfileAndLinks;
