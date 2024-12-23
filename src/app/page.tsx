'use client'

import AnimatedSection from './components/AnimatedSection'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <AnimatedSection>
        <section className="relative h-[65vh] flex items-center overflow-hidden">
          {/* Background Image with Blur */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://storage.googleapis.com/msgsndr/4I1M5n89grUjOuxzR5Dx/media/676949ff0bcca01fca805822.jpeg"
              alt="Gym Background"
              fill
              className="object-cover filter blur-[4px]"
              priority
              quality={100}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full h-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
              <div className="grid md:grid-cols-2 gap-8 h-full">
                {/* Text Content */}
                <div className="text-left space-y-8 flex flex-col justify-center relative">
                  {/* Text Background Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent rounded-2xl backdrop-blur-sm -m-6 p-6"></div>
                  
                  {/* Text Content */}
                  <div className="relative z-10 space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                      Fitness at YOUR Pace
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-white/90 drop-shadow">
                      Empowering you to live a healthier, happier life—one workout at a time.
                    </p>
                    <div className="pt-4">
                      <a
                        href="/contact"
                        className="inline-block bg-accent text-primary font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 transform shadow-lg"
                      >
                        Change Your Health Today
                      </a>
                    </div>
                  </div>
                </div>

                {/* Image with Gradient Overlay */}
                <div className="hidden md:block relative h-full pt-4">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                  <Image
                    src="https://storage.googleapis.com/msgsndr/4I1M5n89grUjOuxzR5Dx/media/67694bec0bcca0dbcd805968.png"
                    alt="Shere - Personal Trainer"
                    fill
                    className="object-contain object-bottom drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Image Grid Section */}
      <AnimatedSection>
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">CHOOSE YOUR WHY</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <Image
                  src="https://storage.googleapis.com/msgsndr/4I1M5n89grUjOuxzR5Dx/media/676947e00bcca04f0380573f.png"
                  alt="Shere completing Ironman"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <div className="mt-4 text-center space-y-2">
                  <span className="text-secondary font-bold text-lg">Ironwoman</span>
                  <p className="text-primary font-bold">Conquer Cardio</p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://storage.googleapis.com/msgsndr/4I1M5n89grUjOuxzR5Dx/media/676947e02fc19531dc4bd86d.png"
                  alt="Shere setting deadlift record"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <div className="mt-4 text-center space-y-2">
                  <span className="text-secondary font-bold text-lg">State Record Holder in Deadlift</span>
                  <p className="text-primary font-bold">Strength is Never a Weakness</p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://storage.googleapis.com/msgsndr/4I1M5n89grUjOuxzR5Dx/media/676947e0469351262c5589de.png"
                  alt="Shere with family"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <div className="mt-4 text-center space-y-2">
                  <span className="text-secondary font-bold text-lg">Family First</span>
                  <p className="text-primary font-bold">Quality of Life</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Intro Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center md:justify-start" data-aos="fade-right" data-aos-duration="1000">
                <Image
                  src="https://storage.googleapis.com/msgsndr/4I1M5n89grUjOuxzR5Dx/media/676952afb2eae1c4d1dfc14d.png"
                  alt="Hershey Personal Training Logo"
                  width={400}
                  height={400}
                  className="hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="text-left space-y-8" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                  At <span className="font-bold text-accent">Hershey Personal Training</span>, we understand the transformative power of improving your fitness—whether you want to 
                  <span className="font-semibold text-accent"> keep up with your kids</span>, 
                  <span className="font-semibold text-accent"> conquer an Ironman triathlon</span>, or 
                  <span className="font-semibold text-accent"> deadlift a small car</span>.
                </p>
                <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                  With a proven track record spanning 
                  <span className="font-semibold text-accent"> endurance sports</span> and 
                  <span className="font-semibold text-accent"> powerlifting</span>, 
                  we'll meet you where you are and help you get where you want to go.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* What Makes Us Different Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">What Makes Us Different?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Proven Success",
                  description: "We've walked the walk—Shere's achievements in endurance races and powerlifting mean we understand all angles of fitness."
                },
                {
                  title: "Personalized Programs",
                  description: "We tailor workouts, nutrition guidance, and lifestyle advice to fit your current abilities and future goals."
                },
                {
                  title: "Supportive Environment",
                  description: "At Hershey Personal Training, you'll find a welcoming, motivating space where you feel comfortable—no matter your age or fitness level."
                },
                {
                  title: "Track Record",
                  description: "No gimmicks, no wild claims—just real people achieving real results through hard work and expert guidance."
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-background p-6 rounded-lg transform hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Philosophy Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "We Believe in Health & Happiness",
                  description: "Achieving optimal health is at the heart of a joyful, fulfilling life."
                },
                {
                  title: "We Believe in Effort",
                  description: "What you do today shapes your tomorrow—every rep, every step, every goal matters."
                },
                {
                  title: "We Believe in You",
                  description: "We're here to empower you, celebrate your wins, and support you through every challenge."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="text-center transform hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-primary text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Don't Let Your Physical Abilities Limit Your Life</h2>
              <p className="text-xl">
                Your goals—whether big or small—should never be held back by your fitness level. Hershey Personal Training gives you the tools, accountability, and coaching you need to push past limitations and achieve more than you ever thought possible.
              </p>
              <div className="pt-8">
                <h3 className="text-2xl font-bold mb-4">Ready to take the first step toward a fitter, healthier you?</h3>
                <p className="mb-8">Contact us today to schedule your complimentary consultation and let's start building your success story.</p>
                <a
                  href="/contact"
                  className="inline-block bg-accent text-primary font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 transform shadow-lg"
                >
                  Change Your Health Today
                </a>
              </div>
              <p className="text-lg mt-8">
                We'd love to learn about your goals—because when you win, we win. Let's build a healthier future together, one workout at a time.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
