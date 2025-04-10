import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { mockJournals, mockUser } from "@/lib/mock-data"

export default function ProfilePage() {
  return (
    <div className="min-h-screen text-white">
      <Navigation />

      <main className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="max-w-screen-lg mx-auto">
          {/* Profile Header */}
          <div className="flex items-start gap-6 mb-8">
            <div className="h-20 w-20 rounded-full overflow-hidden">
              <Image
                src={mockUser.avatar || "/placeholder.svg"}
                alt={mockUser.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center">
                <h1 className="text-2xl font-medium text-white">{mockUser.name}</h1>
                <span className="ml-2 inline-block w-4 h-4 bg-yellow-400 rounded-full"></span>
              </div>
              <p className="text-gray-400 mt-1 mb-3">{mockUser.bio}</p>

              <div className="text-sm text-gray-400">Joined {mockUser.joinDate}</div>
            </div>

            <div>
              <Link
                href="#"
                className="inline-flex items-center text-sm border border-gray-700 rounded-md px-3 py-1.5 hover:bg-gray-900 text-gray-300"
              >
                View on Posts
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-800 mb-8">
            <div className="flex space-x-8">
              <button className="px-1 py-3 border-b-2 border-white text-white font-medium text-sm">All Journals</button>
              <button className="px-1 py-3 text-gray-400 hover:text-white text-sm">By Artist</button>
              <button className="px-1 py-3 text-gray-400 hover:text-white text-sm">By Mood</button>
            </div>
          </div>

          {/* Journal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockJournals.map((journal) => (
              <div
                key={journal.id}
                className="border border-gray-800 rounded-md overflow-hidden hover:border-gray-700 transition-all bg-gray-900"
              >
                <div className="relative aspect-video">
                  <Image
                    src={`/vinyl-images/vinyl-${(parseInt(journal.id.replace('journal', '')) % 3) + 1}.jpg`}
                    alt={journal.song.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="h-6 w-6 rounded-full overflow-hidden mr-2 bg-gray-800">
                      <Image src="/placeholder.svg" alt="User avatar" width={24} height={24} />
                    </div>
                    <span className="text-sm font-medium text-white">{mockUser.name}</span>
                    {journal.mood && (
                      <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-300">
                        {journal.mood}
                      </span>
                    )}
                  </div>

                  <h3 className="font-medium text-base text-white mb-1">{journal.song.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{journal.song.artist}</p>

                  <p className="text-sm text-gray-300 line-clamp-2">{journal.content}</p>

                  <div className="mt-3 text-xs text-gray-500">{journal.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
