import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q1w59tm', 'template_g2no7yz', form.current, {
        publicKey: 'ZXR66beteMu3B0cEi',
      })
      .then(() => {
        setIsSent(true);
        setTimeout(() => setIsSent(false), 3000); // Reset message after 3s
      })
      .catch((error) => {
        console.error('FAILED...', error.text);
      });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-center min-h-screen px-6"
    >
      <motion.form 
        ref={form} 
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-neutral-900 p-8 rounded-2xl shadow-lg border border-neutral-800 text-white"
      >
        <h2 className="text-3xl font-semibold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <div className="mb-4">
          <label className="block text-sm text-neutral-400 mb-2">Name</label>
          <input 
            type="text" name="name" required
            className="w-full p-3 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-neutral-400 mb-2">Email</label>
          <input 
            type="email" name="user_email" required
            className="w-full p-3 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-neutral-400 mb-2">Message</label>
          <textarea 
            name="message" required
            className="w-full p-3 h-32 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
          />
        </div>

        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-lg text-lg font-medium tracking-wide bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-all duration-300"
        >
          Send Message
        </motion.button>

        {isSent && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-center text-green-400 text-sm"
          >
            ✅ Message Sent Successfully! Expect Reply Soon!
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;

