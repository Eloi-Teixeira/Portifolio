import ImgGrafics from '../assets/imgs/grafics.png';
import IconDownload from '../assets/icons/IconDownload';
import Cv from '../assets/cv/cv.pdf';
import { TitleDetail } from './decorations/Decorations';

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="max-container">
        <img src={ImgGrafics} alt="" />
        <div>
          <h2>
            Sobre Mim
            <TitleDetail />
          </h2>
          <p>
            Olá! Me chamo Elói, sou desenvolvedor Full-Stack com foco em{' '}
            <span>React</span> e <span>TypeScript</span>, buscando primeira
            oportunidade no mercado. Possuo sólida base em desenvolvimento web
            moderno e experiência com projetos práticos. Comprometido com
            aprendizado contínuo e desenvolvimento de código limpo e eficiente.
          </p>
          <div className="about-tags">
            <span className="about-tag">React</span>
            <span className="about-tag">TypeScript</span>
            <span className="about-tag">NodeJS</span>
            <span className="about-tag">JavaScript</span>
            <span className="about-tag">Express</span>
            <span className="about-tag">MongoDB</span>
            <span className="about-tag">Tailwind</span>
            <span className="about-tag">CSS</span>
            <span className="about-tag">HTML</span>
          </div>
          <a className="download-cv" href={Cv} download>
            Baixar Curriculo <IconDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
