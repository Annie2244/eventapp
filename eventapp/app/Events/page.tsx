interface EventDetailProps {
  params: { id: string };
}

const events = [
  { id: 1, title: "Tech Conference 2026", date: "2026-03-10", location: "Nairobi", description: "A gathering of tech leaders to discuss innovation." },
  { id: 2, title: "Music Festival", date: "2026-04-05", location: "Mombasa", description: "A vibrant festival featuring top artists." },
  { id: 3, title: "Art Exhibition", date: "2026-05-12", location: "Kisumu", description: "Showcasing contemporary art from across Kenya." },
];

export default function EventDetailPage({ params }: EventDetailProps) {
  const event = events.find(e => e.id.toString() === params.id);

  if (!event) {
    return <p className="p-8">Event not found.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p className="mt-4">Date: {event.date}</p>
      <p className="mt-2">Location: {event.location}</p>
      <p className="mt-4 text-gray-700">{event.description}</p>

      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Register Now
      </button>

      <a href="/events" className="mt-6 inline-block text-blue-600 hover:underline">
        ← Back to All Events
      </a>
    </div>
  );
}