import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import '../About/index.scss'
import './index.scss'
import {
  faJava,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  
} from '@fortawesome/free-brands-svg-icons'
import {
  faLinkedin,
  faGithub,
 
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const[cube,setCube] = useState('none');

  const nameArray = ['','T','a','m','i','l',' ','b','h','a','r','a','t','h','i'];
   const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
 
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
       setCube('block')
      
    }, 3000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <span className={`${letterClass} _13`}>👋</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'m </span>
           <br className='break'/>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer | React</h2>
          <a className="flat-button" href='https://drive.google.com/file/d/19qFK5q71duePTIMxVHhR7QwrrH1tHMNZ/view?usp=share_link' target='_blank'>
             My resume
          </a>
        </div>
        
        <ul className='mobile-link'>
        <li>
          <a
            href="https://www.linkedin.com/in/tamil-code/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/tamil-code"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
    
      </ul>
      </div>
      <div className="stage-cube-cont cube" style={{display:cube}}>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
