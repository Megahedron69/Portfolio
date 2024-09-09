import { type FC } from "react";
import { IonIcon } from "@ionic/react";
import { paperPlane } from "ionicons/icons";
import hireMeLogo from "../../assets/images/bmc-logo.svg";
import { motion } from "framer-motion";
const Contact: FC = () => {
  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 40, delay: 0.2, damping: 20 }}
      >
        <section className="mapbox">
          <div>
            <h1>Lets Work</h1>
            <span>Together,</span>
          </div>
          <div>
            <p>
              Collaborating with you to bring your ideas to life is my passion.
              Whether it's crafting innovative solutions or enhancing existing
              ones, I am committed to delivering high-quality results tailored
              to your needs. Let's join forces and create something
              extraordinary together.
            </p>
          </div>
          <div>
            <motion.button
              whileHover={{
                scale: 1.05,
                background: "linear-gradient(45deg, #232526, #636363)",
                transition: { duration: 0.3 },
              }}
              onClick={() =>
                (window.location.href = "mailto:karticjoshi68@gmail.com")
              }
            >
              <IonIcon src={hireMeLogo} />
              <span>Hire Me!</span>
            </motion.button>
          </div>
        </section>
      </motion.div>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form
          action="https://formspree.io/f/mvgpypbj"
          method="POST"
          className="form"
          data-form=""
        >
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required={true}
              data-form-input=""
              pattern="^[a-zA-Z\s]{3,}$"
              title="Name should be at least 3 characters long and only contain letters."
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required={true}
              data-form-input=""
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Please enter a valid email address."
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required={true}
            data-form-input=""
            title="Message should be at least 10 characters long."
          />
          <button
            className="form-btn"
            type="submit"
            disabled={false}
            data-form-btn=""
          >
            <IonIcon icon={paperPlane} />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
