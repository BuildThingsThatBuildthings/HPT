import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-primary text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Hershey Personal Training
        </Link>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-accent">
            About
          </Link>
          <Link href="/services" className="hover:text-accent">
            Services
          </Link>
          <Link href="/testimonials" className="hover:text-accent">
            Testimonials
          </Link>
          <Link href="/contact" className="hover:text-accent">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
