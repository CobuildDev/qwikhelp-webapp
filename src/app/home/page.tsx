"use client";
import React from "react";
import Image from "next/image";
import { Bell, ChevronRight, Flag, LocateIcon, MapPin } from "lucide-react";
import services from "../data/services";

const page = () => {
  const [location, setLocation] = React.useState("popup");

  const handleLocation = () => {
    setLocation("");
    alert("Location is on");
  };
  return (
    <main className=" bg-[#f3f5f6] h-full relative">
      <header className="flex justify-between py-2 pt-4 mb-4  items-center px-4">
        <div className="flex justify-between items-center gap-2">
          <Image
            src="/male.png"
            alt="App Icon"
            width={100}
            height={100}
            className="rounded-full shadow-xs p-1 h-12 w-12 object-cover"
          />
          <h1 className="font-bold">Welcome , Joseph 👋</h1>
        </div>
        <div className="bg-white cursor-pointer p-2 rounded-full">
          <Bell className="w-8 h-8 text-gray-600  rounded-full  p-1" />
        </div>
      </header>

      <section>
        {/* Service Cards - Top Two */}
        <div className="space-y-4 mb-auto px-2">
          {services.map((service: any) => (
            <div
              key={service.id}
              className="flex items-center gap-4 p-4 cursor-pointer bg-white rounded-2xl shadow-sm border border-gray-100"
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
      </section>

      {/* Location Modal */}
      {location === "popup" && (
        <section className="bg-black/50 h-full fixed w-full top-0 left-0 z-50">
          <div className="bg-white rounded-3xl shadow-lg p-6 mt-4 fixed w-full bottom-0 left-0">
            <div className="flex justify-end mb-4">
              <button
                className="w-8 h-8 bg-blue-50 cursor-pointer rounded-full flex items-center justify-center"
                onClick={() => setLocation("")}
              >
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
              //  onClick={handleSetAutomatically}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold mb-3 hover:bg-blue-700 transition-colors"
              onClick={() => setLocation("location")}
            >
              Set automatically
            </button>

            <button
              //  onClick={handleSetLater}
              className="w-full bg-white text-gray-700 py-4 rounded-xl font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
              onClick={() => setLocation("none")}
            >
              Set later
            </button>
          </div>
        </section>
      )}

      {/* Location True */}
      {location === "location" && (
        <section className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
          <div className="flex flex-col gap-4 bg-[#1C284A] text-white rounded-2xl shadow-lg p-6 max-w-sm w-full mx-auto">
            <h2 className="text-lg font-semibold text-center">
              For better experience, your device will need to use Location
              Accuracy
            </h2>

            <div className="space-y-3 text-sm text-gray-300">
              <p>The following settings should be on</p>

              <div className="flex flex-col gap-2 pl-2">
                <p className="flex items-center gap-2">
                  <span className="text-xl">
                    <LocateIcon />
                  </span>{" "}
                  Device location
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-xl">⚙️</span>
                  <span>
                    Location Accuracy, which provides more accurate location for
                    apps and services. To do this, Google periodically processes
                    information about device sensors and wireless signals from
                    your device to crowd-source wireless signal locations...
                  </span>
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400">
              You can change this at any time in location settings{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Manage settings
              </a>{" "}
              or{" "}
              <a href="#" className="text-blue-400 hover:underline">
                learn more
              </a>
            </p>

            <div className="flex justify-center gap-3 pt-3">
              <button
                className="px-4 py-2 text-sm font-medium text-gray-300 border border-gray-500 rounded-lg hover:bg-gray-700"
                onClick={() => setLocation("")}
              >
                No, thanks
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                onClick={handleLocation}
              >
                Turn on
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default page;
