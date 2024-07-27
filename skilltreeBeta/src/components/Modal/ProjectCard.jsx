//ProjectCard.jsx

import React from 'react';
import style from './ProjectCard.module.scss';

const ProjectCard = ({ project, handleClose }) => {
  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <button className={style.closeButton} onClick={handleClose}>X</button>
        <img src={project.image} alt={project.name} className={style.modalImage} />
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
