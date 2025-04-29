import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-orange-500">Contact Us</h1>

      <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl">
        We’d love to hear from you! Whether you have questions about our products, need support, or want to provide feedback, don’t hesitate to get in touch. Our team is here to help make your experience as smooth and enjoyable as possible. 🤝
      </p>

      <div className="flex flex-col items-center mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">Reach Out to Us</h2>
        
        {/* Email section */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold">Email Us</h3>
          <p className="text-gray-600">Have a question? Send us an email, and we’ll get back to you as soon as possible.</p>
          <a href="mailto:support@thename.com" className="text-orange-500 font-semibold hover:underline">support@thename.com</a>
        </div>

        {/* Phone section */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold">Call Us</h3>
          <p className="text-gray-600">We’re happy to assist you by phone! Feel free to call us during business hours.</p>
          <p className="text-orange-500 font-semibold">(123) 456-7890</p>
        </div>

        {/* Social Media section */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold">Follow Us</h3>
          <p className="text-gray-600">Stay updated and connect with us on our social media platforms!</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://www.instagram.com" className="text-orange-500 hover:text-orange-600"><i className="fab fa-instagram fa-2x"></i></a>
            <a href="https://www.facebook.com" className="text-orange-500 hover:text-orange-600"><i className="fab fa-facebook fa-2x"></i></a>
            <a href="https://www.twitter.com" className="text-orange-500 hover:text-orange-600"><i className="fab fa-twitter fa-2x"></i></a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-orange-600">Get In Touch</h2>
        <form>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full p-3 border-2 border-gray-300 rounded-md mt-2"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full p-3 border-2 border-gray-300 rounded-md mt-2"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              className="w-full p-3 border-2 border-gray-300 rounded-md mt-2"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="bg-orange-500 text-white font-bold py-2 px-6 rounded-md hover:bg-orange-600 transition-all">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
