"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

// Define the Event type
type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
};

const STORAGE_KEY = "events";

export default function CreateEventPage() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!title || !date || !location) {
        alert("Please fill in all fields");
        return;
      }

      const newEvent: Event = {
        id: Date.now(),
        title,
        date,
        location,
      };

      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      const updated = [...existing, newEvent];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

      router.push("/");
    },
    [title, date, location, router]
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
      <div className="w-full max-w-md bg-linear-to-r from-indigo-600 to-purple-600 p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center mb-6">✨ Create Event ✨</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Event title"
            className="border border-gray-300 rounded-lg p-3 w-full text-black"
          />
          <input
            value={date}
            onChange={e => setDate(e.target.value)}
            type="date"
            className="border border-gray-300 rounded-lg p-3 w-full text-black"
          />
          <input
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Location"
            className="border border-gray-300 rounded-lg p-3 w-full text-black"
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition"
          >
            Save Event
          </button>
        </form>
      </div>
    </div>
  );
}