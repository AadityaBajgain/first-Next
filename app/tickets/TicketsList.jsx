import Link from 'next/link';

async function getTickets() {
    const res = await fetch("http://localhost:4000/tickets");
    next: {
        revalidate: 0  // opt out of using cache
    }
    return res.json();
}

export default async function TicketsList() {
    const tickets = await getTickets();
    return (
        <main>
            {
                tickets.map(ticket => (
                    <div key={ticket.id}
                        className="bg-white 
                        shadow-sm 
                        rounded-md 
                        pt-4 pb-6 px-4 my-4 
                        relative 
                        overflow-hidden"><Link href={`/tickets/${ticket.id}`}>
                            <h3 className="font-bold text-gray-700 text-sm 
    mb-0">{ticket.title}</h3>
                            <p className="my-4 text-sm leading-6">{ticket.body.slice(0, 200)}...</p>
                            <div className={`pill ${ticket.priority}`}>
                                {ticket.priority} Priority
                            </div>
                        </Link>

                    </div>
                ))
            }
            {tickets.length === 0 && (
                <p className="m-auto text-lg text-red-600">No tickets found</p>
            )}
        </main>
    )
}
