import './index.scss'
import Logo from '../../assets/images/logo-n.png'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'

const Home = () => {
  document.title = 'Noah Roberts | Portfolio'

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="animated-letters">
            <AnimatedLetters strArray={'Hi,'.split('')} index={10} />
            <br />
            <AnimatedLetters strArray={"I'm".split('')} index={12} />
            <img src={Logo} alt="N" />
            <AnimatedLetters strArray={'oah.'.split('')} index={15} />
            <br />
            <AnimatedLetters strArray={'Software '.split('')} index={20} />
            <AnimatedLetters strArray={'Developer.'.split('')} index={25} />
          </h1>
          <h2>B.S Computer Science | Iowa State University</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Home
