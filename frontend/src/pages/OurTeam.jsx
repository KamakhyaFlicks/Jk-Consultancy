import { Users, Mail, Award, Globe, GraduationCap, Target, Heart, Star } from "lucide-react"
import CEO from "../assets/images/CEO.jpg";
const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Subhanshu Singh Rajput",
      position: "Founder & CEO",
      image: CEO,
      bio: "With 12+ years in international education, Subhanshu founded JK Consultancy to make global education accessible.",
      specialties: ["Strategic Planning", "University Partnerships", "Student Mentoring"],
      education: "MBBS from Armenia",
      experience: "12+ Years",
      countries: "25+ Countries",
      email: "rajesh@jkconsultancy.com",
    },
    {
      id: 2,
      name: "Ramesh Singh",
      position: "Head of Admissions",
      image: "",
      bio: "ramesh specializes in admission strategies and has helped over 1000 students secure placements in top universities.",
      specialties: ["Application Strategy", "Essay Writing", "Interview Prep"],
      education: "MS from Stanford University",
      experience: "8+ Years",
      countries: "20+ Countries",
      email: "priya@jkconsultancy.com",
    },
    {
      id: 3,
      name: "Dinesh Singh",
      position: "Visa Specialist",
      image: "",
      bio: "dinesh brings expertise in visa processing and immigration law, ensuring smooth transitions for our students.",
      specialties: ["Visa Processing", "Immigration Law", "Documentation"],
      education: "LLM in Immigration Law",
      experience: "10+ Years",
      countries: "30+ Countries",
      email: "david@jkconsultancy.com",
    },
  ]

  const teamStats = [
    { number: "45+", label: "Team Members", icon: Users },
    { number: "150+", label: "Years Combined Experience", icon: Award },
    { number: "30+", label: "Countries Covered", icon: Globe },
    { number: "5000+", label: "Students Guided", icon: GraduationCap },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Users size={48} className="mx-auto text-blue-600 mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Team</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate professionals dedicated to turning your study abroad dreams into reality
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto ">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Meet the experts who guide our mission to excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Award size={14} className="mr-2 text-blue-600" />
                      <span>{member.experience}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Globe size={14} className="mr-2 text-blue-600" />
                      <span>{member.countries}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <GraduationCap size={14} className="mr-2 text-blue-600" />
                      <span>{member.education}</span>
                    </div>
                    {/* <div className="flex items-center text-sm text-gray-500">
                      <Mail size={14} className="mr-2 text-blue-600" />
                      <span>{member.email}</span>
                    </div> */}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Statistics */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Numbers that reflect our commitment to student success</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
                  <stat.icon size={32} className="mx-auto mb-3 text-blue-200" />
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm md:text-base text-blue-100">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Are you passionate about helping students achieve their dreams? We're always looking for talented
            individuals to join our growing team.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <Target className="text-blue-600 mb-3 mx-auto" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Purpose-Driven Work</h3>
              <p className="text-gray-600 text-sm">Make a real impact on students' lives</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <Heart className="text-red-500 mb-3 mx-auto" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Supportive Culture</h3>
              <p className="text-gray-600 text-sm">Collaborative and inclusive environment</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <Star className="text-yellow-500 mb-3 mx-auto" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600 text-sm">Continuous learning and development</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              View Open Positions
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurTeam
