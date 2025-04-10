import { RecentJournals } from "@/components/recent-journals"
import { mockUser } from "@/lib/mock-data"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="max-w-screen-lg mx-auto">
          {/* Simplified Profile Header */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center">
              <h1 className="text-2xl font-medium text-gray-900">{mockUser.name}</h1>
              <span className="ml-2 inline-block w-4 h-4 bg-yellow-400 rounded-full"></span>
            </div>
          </div>

          {/* Simplified Heading */}
          <div className="mb-10">
            <h2 className="text-xl font-medium text-gray-900">My Collection</h2>
          </div>

          {/* Journal Entries */}
          <section className="py-4">
            <RecentJournals />
          </section>
        </div>
      </main>
    </div>
  )
}
