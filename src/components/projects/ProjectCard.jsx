import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import { useState } from "react";
import closeModal from "../images/close.svg";

const ProjectCard = ({ technologies, title, image, color, id, github, deployed, description, page, member, share, info }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  Modal.setAppElement("#root");

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <motion.div ref={ref} className="col-sm-12 col-lg-6" variants={variants} initial="hidden" animate={inView ? "visible" : "hidden"} transition={{ duration: 0.4, ease: "easeInOut" }}>
      <div style={{ backgroundColor: color }} className="projectCard d-flex align-items-center justify-content-center p-5" onClick={handleOpenModal}>
        <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
          <p className="tech">
            <em>{technologies}</em>
          </p>
          <h3 className="projectTitle">{title}</h3>
          <span className="viewWork">View Work &#8594;</span>
          <span className="viewWork">{info}</span>
        </div>
        <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
          <img src={image} alt="Laptop displaying the application" />
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            backgroundColor: "#101010",
            color: "#9f9f9f",
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            lineHeight: "1.5rem",
            wordBreak: "keep-all",
            width: "400px",
            textAlign: "center",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: "999",
          },
        }}
      >
        <img src={closeModal} className="closeMenu closeModal" onClick={handleCloseModal} alt="Close"></img>
        <h3 className="modalTitle">{title}</h3>
        <p className="projectDescription">{member}</p>
        <p>본인기여도</p>
        <p className="projectDescription">{share}</p>
        <p>기술설명</p>
        <p className="projectDescription">{description}</p>
        <p>담당페이지</p>
        <p className="projectPage">{page}</p>
        <button className="btn" onClick={() => (window.location.href = github)}>
          GitHub Repo
        </button>
        <button className="btn" onClick={() => (window.location.href = deployed)}>
          Live Link
        </button>
      </Modal>
    </motion.div>
  );
};

export default ProjectCard;
