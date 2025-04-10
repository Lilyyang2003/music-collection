"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { mockJournals } from "@/lib/mock-data"
import { ArrowLeft } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function JournalPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef<HTMLIFrameElement>(null)

  const journal = mockJournals.find((j) => j.id === id)

  if (!journal) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <main className="max-w-screen-lg mx-auto px-4 py-12 text-center">
          <h1 className="text-xl font-medium mb-4">Journal not found</h1>
          <Button onClick={() => router.push("/")} variant="outline" className="border-gray-200">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Button>
        </main>
      </div>
    )
  }

  const getVideoUrl = (journalId: string) => {
    switch (journalId) {
      case 'journal1':
        return 'https://www.youtube.com/embed/U9ulY90Wy8Y?autoplay=1';
      case 'journal2':
        return 'https://www.youtube.com/embed/Th2h6Na25kU?autoplay=1';
      case 'journal3':
        return 'https://www.youtube.com/embed/ekuwEd6iLU8?autoplay=1';
      case 'journal4':
        return 'https://www.youtube.com/embed/SAOrlhIswtY?autoplay=1';
      case 'journal5':
        return 'https://www.youtube.com/embed/HJNa9Ih3haA?autoplay=1'
      case 'journal6':
        return 'https://www.youtube.com/embed/FzVqyLzOl3U?autoplay=1'
      case 'journal7':
        return 'https://www.youtube.com/embed/kpNKXUaP-y4?autoplay=1'
      case 'journal8':
        return 'https://www.youtube.com/embed/QEgo-XVEK9E?autoplay=1'
      case 'journal9':
        return 'https://www.youtube.com/embed/I1NKEXwdF5c?autoplay=1'
      case 'journal10':
        return 'https://www.youtube.com/embed/T7pbOkcaVxE?autoplay=1'
      case 'journal11':
        return 'https://www.youtube.com/embed/SeQUjjtrCqw?autoplay=1'
      default:
        return null;
    }
  };

  const handleVinylClick = () => {
    if (id === 'journal1' || id === 'journal2' || id === 'journal3' || id === 'journal4' || 
        id === 'journal5' || id == 'journal6' || id == 'journal7' || id == 'journal8' || 
        id == 'journal9' || id == 'journal10' || id == 'journal11') {
      setIsPlaying(!isPlaying);
    }
  }

  const videoUrl = getVideoUrl(id);

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-screen-lg mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Button variant="ghost" onClick={() => router.back()} className="mb-6 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <div className="border border-gray-200 rounded-md overflow-hidden bg-white">
            <div className="p-6 flex flex-col items-center text-center">
              {/* Hidden audio player */}
              {videoUrl && isPlaying && (
                <iframe
                  ref={playerRef}
                  src={videoUrl}
                  allow="autoplay"
                  className="hidden"
                />
              )}
              
              {/* Vinyl Record */}
              <div 
                className={`relative mb-8 w-64 h-64 mx-auto ${videoUrl ? 'cursor-pointer transition-transform duration-300 hover:scale-105' : ''}`}
                onClick={handleVinylClick}
              >
                <Image
                  src={`/vinyl-images/vinyl-${parseInt(id.replace('journal', ''))}.jpg`}
                  alt="Vinyl record"
                  width={256}
                  height={256}
                  className={`rounded-full transition-transform duration-1000 ${isPlaying ? 'animate-spin' : ''}`}
                  style={{ animationDuration: '4s' }}
                />
              </div>

              <div className="text-center mb-6 max-w-lg mx-auto">
                <h1 className="text-2xl font-medium text-gray-900 mb-1">{journal.song.title}</h1>
                <p className="text-gray-600">{journal.song.artist}</p>
              </div>

              <div className="prose max-w-lg mx-auto">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">{journal.content}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
