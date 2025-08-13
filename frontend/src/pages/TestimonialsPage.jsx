"use client"

import { useState } from "react"
import { Play, ExternalLink, X } from "lucide-react"

// Video Modal Component
const VideoModal = ({ isOpen, onClose, videoId, title }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

// Clean video thumbnail component
const VideoThumbnail = ({ videoId, title, onClick }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer bg-white">
      <div className="relative aspect-video" onClick={onClick}>
        <img
          src={thumbnailUrl || "/placeholder.svg?height=180&width=320&query=video thumbnail"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Clean overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
          {/* Simple play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:w-18 group-hover:h-18 group-hover:bg-white">
              <Play className="w-6 h-6 text-blue-600 fill-current ml-0.5 transition-all duration-300 group-hover:w-7 group-hover:h-7" />
            </div>
          </div>
        </div>

        {/* Clean bottom label */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex items-center text-white">
            <ExternalLink className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">{title}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const TestimonialsPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 8 video testimonials
  const testimonials = [
    { id: 1, videoId: "jBLWN1gWVhA", title: "Engineering Success Story" },
    { id: 2, videoId: "oCMbFTU2OTQ", title: "Medical School Journey" },
    { id: 3, videoId: "mbSX4W07oGY", title: "Business Program Experience" },
    { id: 4, videoId: "zbg7r5ThdUg", title: "Arts & Humanities Path" },
    { id: 5, videoId: "AjAuGF5llms", title: "Science Research Journey" },
    { id: 6, videoId: "b8eoIG8zl_U", title: "Masters Program Success" },
    { id: 7, videoId: "sIWX58SiNYU", title: "Study Abroad Experience" },
    { id: 8, videoId: "beaRAmKejbU", title: "Career Transformation" },
  ]

  const openModal = (testimonial) => {
    setSelectedVideo(testimonial)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Clean header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Student Success Stories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear directly from our students about their transformative educational journeys and career achievements.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Responsive video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="transform transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <VideoThumbnail
                videoId={testimonial.videoId}
                title={testimonial.title}
                onClick={() => openModal(testimonial)}
              />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of successful students who have transformed their careers through our programs.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoId={selectedVideo?.videoId}
        title={selectedVideo?.title}
      />

      {/* Simple fade-in animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default TestimonialsPage
