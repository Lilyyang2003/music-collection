"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { SearchResults } from "@/components/search-results"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      setIsSearching(true)
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for a song to journal about..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 py-2 border-gray-200 rounded-md text-gray-900 placeholder:text-gray-400 focus-visible:ring-gray-300"
          />
        </div>
      </form>

      {isSearching && <SearchResults query={query} onClose={() => setIsSearching(false)} />}
    </div>
  )
}
