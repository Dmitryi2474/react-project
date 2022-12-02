import { useRef, useState } from 'react';
import classes from './Form.module.scss';

const Contact = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const contactData = {
    title: 'The Best Vape Experience Awaits! Get in Touch With Us Today',
  };
  const onChangeInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <section className={classes.Contact}>
      <div className={classes.Wrapper}>
        <h2 className={classes.Title}>{contactData.title}</h2>
        <form
          id="contact-form"
          className={classes.Form}
          action="#"
          method="post"
          noValidate
        >
          <div className={classes.Control}>
            <input
              ref={inputRef}
              value={value}
              onChange={onChangeInput}
              className={classes.Email}
              placeholder="Поиск по названию..."
            />
          </div>

          <div className={classes.Control}>
            <input
              type="email"
              className={classes.Email}
              placeholder="Email"
            ></input>
          </div>

          <div className={classes.Control}>
            <textarea
              className={classes.Message}
              cols="40"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>

          <div className={classes.Btn}>
            {/* <Button href="#" text="Hit us up" /> */}
          </div>
          <div className={classes.recaptcha}>
            <p>
              This site is protected by reCAPTCHA and the Google{' '}
              <a className={classes.link}>Privacy Policy</a> and{' '}
              <a className={classes.link}>Terms of Service</a> apply.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
