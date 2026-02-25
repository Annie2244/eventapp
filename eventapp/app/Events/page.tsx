import Link from "next/link";

type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
};

const events: Event[] = [
  {
    id: 1,
    title: "Tech Conference 2026",
    date: "2026-03-10",
    location: "Nairobi",
    description: "A gathering of tech leaders to discuss innovation.",
  },
  {
    id: 2,
    title: "Music Festival",
    date: "2026-04-05",
    location: "Mombasa",
    description: "A vibrant festival featuring top artists.",
  },
  {
    id: 3,
    title: "Art Exhibition",
    date: "2026-05-12",
    location: "Kisumu",
    description: "Showcasing contemporary art from across Kenya.",
  },
];

export default function EventsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">All Events</h1>
      <ul className="mt-6 space-y-4">
        {events.map(event => (
          <li key={event.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.date} - {event.location}</p>
            <p className="mt-2 text-gray-700">{event.description}</p>
            <Link
              href={`/events/${event.id}`}
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              View details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
