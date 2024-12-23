'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-12">
        {/* Hero Section */}
        <section className="text-center space-y-4 mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Contact Us</h1>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your fitness journey? Get in touch with us today.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="Tell us about your fitness goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2">
            <div className="bg-primary text-white p-6 md:p-8 rounded-lg space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Contact Information</h3>
                <div className="space-y-2 text-sm md:text-base">
                  <p>Email: info@hersheypersonaltraining.com</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm md:text-base">
                  <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                  <p>Saturday: 8:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Location</h3>
                <p className="text-sm md:text-base">
                  123 Fitness Street<br />
                  Hershey, PA 17033
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
