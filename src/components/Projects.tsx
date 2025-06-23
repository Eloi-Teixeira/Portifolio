import ImgProjectCalc from '../assets/imgs/projects/calc.png';
// import ImgProjectTwo from '../assets/imgs/project-two.png';
import Project from './utils/Project';
import { IconsContainer, TitleWithDetails } from './utils/Decorations';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className="max-container project-container" id="projects">
      <TitleWithDetails title={t('ProjectsTitle')} />
      <IconsContainer />
      <div className="project-content">
        <Project
          nome={t('ProjectCalcTitle')}
          description={t('ProjectCalcDescription')}
          tags={['React', 'JavaScript', 'HTML', 'CSS']}
          img={ImgProjectCalc}
          links={[
            'https://github.com/Eloi-Teixeira/Calculadora',
            'https://calculadoraonlinematematica.netlify.app/',
          ]}
        />
        <Project
          nome={t('ProjectCalcTitle')}
          description={t('ProjectCalcDescription')}
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
