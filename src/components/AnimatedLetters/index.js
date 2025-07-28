import './index.scss'

const AnimatedLetters = ({ strArray, index, delayFactor = 0.1 }) => {
  return (
    <span className="animated-letters-span">
      {strArray.map((char, i) => {
        const delay = (i + index) * delayFactor
        return (
          <span
            key={`${char}-${i}`}
            className="text-animate"
            style={{ animationDelay: `${delay}s` }}
          >
            {char}
          </span>
        )
      })}
    </span>
  )
}

export default AnimatedLetters
