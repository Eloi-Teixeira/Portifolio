import React from 'react';
import IconReact from '../assets/icons/IconReact';
import IconTypeScript from '../assets/icons/IconTypeScript';
import IconJavaScript from '../assets/icons/IconJavaScript';
import IconCSS from '../assets/icons/IconCSS';
import IconExpress from '../assets/icons/IconExpress';
import IconTailwind from '../assets/icons/IconTailwind';
import IconMongoDB from '../assets/icons/IconMongoDB';
import IconNode from '../assets/icons/IconNode';
import IconGitHub from '../assets/icons/IconGitHub';
import ImgComputer from '../assets/imgs/computer.png';
import Project from './Project';

const Projects = () => {
  return (
    <section className="max-container project-container" id="projects">
      <h2>
        Projetos
        <div className="title-details">
          <span className="long-bar"></span>
          <div>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
        </div>
      </h2>
      <div className="icon-container">
        <IconReact />
        <IconTypeScript />
        <IconJavaScript />
        <IconCSS />
        <IconExpress />
        <IconTailwind />
        <IconMongoDB />
        <IconNode />
      </div>
      <div className="project-content">
        <Project
          nome="Calculadora Online"
          description="Criei um site em React e JavaScript para ajudar alunos do ensino
              médio a resolver cálculos matemáticos de forma interativa.
              Inspirado na dificuldade da minha irmã, o site contém cerca de 30
              fórmulas, permitindo calcular qualquer variável dentro delas.
              Organizei tudo de forma intuitiva, tornando o aprendizado mais
              prático e dinâmico."
          tags={['React', 'JavaScript', 'HTML', 'CSS']}
          img={ImgComputer}
          links={[
            'https://github.com/Eloi-Teixeira/Calculadora?tab=readme-ov-file',
            'https://calculadoraonlinematematica.netlify.app/',
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
