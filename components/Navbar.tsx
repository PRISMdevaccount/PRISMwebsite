import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="PRISM Logo" width={40} height={40} />
        <span className="text-xl font-bold text-primary">PRISM</span>
      </div>
      <div className="space-x-6 text-gray-800 font-medium">
        <Link href="/">Home</Link>
        <Link href="/prism">PRISM</Link> {/* Blog page */}
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
