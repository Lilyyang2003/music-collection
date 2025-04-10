"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { mockSearchResults } from "@/lib/mock-data"
import { ArrowLeft } from "lucide-react"

export default function NewJournalPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const songId = searchParams.get("songId")

  const song = songId ? mockSearchResults.find((s) => s.id === songId) : null

  const [content, setContent] = useState("")
  const [mood, setMood] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would save the journal entry here
    console.log({ songId, content, mood })
    router.push("/profile")
  }

  if (!song) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />
        <main className="max-w-screen-lg mx-auto px-4 py-12 text-center">
          <h1 className="text-xl font-medium mb-4">Song not found</h1>
          <Button onClick={() => router.push("/")} variant="outline" className="border-gray-200">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Button>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen text-white">
      <Navigation />

      <main className="max-w-screen-lg mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Button variant="ghost" onClick={() => router.back()} className="mb-6 text-gray-400 hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <div className="border border-gray-800 rounded-md p-6 bg-gray-900">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded overflow-hidden mr-4">
                <Image
                  src={song.albumArt || "/placeholder.svg"}
                  alt={song.title}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-lg font-medium text-white">{song.title}</h1>
                <p className="text-gray-400 text-sm">{song.artist}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Your thoughts
                </label>
                <Textarea
                  id="content"
                  placeholder="Write your thoughts about this song..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[200px] border-gray-200 text-gray-900 placeholder:text-gray-400 focus-visible:ring-gray-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="mood" className="block text-sm font-medium text-gray-700 mb-2">
                  Mood
                </label>
                <Input
                  id="mood"
                  placeholder="How does this song make you feel? (e.g., Energetic, Melancholic, Inspired)"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  className="border-gray-200 text-gray-900 placeholder:text-gray-400 focus-visible:ring-gray-300"
                  required
                />
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
                  Save Journal
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
