const courses = [
  {
    id: 1,
    title: "Medical",
    description: "Comprehensive medical programs including medicine, nursing, pharmacy, and healthcare management.",
    icon: "🏥",
    color: "bg-red-50 border-red-200 hover:bg-red-100",
  },
  {
    id: 2,
    title: "Engineering",
    description:
      "Cutting-edge engineering disciplines covering mechanical, electrical, civil, and computer engineering.",
    icon: "⚙️",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
  },
  {
    id: 3,
    title: "Business",
    description: "Strategic business programs including MBA, finance, marketing, and entrepreneurship.",
    icon: "💼",
    color: "bg-green-50 border-green-200 hover:bg-green-100",
  },
  {
    id: 4,
    title: "Arts and Humanities",
    description: "Creative and cultural studies encompassing literature, history, philosophy, and fine arts.",
    icon: "🎨",
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
  },
  {
    id: 5,
    title: "Science",
    description: "Advanced scientific research programs in physics, chemistry, biology, and environmental science.",
    icon: "🔬",
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
  },
  {
    id: 6,
    title: "Masters",
    description: "Specialized master's degree programs across all disciplines for advanced professional development.",
    icon: "🎓",
    color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100",
  },
]

export default function CoursesSection() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover world-class education across diverse disciplines. Choose from our comprehensive range of programs
            designed to shape your future.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <a href={`/courses/${course.title.toLowerCase()}`} className="no-underline" key={course.id}>
            <div
              key={course.id}
              className={`rounded-lg border-2 p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${course.color}`}
            >
              <div className="text-center pb-4">
                <div className="text-4xl mb-3">{course.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
              </div>
              <div>
                <p className="text-center text-gray-600 leading-relaxed">{course.description}</p>
              </div>
            </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-6">
            Join thousands of students who have transformed their careers with our programs.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Explore Programs
          </button>
        </div>
      </div>
    </div>
  )
}
