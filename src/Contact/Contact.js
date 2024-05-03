import React from 'react';

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <p>Please feel free to reach out to me using the form below. Whether you're a recruiter, a potential collaborator, or just want to say hello, I'd love to hear from you!</p>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="6" placeholder="Your message" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="attachment">Attach File:</label>
                    <input type="file" id="attachment" name="attachment" accept="image/*, .pdf, .docx" />
                </div>
                <div className="checkbox-group">
                    <label>
                        <input type="checkbox" name="subscribe" /> Subscribe to Newsletter
                    </label>
                </div>
                <button className="button-retro" type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
