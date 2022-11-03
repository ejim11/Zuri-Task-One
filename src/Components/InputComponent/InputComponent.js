const InputComponent = (props) => {
  console.log(props.value, props.inputInvalid);
  return (
    <div>
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
