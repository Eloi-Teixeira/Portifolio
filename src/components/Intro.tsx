import IconGitHub from '../assets/icons/IconGitHub'
import IconDownload from '../assets/icons/IconDownload'
import ImgComputer from '../assets/imgs/computer.png'
import Cv from '../assets/cv/cv.pdf';

const Intro = () => {
  return (
    <div className='max-container-2 intro-container'>
      <div className='intro-content'>
        <span>Elói Teixeira</span>
        <h1>Desenvolvedor <span>Full-Stack</span></h1>
        <div>
          <a href="#" className='github-link' target='_blank'>
            <IconGitHub />
          </a>
          <a className='download-cv' href={Cv} download>
            Baixar CV
            <IconDownload />
          </a>
        </div>
      </div>
      <img src={ImgComputer} alt="Imagem de um programador" />
    </div>
  )
}

export default Intro
