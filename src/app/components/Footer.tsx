'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p className="text-sm">Phone: (555) 123-4567</p>
            <p className="text-sm">Email: info@hersheypersonaltraining.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Hours</h3>
            <p className="text-sm">Mon-Fri: 6:00 AM - 8:00 PM</p>
            <p className="text-sm">Sat: 8:00 AM - 2:00 PM</p>
            <p className="text-sm">Sun: Closed</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/services" className="block text-sm hover:text-accent transition-colors">Our Services</a>
              <a href="/about" className="block text-sm hover:text-accent transition-colors">About Us</a>
              <a href="/contact" className="block text-sm hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {currentYear} Hershey Personal Training. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
