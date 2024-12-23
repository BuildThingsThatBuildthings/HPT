export default function About() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Dedicated to helping you achieve your fitness goals through personalized training and expert guidance.
        </p>
      </section>

      {/* Main Content */}
      <section className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Our Philosophy</h2>
          <p className="text-gray-600">
            At Hershey Personal Training, we believe that fitness is not just about looking good – it's about feeling 
            strong, confident, and capable in your daily life. Our approach combines proven training methods with 
            personalized attention to help you achieve sustainable results.
          </p>
          <p className="text-gray-600">
            We understand that every person's fitness journey is unique. That's why we take the time to understand 
            your goals, lifestyle, and preferences to create a training program that works for you.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Our Expertise</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span>Certified Personal Trainer with 10+ years of experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span>Specialization in strength training and weight loss</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span>Nutrition coaching and meal planning guidance</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span>Injury prevention and rehabilitation experience</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white p-12 rounded-lg text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Transform Your Life?</h2>
        <p className="text-xl">Let's work together to achieve your fitness goals.</p>
        <div>
          <a
            href="/contact"
            className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  )
}
