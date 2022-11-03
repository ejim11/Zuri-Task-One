import useInput from "../../hooks/user-input";
import InputComponent from "../InputComponent/InputComponent";

const ContactForm = () => {
  const {
    value: enteredFirstName,
    valueIsValid: enteredFirstNameIsValid,
    valueHasError: enteredFirstNameIsInValid,
    valueInputChangeHandler: firstNameInputChangeHandler,
    valueInputBlurHandler: firstNameInputBlurHandler,
    resetValue: firstNameInputReset,
  } = useInput((val) => val.trim() !== "");
  const {
    value: enteredLastName,
    valueIsValid: enteredLastNameIsValid,
    valueHasError: enteredLastNameIsInValid,
    valueInputChangeHandler: lastNameInputChangeHandler,
    valueInputBlurHandler: lastNameInputBlurHandler,
    resetValue: lastNameInputReset,
  } = useInput((val) => val.trim() !== "");
  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    valueHasError: enteredEmailIsInValid,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    resetValue: emailInputReset,
  } = useInput((val) => val.includes("@"));

  const {
    value: enteredMessage,
    valueIsValid: enteredMessageIsValid,
    valueHasError: enteredMessageIsInValid,
    valueInputChangeHandler: messageInputChangeHandler,
    valueInputBlurHandler: messageInputBlurHandler,
    resetValue: messageInputReset,
  } = useInput((val) => val.trim().length > 5);
  return (
    <form>
      <InputComponent
        type={"text"}
        id={"first_name"}
        label={"First name"}
        placeholder={"Albert"}
        value={enteredFirstName}
        onChange={firstNameInputChangeHandler}
        onBlur={firstNameInputBlurHandler}
        inputInvalid={enteredFirstNameIsInValid}
        errorText={"Enter a name"}
        className={"name"}
      />
      <InputComponent
        type={"text"}
        id={"last_name"}
        label={"Last name"}
        placeholder={"Grey"}
        value={enteredLastName}
        onChange={lastNameInputChangeHandler}
        onBlur={lastNameInputBlurHandler}
        inputInvalid={enteredLastNameIsInValid}
        errorText={"Enter a name"}
        className={"name"}
      />
      <InputComponent
        type={"email"}
        id={"email"}
        label={"Email"}
        placeholder={"favourejim56@gmail.com"}
        value={enteredEmail}
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        inputInvalid={enteredEmailIsInValid}
        errorText={"email is invalid"}
        className={"email"}
      />
      <div>
        <label>Message</label>
        <textarea
          id={"message"}
          value={enteredMessage}
          placeholder={
            "Send me a message and I'll reply you as soon as possible"
          }
          onChange={messageInputChangeHandler}
          onBlur={messageInputBlurHandler}
        ></textarea>
        {enteredMessageIsInValid && <p>Enter a message</p>}
      </div>
      <div>
        <label htmlFor={"agreement"}>
          You agree to providing your data to Ejim who may contact you.
        </label>
        <input type={"checkbox"} id={"agreement"} />
      </div>
      <button type="submit">Send message</button>
    </form>
  );
};

export default ContactForm;
