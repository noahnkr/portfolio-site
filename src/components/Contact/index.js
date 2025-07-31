import './index.scss'
import { useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'

const Contact = () => {
  document.title = 'Noah Roberts | Contact'
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ur0j3l6',
        'template_1zozxzk',
        refForm.current,
        'C8dr_T63FJLFAqYRD'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className="animated-letters">
            <AnimatedLetters text="Contact" index={25} />
          </h1>
          <p>
            Thank you for visiting my portfolio! I'm thrilled to have the
            opportunity to share my passion for technology and showcase my
            projects. Whether you're a hiring manager, collaborator, or fellow
            developer please feel free to reach out using the contact form
            below.
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Contact
