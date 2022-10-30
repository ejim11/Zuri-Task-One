import LinksList from "../LinksList/LinksList";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import classes from "./Layout.module.scss";
import slackImg from "../../assets/slack.svg";
import gitHubImg from "../../assets/Social icon.svg";

const Layout = () => {
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
      <Footer />
    </>
  );
};

export default Layout;
