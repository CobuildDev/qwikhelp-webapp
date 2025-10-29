
export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
}



  const services = [
    {
      id: "cooking",
      title: "Cooking",
      description: "Quick access to a cook to cater for your feeding.",
      icon: "👨‍🍳",
      color: "bg-orange-100",
    },
    {
      id: "cleaning",
      title: "Cleaning",
      description: "Quick access to cleaning agents in your desired location.",
      icon: "🧹",
      color: "bg-pink-100",
    },
    {
      id: "laundry",
      title: "Laundry",
      description: "Quick access to personnel for your laundry maintenance.",
      icon: "👔",
      color: "bg-blue-100",
    },
    {
      id: "companion",
      title: "Companion",
      description: "Quick access to a companion in your time of loneliness.",
      icon: "👥",
      color: "bg-purple-100",
    },
    {
      id: "tour",
      title: "Tour Guide",
      description:
        "Quick access to a tour guide to help you navigate your location.",
      icon: "🗺️",
      color: "bg-green-100",
    },
  ];

  export default services;