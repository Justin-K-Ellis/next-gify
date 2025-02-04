import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-3 mb-4">
      <div className="text-3xl font-bold">Next Gify</div>
      <div className="flex gap-2 text-xl">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/about">About</Link>
        </div>
        <div>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
