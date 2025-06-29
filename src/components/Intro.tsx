import IconGitHub from '../assets/icons/IconGitHub';
import IconDownload from '../assets/icons/IconDownload';
import ImgComputer from '../assets/imgs/computer.png';
import Cv from '../assets/cv/cv.pdf';
import { Trans, useTranslation } from 'react-i18next';

const Intro = () => {
  const { t } = useTranslation();
  return (
    <section className="max-container-2 intro-container">
      <div className="intro-content">
        <span>Elói Teixeira</span>
        <h1>
          <Trans i18nKey="IntroTitle" components={{ span: <span /> }} />
        </h1>
        <div>
          <a href="#" className="github-link" target="_blank">
            <IconGitHub />
          </a>
          <a className="download-cv" href={Cv} download>
            {t('DownloadBtn')}
            <IconDownload />
          </a>
        </div>
      </div>
      <img src={ImgComputer} alt="Imagem de um programador" />
    </section>
  );
};

export default Intro;
