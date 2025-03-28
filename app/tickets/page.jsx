import TicketsList from "./TicketsList";
import { Suspense } from "react";
import Loading from "../loading";
export default function Tickets() {
  return (
    <main>
      <nav>
      <div>
        <h2>Tickets</h2>
        <p><small>Currently Open Tickets.</small></p>

      </div>
      </nav>
      <Suspense fallback={<Loading/>}>
        <TicketsList />
      </Suspense>
    </main>
  )
}
