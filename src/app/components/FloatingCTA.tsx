import Link from 'next/link'

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link 
        href="/contact"
        className="bg-accent text-primary px-6 py-3 rounded-full font-bold shadow-lg hover:bg-opacity-90"
      >
        Start Today
      </Link>
    </div>
  )
}
