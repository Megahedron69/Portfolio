import { type FC, useState, useMemo, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projectPallete } from "../../Utils/Constants";
import { IonIcon } from "@ionic/react";
import { arrowBackOutline, arrowForwardOutline } from "ionicons/icons";
import ShareButton from "./ShareButton";
import Modal from "./Modal";
import "../../assets/css/ProjectStyles.css";
import CarouselComponent from "./Carousel";

const ProjectLayout: FC = () => {
  const { projName } = useParams(); // Get the project name from the URL params
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => setModalOpen(true), []);
  const handleCloseModal = useCallback(() => setModalOpen(false), []);

  const project = useMemo(() => {
    return projectPallete.find((p) => p.url === `/Portfolio/${projName}`);
  }, [projName]);

  return (
    <div className="top-container">
      <section className="projects">
        {project && (
          <>
            <div
              className="background-image"
              style={{
                backgroundImage: `linear-gradient(to right,rgb(32,33,36) 0,rgba(0,0,0,0) 56%),linear-gradient(to top,rgb(32,33,36) 0,rgba(0,0,0,0) 56%),linear-gradient(to left,rgb(32,33,36) 0,rgba(0,0,0,0) 56%),url(${project.coverImg})`,
              }}
            >
              <div className="background-after"></div>
              <div
                className="backButton"
                onClick={() => {
                  navigate("/Portfolio");
                }}
              >
                <IonIcon icon={arrowBackOutline} />
              </div>
            </div>
            <div className="content-container">
              <div className="header-container">
                <div className="cover-image">
                  <motion.img
                    layoutId={`image-${project.name}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    src={project.logo}
                    alt={project.imgAlt}
                  />
                </div>
                <div className="app-info">
                  <h1>{project.name}</h1>
                  <div className="app-details"></div>
                  <p>{project.description}</p>
                  <div className="button-container">
                    <button className="get-button">
                      <a
                        style={{ all: "unset" }}
                        href={project.downloadURL}
                        target="_blank"
                      >
                        Download
                      </a>
                    </button>
                    <button className="git-button">
                      <a
                        style={{ all: "unset" }}
                        href={project.gitURL}
                        target="_blank"
                      >
                        Github
                      </a>
                    </button>
                    <ShareButton />
                  </div>
                </div>
              </div>
              <div className="image-gallery">
                <CarouselComponent
                  images={project.gallery}
                  isApp={!!project.category.includes("App")}
                />
              </div>
              <div className="features-container">
                <div
                  className="features-container-header"
                  onClick={handleOpenModal}
                >
                  <h2>About this project</h2>
                  <div className="more-icon">
                    <IonIcon icon={arrowForwardOutline} />
                  </div>
                  <div className="modal-container">
                    {isModalOpen && (
                      <Modal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        projLogo={project.logo}
                        projTitle={project.name}
                        feature={project.features}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default ProjectLayout;
