import { useState, type FC, useCallback } from "react";
import { IonIcon } from "@ionic/react";
import { chevronDown } from "ionicons/icons";
import myAvatar from "../../assets/images/my-avatar.png";
import { sideBar2, sidebarTopItems } from "../../Utils/Constants";

const Sidebar: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prevState) => !prevState);
  }, []);

  return (
    <aside className={`sidebar ${isSidebarOpen ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={myAvatar} alt="Kartic Joshi" width={80} />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Kartic Joshi">
            Kartic Joshi
          </h1>
          <p className="title">Full stack developer</p>
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
          {sidebarTopItems.map(({ icon, title, link, text }, index) => (
            <li className="contact-item" key={index}>
              <div className="icon-box">
                <IonIcon icon={icon} />
              </div>
              <div className="contact-info">
                <p className="contact-title">{title}</p>
                {link ? (
                  <a href={link} className="contact-link">
                    {text}
                  </a>
                ) : (
                  <address>{text}</address>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="separator" />
        <ul className="social-list">
          {sideBar2.map(({ link, icon }, index) => (
            <li className="social-item" key={index}>
              <a
                href={link}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer" // Added rel attribute for security
              >
                <IonIcon icon={icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
