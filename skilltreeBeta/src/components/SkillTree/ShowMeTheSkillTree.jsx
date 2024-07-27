//SkillTree component as the skeleton for different projects
import { useState } from 'react';
import style from './skillTree.module.scss';
import ProjectCard from '../Modal/ProjectCard';

const ShowMeTheSkillTree = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const renderProject = (project) => {
    return (
      <li key={project.id} className={style.projectItem} onClick={() => handleImageClick(project)}>
        <div>
        <strong>{project.name}</strong>

          <img src={project.image} alt={project.name} className={style.projectImage} />
        </div>
        {/* {project.children.length > 0 && (
          <ul>
            {project.children.map((child) => renderProject(child))}
          </ul>
        )} */}
      </li>
    );
  };

  return (
    <div className={style.projectTree}>
      <ul>
        {projects.map((project) => renderProject(project))}
      </ul>
      {selectedProject && (
        <ProjectCard
          project={selectedProject}
          handleClose={closeModal}
        />
      )}
    </div>
  );
};

export default ShowMeTheSkillTree;
