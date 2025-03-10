import React from 'react';
import IconGitHub from '../assets/icons/IconGitHub';

interface Project {
  nome: string;
  description: string;
  tags: string[];
  img: string;
  links: [string, string]
}

const Project = ({ nome, description, tags, img, links }: Project) => {
  return (
    <div className="project-box">
      <img src={img} alt="imagem do projeto" />
      <div>
        <h3>
          {nome}
          <div className="title-details">
            <span className="long-bar"></span>
            <div>
              <span className="circle"></span>
              <span className="circle"></span>
              <span className="circle"></span>
            </div>
          </div>
        </h3>
        <p>{description}</p>
        <div className="project-box-tags">
          {tags.map((item) => {
            return <span key={item} className="tag">{item}</span>;
          })}
        </div>
        <div>
          <div className="link-container">
            <a href={links[0]} className="github-link" target='_blank'>
              <IconGitHub />
            </a>
            <a href={links[1]} className="demo" target="_blank">
              Ver Projeto
              <span className="arrow"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
