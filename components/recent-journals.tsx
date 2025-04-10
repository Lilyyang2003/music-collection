import Image from "next/image"
import Link from "next/link"
import { mockJournals } from "@/lib/mock-data"

export function RecentJournals() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-16 gap-y-20">
      {mockJournals.map((journal) => (
        <Link key={journal.id} href={`/journal/${journal.id}`} className="group">
          <div className="flex flex-col items-center">
            {/* Vinyl Record */}
            <div className="relative mb-3 transition-all duration-300 group-hover:rotate-12">
              <Image
                src={`/vinyl-images/vinyl-${parseInt(journal.id.replace('journal', ''))}.jpg`}
                alt={journal.song.title}
                width={240}
                height={240}
                className="rounded-full"
              />
            </div>

            {/* Song Info */}
            <div className="text-center">
              <h3 className="font-medium text-sm mb-1 text-gray-900">{journal.song.title}</h3>
              <p className="text-xs text-gray-600">{journal.song.artist}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
