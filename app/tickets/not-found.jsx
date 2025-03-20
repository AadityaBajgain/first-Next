import Link from "next/link"
export default function NotFound() {
  return (
    <main className="max-w-5xl my-12 mx-auto px-8 text-center">
      <h1 className="text-5xl text-[var(--primary)]">There is a problem</h1>
      <p className="mt-10">We could not found the ticket you were looking for.</p>
      <p>Go back to the <Link href='/tickets' className="text-[var(--primary)]">Tickets</Link></p>
    </main>
  )
}
