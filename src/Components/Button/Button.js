import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <a
      href={props.link}
      id={props.id}
      className={`${classes["btn"]} ${props.className}`}
    >
      {props.text}
    </a>
  );
};

export default Button;
