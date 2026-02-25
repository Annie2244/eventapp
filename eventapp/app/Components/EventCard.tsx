import Link from "next/link";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
}

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
      <p className="text-gray-600">{event.date}</p>
      <p className="text-gray-600">{event.location}</p>
      <Link
        href={`/events/${event.id}`}
        className="text-blue-600 hover:underline mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
}
