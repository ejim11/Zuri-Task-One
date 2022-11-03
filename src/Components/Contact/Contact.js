import classes from "./Contact.module.scss";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className={classes["contact-section"]}>
      <h2>Contact Me</h2>
      <p className={classes["intro-text"]}>
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <ContactForm />
    </section>
  );
};

export default Contact;
