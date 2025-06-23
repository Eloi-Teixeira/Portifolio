import ImgGrafics from '../assets/imgs/grafics.png';
import IconDownload from '../assets/icons/IconDownload';
import Cv from '../assets/cv/cv.pdf';
import { TitleWithDetails } from './utils/Decorations';
import { Trans, useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const items = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'Express.js',
    'Next.js',
    'Tailwind CSS',
  ];
  return (
    <section className="about-container" id="about">
      <div className="max-container">
        <img src={ImgGrafics} alt="Programming" />
        <div>
          <TitleWithDetails title={t('AboutTitle')} />
          <p>
            <Trans i18nKey="AboutDescription" components={{ span: <span /> }} />
          </p>
          <div className="about-tags-container">
            <div className="scroll-track">
              {[...items, ...items].map((item, i) => (
                <span key={i} className="about-tag" title={item}>
                  {item}
                </span>
              ))}
            </div>
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
