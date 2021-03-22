import styles from "./buttondown-form.module.css";

const ButtondownForm = () => (
  <form
    action="https://buttondown.email/api/emails/embed-subscribe/mknepprath"
    method="post"
    target="popupwindow"
    onSubmit={() =>
      window.open("https://buttondown.email/mknepprath", "popupwindow")
    }
    className="embeddable-buttondown-form"
  >
    <label htmlFor="bd-email">Enter your email </label>
    <input type="email" name="email" id="bd-email" className={styles.input} />
    <input type="hidden" value="1" name="embed" />
    <input type="submit" value="Subscribe" className={styles.button} />
    <p className={styles.attribution}>
      <a
        href="https://buttondown.email"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by Buttondown.
      </a>
    </p>
  </form>
);

export default ButtondownForm;
