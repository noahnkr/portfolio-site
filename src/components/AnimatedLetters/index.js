import './index.scss'

const AnimatedLetters = ({ text, index = 0, delayFactor = 0.05 }) => {
  const words = text.split(' ')
  let charIndex = index

  return (
    <span className="animated-letters-span">
      {words.map((word, wordIdx) => (
        <span key={`word-${wordIdx}`} className="animated-word">
          {word.split('').map((char, i) => {
            const delay = charIndex++ * delayFactor
            return (
              <span
                key={`${char}-${wordIdx}-${i}`}
                className="text-animate"
                style={{ animationDelay: `${delay}s` }}
              >
                {char}
              </span>
            )
          })}
          {/* Add space after each word */}
          <span className="word-space">&nbsp;</span>
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
