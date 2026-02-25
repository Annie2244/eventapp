"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

// Define the Event type
type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
};

const STORAGE_KEY = "events";

const defaultEvents: Event[] = [
  { id: 1, title: "Tech Conference 2026", date: "2026-03-10", location: "Nairobi" },
  { id: 2, title: "Music Festival", date: "2026-04-05", location: "Mombasa" },
  { id: 3, title: "Art Exhibition", date: "2026-05-12", location: "Kisumu" },
];

const getInitialEvents = (): Event[] => {
  if (typeof window === "undefined") return defaultEvents;
  const storedEvents = localStorage.getItem(STORAGE_KEY);
  if (storedEvents) {
    try {
      const parsed: Event[] = JSON.parse(storedEvents);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch {
      return defaultEvents;
    }
  }
  return defaultEvents;
};

export default function Home() {
  const [events, setEvents] = useState<Event[]>(getInitialEvents);
  const hasLoadedFromStorage = useRef(false);

  useEffect(() => {
    hasLoadedFromStorage.current = true;
  }, []);

  // Save events whenever they change
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hasLoadedFromStorage.current) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  // Delete event handler
  const deleteEvent = useCallback((id: number) => {
    setEvents(prev => prev.filter(event => event.id !== id));
  }, []);

  return (
    <div
      className="min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/eventapp-bg.jpg')" }}
    >
      <div className="min-h-screen bg-black/60 p-8">
        <h1 className="text-4xl font-extrabold text-center mb-8"> Upcoming Events 🌟</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <li
              key={event.id}
              className="p-6 rounded-xl shadow-lg bg-linear-to-r from-purple-500 via-pink-500 to-red-500 transform transition hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-bold">{event.title}</h2>
              <p className="mt-2 flex items-center">
                📅 <span className="ml-2">{event.date}</span>
              </p>
              <p className="mt-1 flex items-center">
                <span className="ml-2">{event.location}</span>
              </p>
              <button
                onClick={() => deleteEvent(event.id)}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/create-event"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition"
          >
            ➕ Add New Event
          </Link>
        </div>
      </div>
    </div>
  );
}
