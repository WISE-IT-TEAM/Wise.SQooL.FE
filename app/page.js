// app/page.js
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
      <p className="text-xl mb-4">This is a sample homepage using Next.js App Router and Tailwind CSS.</p>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Content:</h2>
        <ul className="list-disc list-inside">
          <li>Latest News</li>
          <li>Popular Products</li>
          <li>Upcoming Events</li>
        </ul>
      </div>
      <div className="mt-8">
        <Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More About Us
        </Link>
      </div>
    </div>
  )
}