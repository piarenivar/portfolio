import React, { useState } from "react";
import axios from 'axios';

export default function About() {
    const url = 'http://localhost:3000/success';
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [toast, setToast] = useState(!true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(url, { name: name, email: email, message: message });
            console.log(res.data);
        } catch (error) {
            console.log(error.response)
        }

        setName('');
        setEmail('');
        setMessage('');
        setToast(!toast);
    }

    const hideToast = () => {
        setToast(!toast);
    }

    return (
        <div id="about">
            <div className="about-left">
                <h2>About</h2>
                <p><strong className="hello">Hello!</strong> I'm Pablo, a self-taught Full-Stack web developer who enjoys creating visually appealing and user-friendly websites. I studied at the University of North Texas (UNT), and currently work as an Operations Manager. Initially, I decided to teach myself front-end and back-end development when I realized I wanted to create my own notes & productivity management web application custom to my needs. Unbeknownst to me,  such journey would come to uncover a hidden passion for the art & craft of web development.</p>
                <div>
                    <a href="https://github.com/piarenivar" target="blank" className="icon-link"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/pabloarenivar/" target="blank" className="icon-link"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div id="contact" className="about-right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required></input>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required></input>
                    <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required></textarea>
                    <button type="submit" className="submit">Send</button>
                </form>
                <span className={toast ? 'toast toast-active' : 'toast'} onClick={hideToast}>Thank you for reaching out! <i className="fa-solid fa-thumbs-up"></i></span>
            </div>
        </div>
    )
};

