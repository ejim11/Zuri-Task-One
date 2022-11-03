import useInput from "../../hooks/user-input";
import InputComponent from "../InputComponent/InputComponent";
import { useRef, useState } from "react";
import classes from "./ContactForm.module.scss";

const ContactForm = () => {
  const checkBoxRef = useRef(null);
  const [errorCheckBox, setErrorCheckBox] = useState(false);

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

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!checkBoxRef.current.checked) {
      setErrorCheckBox(true);
    }

    if (
      enteredFirstNameIsValid &&
      enteredLastNameIsValid &&
      enteredEmailIsValid &&
      enteredMessageIsValid &&
      checkBoxRef.current.checked
    ) {
      // use form data
      const data = {
        firstName: enteredFirstName,
        lastName: enteredLastName,
        email: enteredEmail,
        message: enteredMessage,
      };
      console.log(data);
    }

    // reset input fields
    if (checkBoxRef.current.checked) {
      firstNameInputReset();
      lastNameInputReset();
      emailInputReset();
      messageInputReset();
    }
  };

  const removeErrorCheckBoxHandler = () => {
    setErrorCheckBox(false);
  };

  return (
    <form onSubmit={submitFormHandler} className={classes.form}>
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
      />
      <InputComponent
        type={"email"}
        id={"email"}
        label={"Email"}
        placeholder={"albertgrey55@gmail.com"}
        value={enteredEmail}
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        inputInvalid={enteredEmailIsInValid}
        errorText={"Email is invalid"}
        className={classes["email"]}
      />
      <div
        className={`${classes["text-area-container"]} ${
          enteredMessageIsInValid
            ? classes["invalid-input"]
            : classes["valid-input"]
        }`}
      >
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
      <div
        className={`${classes.checkbox} ${
          errorCheckBox ? classes["checkbox-error"] : classes["checkbox-valid"]
        }`}
      >
        <label htmlFor={"agreement"}>
          You agree to providing your data to Ejim who may contact you.
        </label>
        <input
          type={"checkbox"}
          id={"agreement"}
          ref={checkBoxRef}
          onClick={removeErrorCheckBoxHandler}
        />
      </div>
      <button type="submit" id={"btn__submit"} className={classes.btn}>
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
