export default function Testimonials() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Client Success Stories</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Read about the transformative experiences of our clients and their fitness journeys
        </p>
      </section>

      {/* Testimonials Grid */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <p className="text-gray-600 italic mb-6">
                "Working with Hershey Personal Training has been life-changing. I've lost 30 pounds and gained so much 
                confidence. The personalized approach and constant support made all the difference in my fitness journey."
              </p>
              <div className="flex items-center">
                <div>
                  <h3 className="font-bold text-primary">Sarah Johnson</h3>
                  <p className="text-gray-500">Weight Loss Program Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <p className="text-gray-600 italic mb-6">
                "The strength training program helped me achieve goals I never thought possible. My trainer's expertise 
                and encouragement pushed me to new levels of fitness and performance."
              </p>
              <div className="flex items-center">
                <div>
                  <h3 className="font-bold text-primary">Mike Thompson</h3>
                  <p className="text-gray-500">Strength Training Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <p className="text-gray-600 italic mb-6">
                "The sports performance program took my game to the next level. The specialized training improved my 
                speed, agility, and overall performance on the field."
              </p>
              <div className="flex items-center">
                <div>
                  <h3 className="font-bold text-primary">David Martinez</h3>
                  <p className="text-gray-500">Sports Performance Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <p className="text-gray-600 italic mb-6">
                "The nutrition guidance and workout plans were exactly what I needed. I've not only reached my fitness 
                goals but learned how to maintain a healthy lifestyle long-term."
              </p>
              <div className="flex items-center">
                <div>
                  <h3 className="font-bold text-primary">Emily Chen</h3>
                  <p className="text-gray-500">Personal Training Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white p-12 rounded-lg text-center space-y-6">
        <h2 className="text-3xl font-bold">Join Our Success Stories</h2>
        <p className="text-xl">Start your transformation journey today with a free consultation.</p>
        <div>
          <a
            href="/contact"
            className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Begin Your Journey
          </a>
        </div>
      </section>
    </div>
  )
}
