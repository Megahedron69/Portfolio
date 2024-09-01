import { useEffect, useState, type FC } from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronDown,
  mailOutline,
  phonePortraitOutline,
  calendarOutline,
  logoGooglePlaystore,
  locationOutline,
  logoGithub,
  logoLinkedin,
  mail,
} from "ionicons/icons";

import myAvatar from "../../assets/images/my-avatar.png";
const Sidebar: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {}, []);
  return (
    <aside
      className={`sidebar  
 ${isSidebarOpen ? "active" : ""}`}
      data-sidebar
    >
      <script src="../../Utils/sideBarBtn.ts" />
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={myAvatar} alt="Kartic Joshi" width={80} />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Kartic Joshi">
            Kartic Joshi
          </h1>
          <p className="title">Full stack developer </p>
        </div>
        <button
          className="info_more-btn"
          onClick={toggleSidebar}
          data-sidebar-btn
        >
          <span>Show Contacts</span>
          <IonIcon icon={chevronDown} />
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={mailOutline} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:karticjoshi68@gmail.com" className="contact-link">
                karticjoshi68@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={phonePortraitOutline} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+918826230733" className="contact-link">
                +918826230733
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={calendarOutline} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Age</p>
              <time dateTime="1982-06-23">23</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={locationOutline} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Delhi, India</address>
            </div>
          </li>
        </ul>
        <div className="separator" />
        <ul className="social-list">
          <li className="social-item">
            <a href="mailto:karticjoshi68@gmail.com" className="social-link">
              <IonIcon icon={mail} />
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/Megahedron69" className="social-link">
              <IonIcon icon={logoGithub} />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/kartic-joshi-a4558a137/"
              className="social-link"
            >
              <IonIcon icon={logoLinkedin} />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://play.google.com/store/apps/details?id=com.kartodevs.ecosorter
"
              className="social-link"
            >
              <IonIcon icon={logoGooglePlaystore} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
