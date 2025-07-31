import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
const NotFound = () => {
  document.title = '404 - Page Not Found'
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="animated-letters">
            <AnimatedLetters text="Sorry!" index={10} delayFactor={0.07} />
            <AnimatedLetters
              text="This post doesn't exist."
              index={20}
              delayFactor={0.07}
            />
            <AnimatedLetters text="(Yet)" index={50} delayFactor={0.07} />
          </h1>
          <br />
          <Link to="/blog" className="flat-button">
            Back to Blog
          </Link>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default NotFound
