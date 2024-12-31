"use client"
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send an email, save to DB)
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-center text-foreground mb-10">
        Contact Us
      </h1>

      {/* Introduction */}
      <section className="text-center mb-8">
        <p className="text-lg text-foreground max-w-3xl mx-auto">
          Have any questions or feedback? We’d love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto bg-background p-8 rounded-lg shadow-xl">
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Thank You!</h2>
            <p className="text-lg text-foreground">
              We’ve received your message and will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-background text-foreground border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-background text-foreground border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-lg text-foreground mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full p-4 bg-background text-foreground border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-primary-dark transition"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </section>


    </div>
  );
}
