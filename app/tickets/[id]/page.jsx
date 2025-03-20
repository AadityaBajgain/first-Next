import { notFound } from "next/navigation";
export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");

  const tickets = await res.json();

  return tickets.map((ticket) => (
    {
      id: ticket.id
    }
  ))
}


async function getTicketDetails(id) {
  const res = await fetch("http://localhost:4000/tickets/" + id,
    {
      next: {
        revalidate: 30,
      }
    }
  );

  if(!res.ok){
    notFound();
  }

  return res.json();
}

export default async function TicketDetails({ params }) {
  const { id } = params;
  const ticket = await getTicketDetails(id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="bg-white 
                        shadow-sm 
                        rounded-md 
                        pt-4 pb-6 px-4 my-4 
                        relative 
                        overflow-hidden">
        <h3 className="font-bold text-gray-700 text-sm 
    mb-0">{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p className="my-4 text-sm leading-6">{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} Priority
        </div>
      </div>
    </main>
  )
}
