interface EventDetailProps {
  params: { id: string };
}

export default function EventDetailPage({ params }: EventDetailProps) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Event Details</h1>
      <p className="mt-4">You are viewing event with ID: {params.id}</p>
    </div>
  );
}