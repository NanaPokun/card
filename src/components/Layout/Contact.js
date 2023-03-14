import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted form:', { name, email, message });
        // Send form data using name, email, and message values here
        setSubmitted(true);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className={`relative top-40 p-4 bg-white rounded-lg shadow-md ${submitted ? 'mt-8' : ''}`}>
            <h2 className="text-xl font-bold mb-4 text-center m-4">Contact Us</h2>
            {submitted ? (
                <p className="text-lg text-center">Thank you for your message!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name-input">
                            Name:
                        </label>
                        <input
                            className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="name-input"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email-input">
                            Email:
                        </label>
                        <input
                            className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            id="email-input"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="message-input">
                            Message:
                        </label>
                        <textarea
                            className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="message-input"
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Enter your message"
                        />
                    </div>
                    <button className="bg-cyan-800 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Send Message</button>
                </form>
            )}
        </div>
    );
};

export default Contact;
