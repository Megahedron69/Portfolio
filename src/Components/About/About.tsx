import type { FC } from "react";
import Mosaic from "./Mosaic";
import { serviceObj } from "../../Utils/Constants";

const About: FC = () => {
  return (
    <article className="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          I'm Kartc from Delhi, India, proficient in Javascript and its
          technologies and frameworks like nodejs react and react native
          expanding my expertise in both web and app development along with
          multiple database
        </p>
        <p>
          My aim is to build products that are functional and user-friendly but
          at the same time attractive. Moreover, I add personal touch to my
          projects and make sure that is eye-catching and easy to use. My aim is
          to bring across my message and identity in the most creative way.
        </p>
      </section>
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          {serviceObj.map((item, index) => {
            return (
              <li key={index} className="service-item">
                <div className="service-icon-box">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={40}
                    loading="eager"
                  />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">{item.title}</h4>
                  <p className="service-item-text">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <h3 className="h3 testimonials-title">My Skillset</h3>
      <section className="skillMosaic">
        <Mosaic />
      </section>
    </article>
  );
};

export default About;
