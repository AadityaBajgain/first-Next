import Link from "next/link"
export default function Navbar() {
  return (
    <nav className="pb-4
    border-b-2 border-gray-200
    flex items-center gap-5 
    my-10 mx-auto 
    max-w-5xl;">
      <h1 className=" text-xl text-[var(--primary)]">HelpDesk</h1>
      <Link href = '/' className="hover:text-black">Dashboard</Link>
      <Link href = '/tickets' className="hover:text-black">Tickets</Link>
    </nav>
  )
}
