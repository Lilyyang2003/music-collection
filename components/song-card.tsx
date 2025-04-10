"use client"

import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SongCardProps {
  song: {
    id: string
    title: string
    artist: string
    albumArt: string
  }
  showJournalButton?: boolean
}

export function SongCard({ song, showJournalButton = true }: SongCardProps) {
  return (
    <div className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors">
      <div className="relative h-10 w-10 mr-3 rounded overflow-hidden">
        <Image
          src={song.albumArt || "/placeholder.svg"}
          alt={`${song.title} album art`}
          width={40}
          height={40}
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm text-gray-900 truncate">{song.title}</h4>
        <p className="text-xs text-gray-500 truncate">{song.artist}</p>
      </div>

      {showJournalButton && (
        <Link href={`/journal/new?songId=${song.id}`}>
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 text-xs">
            <Plus className="h-3 w-3 mr-1" />
            Journal
          </Button>
        </Link>
      )}
    </div>
  )
}
