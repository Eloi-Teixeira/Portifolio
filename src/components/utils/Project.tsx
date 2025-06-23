import { useTranslation } from 'react-i18next';
import IconGitHub from '../../assets/icons/IconGitHub';
import { TitleDetail } from './Decorations';

interface IProject {
  nome: string;
  description: string;
  tags: string[];
  img: string;
  links: [string, string];
}

const Project = ({ nome, description, tags, img, links }: IProject) => {
  const { t } = useTranslation();
  return (
    <div className="project-box">
      <img src={img} alt="Imagem de demonstração do projeto" />
      <div>
        <h3>
          {nome}
          <TitleDetail />
        </h3>
        <p>{description}</p>
        <div className="project-box-tags">
          {tags.map((item) => {
            return (
              <span key={item} className="tag">
                {item}
              </span>
            );
          })}
        </div>
        <div className="link-container">
          <a href={links[0]} className="github-link" target="_blank">
            <IconGitHub />
          </a>
          <a href={links[1]} className="demo" target="_blank">
            {t('ProjectDemoBtn')}
            <span className="arrow"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
