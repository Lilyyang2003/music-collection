"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SongCard } from "@/components/song-card"
import { mockSearchResults } from "@/lib/mock-data"

interface SearchResultsProps {
  query: string
  onClose: () => void
}

export function SearchResults({ query, onClose }: SearchResultsProps) {
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setResults(mockSearchResults)
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [query])

  return (
    <div className="absolute z-10 mt-2 w-full bg-white border border-gray-100 rounded-md shadow-sm">
      <div className="p-3 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-sm font-medium">Results for "{query}"</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6">
          <X className="h-3 w-3" />
        </Button>
      </div>

      <div className="p-2 max-h-[60vh] overflow-y-auto">
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin h-5 w-5 border-2 border-gray-400 border-t-transparent rounded-full"></div>
          </div>
        ) : results.length > 0 ? (
          <div className="grid gap-2">
            {results.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        ) : (
          <p className="text-center py-6 text-gray-500 text-sm">No results found</p>
        )}
      </div>
    </div>
  )
}
