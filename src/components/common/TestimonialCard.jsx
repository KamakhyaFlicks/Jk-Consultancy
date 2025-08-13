import { useState, useRef } from "react"
// import Image from "next/image"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"


export default function TestimonialCard({ testimonial }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Video Container */}
      <div className="relative aspect-video bg-gray-900">
        {/* Thumbnail Image (shown when video is not playing) */}
        {!isPlaying && (
          <div className="absolute inset-0 z-10">
            
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300"
                aria-label="Play video"
              >
                <Play className="h-8 w-8 text-blue-600 ml-1" />
              </button>
            </div>
          </div>
        )}

        {/* Video Element */}
        <video
          ref={videoRef}
          src={testimonial.videoUrl}
          className="w-full h-full object-cover"
          onEnded={() => setIsPlaying(false)}
          playsInline
        />

        {/* Video Controls (visible when playing) */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 flex justify-between items-center z-20">
            <button
              onClick={togglePlay}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>

            <button
              onClick={toggleMute}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg mb-1">{testimonial.name}</h3>
        <p className="text-sm text-gray-600 mb-3">
          {testimonial.program} • {testimonial.country}
        </p>
        <p className="text-gray-700 italic">"{testimonial.quote}"</p>
      </div>
    </div>
  )
}
