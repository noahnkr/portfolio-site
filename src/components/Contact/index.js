import './index.scss';
import { useState, useEffect, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

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
                <h1 className='animated-letters'>
                    <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} index={15} />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder="Email" required />
                        </li>
                        <li>
                            <input type="text" name='subject' placeholder="Subject" required />
                        </li>
                        <li>
                            <textarea name="message" placeholder="Message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="Send" />
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

export default Contact;