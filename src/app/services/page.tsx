export default function Services() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive personal training programs designed to help you reach your fitness goals
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Personal Training */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">One-on-One Personal Training</h2>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Customized workout programs</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Form correction and technique improvement</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Progress tracking and adjustments</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Nutritional guidance</span>
            </li>
          </ul>
          <a
            href="/contact"
            className="inline-block bg-secondary text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Weight Loss Program */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">Weight Loss Program</h2>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Targeted fat loss workouts</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Meal planning and nutrition coaching</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Regular body composition analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Ongoing support and motivation</span>
            </li>
          </ul>
          <a
            href="/contact"
            className="inline-block bg-secondary text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Strength Training */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">Strength Training</h2>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Progressive overload programs</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Compound movement focus</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Proper form and technique training</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Strength goals achievement planning</span>
            </li>
          </ul>
          <a
            href="/contact"
            className="inline-block bg-secondary text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Sports Performance */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">Sports Performance</h2>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Sport-specific training programs</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Speed and agility development</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Power and explosiveness training</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Injury prevention techniques</span>
            </li>
          </ul>
          <a
            href="/contact"
            className="inline-block bg-secondary text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white p-12 rounded-lg text-center space-y-6">
        <h2 className="text-3xl font-bold">Find the Right Program for You</h2>
        <p className="text-xl">Schedule a free consultation to discuss your goals and create a personalized plan.</p>
        <div>
          <a
            href="/contact"
            className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
