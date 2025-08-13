import { ChevronRight, Globe, Users, BookOpen, Target, Heart, Star } from "lucide-react"

const OurStory = () => {
  const milestones = [
    { year: "2015", event: "JK Consultancy Founded", students: "50+" },
    { year: "2017", event: "International Partnerships", students: "200+" },
    { year: "2019", event: "Digital Transformation", students: "500+" },
    { year: "2021", event: "Global Recognition", students: "1000+" },
    { year: "2023", event: "Excellence Awards", students: "2500+" },
    { year: "2025", event: "Expanding Horizons", students: "5000+" },
  ]

  const values = [
    { icon: Heart, title: "Integrity", desc: "Honest guidance in every interaction" },
    { icon: Target, title: "Excellence", desc: "Pursuing the highest standards" },
    { icon: Users, title: "Support", desc: "Comprehensive student assistance" },
    { icon: Globe, title: "Global Vision", desc: "Connecting dreams worldwide" },
  ]

  const achievements = [
    { number: "5000+", label: "Students Placed" },
    { number: "50+", label: "Partner Universities" },
    { number: "25+", label: "Countries" },
    { number: "98%", label: "Success Rate" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Story</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transforming dreams into global opportunities since 2015
              </p>
              <div className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-medium">JK Consultancy</div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipPJEbG12n5PRyWD2ObEuyBvT7OphopsIexzdqx1=s1360-w1360-h1020-rw"
                alt="JK Consultancy Office"
                className="w-full max-w-md h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Beginning */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Beginning</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2015 with a simple yet powerful vision: to bridge the gap between ambitious students and
                world-class international education opportunities. What started as a small consultancy has grown into a
                trusted partner for thousands of students worldwide.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our founder, driven by personal experience of studying abroad, understood the challenges students face
                and was determined to make the journey smoother for others.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <BookOpen size={48} className="mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">The Spark</h3>
              <p className="text-gray-600">
                "Every great journey begins with a single step. Ours began with the belief that quality education should
                be accessible to all."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Our Journey</h2>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="text-2xl font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{milestone.event}</h3>
                  </div>
                  <div className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full w-fit">
                    {milestone.students}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Target size={48} className="mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl leading-relaxed">
            To empower students with comprehensive guidance, personalized support, and unwavering commitment to help
            them achieve their international education dreams and build successful global careers.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Our Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Our Achievements</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">{achievement.number}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Users size={48} className="text-blue-600 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that every student is unique, with their own dreams, challenges, and potential. Our approach
                is deeply personal, understanding that behind every application is a human story waiting to unfold.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Star className="text-blue-600" size={20} />
                  <span className="text-gray-700">Student-centric approach in everything we do</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-blue-600" size={20} />
                  <span className="text-gray-700">Transparent and honest communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-blue-600" size={20} />
                  <span className="text-gray-700">Continuous innovation and improvement</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Promise</h3>
              <p className="text-gray-600 mb-6">
                We don't just process applications; we nurture dreams, guide journeys, and celebrate successes alongside
                our students.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <ChevronRight size={16} className="mr-2" />
                <span>Your success is our success</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Globe size={48} className="mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Looking Forward</h2>
          <p className="text-xl leading-relaxed mb-8">
            As we continue to grow and evolve, our commitment remains unchanged: to be the bridge between dreams and
            reality, between potential and achievement, between students and their global futures.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-10 px-6 py-3 rounded-lg">
            <span className="font-medium">The journey continues...</span>
            <ChevronRight size={20} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurStory
