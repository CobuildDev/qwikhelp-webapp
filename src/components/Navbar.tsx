import { MapPin } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <div className="fixed z-10 bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-3 py-3">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <div className="flex flex-col items-center gap-1">
          <div className="w-6 h-6 text-blue-600">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
          <span className="text-xs text-blue-600 font-medium">Home</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-xs text-gray-400">Booking History</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <MapPin className="w-6 h-6 text-gray-400" />
          <span className="text-xs text-gray-400">Nearby</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="text-xs text-gray-400">Account</span>
        </div>
      </div>
    </div>
  );
}
