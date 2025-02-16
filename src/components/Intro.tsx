import React from 'react'
import IconGitHub from '../assets/icons/IconGitHub'
import IconDownload from '../assets/icons/IconDownload'
import ImgComputer from '../assets/imgs/computer.png'
// import 

const Intro = () => {
  return (
    <div className='max-container-2 intro-container'>
      <div className='intro-content'>
        <span>Elói Teixeira</span>
        <h1>Desenvolvedor <span>Full-Stack</span></h1>
        <div>
          <a href="#" className='github-link'>
            <IconGitHub />
          </a>
          <button className='download-cv'>
            Baixar CV
            <IconDownload />
          </button>
        </div>
      </div>
      <img src={ImgComputer} alt="Imagem de um programador" />
    </div>
  )
}

export default Intro
