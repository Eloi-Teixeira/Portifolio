import ImgGrafics from '../assets/imgs/grafics.png';
import IconDownload from '../assets/icons/IconDownload';
import Cv from '../assets/cv/cv.pdf';
import { TitleWithDetails } from './utils/Decorations';
import { Trans, useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="about-container" id="about">
      <div className="max-container">
        <img src={ImgGrafics} alt="" />
        <div>
          <TitleWithDetails title={t('AboutTitle')} />
          <p>
            <Trans i18nKey="AboutDescription" components={{ span: <span /> }} />
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
            {t('DownloadBtn')} <IconDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
