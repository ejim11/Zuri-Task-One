import classes from "./LinkItem.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const LinkItem = (props) => {
  const [displayText, setDisplayText] = useState(false);

  return (
    <a
      href={props.link}
      id={props.id}
      className={classes["btn"]}
      onMouseEnter={() => {
        setDisplayText(true);
      }}
      onMouseLeave={() => {
        setDisplayText(false);
      }}
    >
      {props.title}
      <span
        className={`${classes["text"]} ${
          displayText ? classes["show"] : classes["hide"]
        }`}
      >
        {props.text}
      </span>
    </a>
  );
};

export default LinkItem;
