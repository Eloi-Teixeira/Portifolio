import ImgProjectCalc from '../assets/imgs/projects/calc.png';
// import ImgProjectTwo from '../assets/imgs/project-two.png';
import Project from './Project';
import { IconsContainer, TitleDetail } from './decorations/Decorations';

const Projects = () => {
  return (
    <section className="max-container project-container" id="projects">
      <h2>
        Projetos
        <TitleDetail />
      </h2>
      <IconsContainer />
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
          img={ImgProjectCalc}
          links={[
            'https://github.com/Eloi-Teixeira/Calculadora',
            'https://calculadoraonlinematematica.netlify.app/',
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
