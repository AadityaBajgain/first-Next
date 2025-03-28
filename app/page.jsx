import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2 className='mb-4 pb-2 text-base'>Dashboard</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus tempore, exercitationem odit, quasi doloremque possimus recusandae alias sequi totam soluta natus iure eius, obcaecati sint dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed voluptates iste cum totam, facere explicabo, fugit suscipit ratione aspernatur consequuntur ex mollitia quaerat?</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="bg-[var(--primary)] text-white">View Tickets</button>
        </Link>
      </div>

      <h2 className='mb-4 pb-2 text-base'>Company Updates</h2>

      <div className="bg-white 
    shadow-sm 
    rounded-md 
    py-3 px-4 my-4 
    relative 
    overflow-hidden">
        <h3 className='font-bold text-gray-700 text-sm 
    mb-0'>New member of the web dev team...</h3>
        <p className='my-4 text-sm leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
      </div>
      <div className="bg-white 
    shadow-sm 
    rounded-md 
    py-3 px-4 my-4 
    relative 
    overflow-hidden">
        <h3 className='font-bold text-gray-700 text-sm 
    mb-0'>New website live!</h3>
        <p className=' my-4 text-sm leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti, assumenda distinctio adipisci, cupiditate minima eum vitae? Similique dicta est facilis debitis, autem temporibus quo repellat illum unde id iste veritatis eveniet, aspernatur enim quas.</p>
      </div>
    </main>
  )
}