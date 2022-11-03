import linksData from "./linksData";
import LinkItem from "../LinkItem/LinkItem";
import classes from "./LinksList.module.scss";

const LinksList = () => {
  const list = linksData.map((link, i) => (
    <LinkItem
      key={i}
      title={link.title}
      text={link.text}
      id={link.id}
      link={link.link}
      type={link.type}
    />
  ));

  return <div className={classes["link-list"]}>{list}</div>;
};

export default LinksList;
