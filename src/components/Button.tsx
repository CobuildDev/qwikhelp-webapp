"use client";
import React, { useState } from "react";
import { MapPin, Flag, Bell, ChevronRight, Plus } from "lucide-react";

const HomeServicesApp = () => {
  const [currentScreen, setCurrentScreen] = useState("location");
  const [showLocationDialog, setShowLocationDialog] = useState(false);

  const handleSetAutomatically = () => {
    setShowLocationDialog(true);
  };

  const handleLocationPermission = (granted) => {
    setShowLocationDialog(false);
    if (granted) {
      setCurrentScreen("home");
    }
  };

  const handleSetLater = () => {
    setCurrentScreen("home");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentScreen === "location" && (
        <div className="px-6 py-8 min-h-screen flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                J
              </div>
              <div>
                <span className="font-semibold text-gray-800">
                  Welcome, Joseph{" "}
                </span>
                <span>👋</span>
              </div>
            </div>
            <Bell className="w-5 h-5 text-gray-600" />
          </div>

          {/* Service Cards - Top Two */}
          <div className="space-y-4 mb-auto">
            {services.slice(0, 2).map((service) => (
              <div
                key={service.id}
                className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div
                  className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-3xl`}
                >
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500">{service.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>

          {/* Location Modal */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mt-4">
            <div className="flex justify-end mb-4">
              <button className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex justify-center mb-6">
              <div className="relative">
                <MapPin
                  className="w-12 h-12 text-pink-500"
                  fill="currentColor"
                />
                <div className="absolute -bottom-2 -right-2 w-16 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-80"></div>
                <Flag
                  className="absolute -right-4 -bottom-1 w-8 h-8 text-blue-600"
                  fill="currentColor"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">
              Where are you ?
            </h2>

            <p className="text-center text-gray-500 text-sm mb-6">
              Set your Location so we can come straight to you and find
              available service providers nearby.
            </p>

            <button
              onClick={handleSetAutomatically}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold mb-3 hover:bg-blue-700 transition-colors"
            >
              Set automatically
            </button>

            <button
              onClick={handleSetLater}
              className="w-full bg-white text-gray-700 py-4 rounded-xl font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Set later
            </button>
          </div>
        </div>
      )}

      {currentScreen === "home" && (
        <div className="px-6 py-8 min-h-screen flex flex-col pb-24">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                J
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-gray-700">
                  Owerri Municipal, Imo State
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <Bell className="w-5 h-5 text-gray-600" />
          </div>

          {/* Service Cards */}
          <div className="space-y-4 flex-1">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div
                  className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0`}
                >
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {service.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
              </div>
            ))}
          </div>

          {/* FAB */}
          <button className="fixed bottom-28 right-8 w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors z-10">
            <Plus className="w-6 h-6 text-white" />
          </button>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-3">
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

      {/* Location Permission Dialog */}
      {showLocationDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50">
          <div className="bg-gray-800 rounded-2xl p-6 max-w-sm text-white">
            <h3 className="font-semibold mb-4">
              For better experience, your device will need to use Location
              Accuracy
            </h3>

            <p className="text-sm text-gray-300 mb-4">
              The following settings should be on:
            </p>

            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Device location</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  Location Accuracy, which provides more accurate location for
                  apps and services. To do this, Google anonymously processes
                  location data which is collected from apps and services with
                  location permission for all Google services and users, and is
                  used across multiple locations. These are used without
                  identifying you to improve location based services and to
                  improve, provide and maintain Google's services based on this
                  anonymous information or parameters to serve users' needs.
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 mb-6">
              You can change this at any time in location settings
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => handleLocationPermission(false)}
                className="flex-1 py-3 rounded-lg border border-gray-600 text-white font-medium hover:bg-gray-700 transition-colors"
              >
                No
              </button>
              <button
                onClick={() => handleLocationPermission(true)}
                className="flex-1 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Turn On
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Screen Toggle Controls */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg px-4 py-2 flex gap-2 z-20">
        <button
          onClick={() => setCurrentScreen("location")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            currentScreen === "location"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Location Setup
        </button>
        <button
          onClick={() => setCurrentScreen("home")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            currentScreen === "home"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Home Screen
        </button>
      </div>
    </div>
  );
};

export default HomeServicesApp;
