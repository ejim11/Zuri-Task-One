import classes from "./InputComponent.module.scss";

const InputComponent = (props) => {
  return (
    <div
      className={`${classes["input-container"]} ${
        props.inputInvalid ? classes["invalid-input"] : classes["valid-input"]
      }`}
    >
      <label>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.inputInvalid && <p>{props.errorText}</p>}
    </div>
  );
};

export default InputComponent;
