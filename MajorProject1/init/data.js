const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Luxury Villa with Private Pool",
    description: "Indulge in luxury in this stunning villa with a private pool.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Rustic Cabin in the Woods",
    description: "Experience nature in this cozy cabin surrounded by lush forests.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Charming Parisian Apartment",
    description: "Live like a local in this beautiful apartment in the heart of Paris.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Paris",
    country: "France",
  },
  {
    title: "Seaside Bungalow",
    description: "Relax in this peaceful bungalow just steps away from the ocean.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Minimalist Tokyo Apartment",
    description: "Stay in a sleek and modern apartment in the heart of Tokyo.",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 1300,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Mountain View Chalet",
    description: "Breathtaking mountain views from this cozy alpine chalet.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 2400,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Beach House with Infinity Pool",
    description: "Luxury beach house with stunning ocean views and an infinity pool.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 5500,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Elegant Victorian Home",
    description: "A charming and historic home with modern comforts.",
    image: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1900,
    location: "London",
    country: "United Kingdom",
  },
  {
    title: "Ski Lodge with Fireplace",
    description: "Perfect winter escape with a cozy fireplace and ski-in/ski-out access.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 3100,
    location: "Whistler",
    country: "Canada",
  },
  {
    title: "Sunny Countryside Retreat",
    description: "Enjoy peace and serenity in this countryside retreat.",
    image: "https://images.unsplash.com/photo-1516402707257-787c50fc3898?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 1400,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Modern Condo with Skyline View",
    description: "A stylish and modern condo with breathtaking skyline views.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 2600,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Traditional Riad in Marrakech",
    description: "Immerse yourself in Moroccan culture in this stunning riad.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 1700,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Historic Stone Cottage",
    description: "A charming stone cottage with antique decor and cozy vibes.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 900,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Penthouse with Rooftop Pool",
    description: "Experience luxury living in this penthouse with a private rooftop pool.",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 6000,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Treehouse in the Jungle",
    description: "Stay close to nature in this beautiful treehouse retreat.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 1200,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Luxury Overwater Bungalow",
    description: "Unwind in a stunning overwater bungalow with crystal-clear waters.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 7500,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Cozy Igloo with Northern Lights View",
    description: "Enjoy a magical night under the aurora borealis in a cozy igloo.",
    image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 1800,
    location: "Lapland",
    country: "Finland",
  },
  {
    title: "Mediterranean Villa with Ocean View",
    description: "A stunning villa offering breathtaking ocean views and Mediterranean charm.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 4800,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Safari Lodge with Wildlife Experience",
    description: "Get up close to wildlife in this luxury safari lodge.",
    image: "https://images.unsplash.com/photo-1553425300-8bd56360f8eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 3500,
    location: "Serengeti",
    country: "Tanzania",
  },
  {
    title: "Cliffside Retreat with Panoramic Views",
    description: "A peaceful retreat perched on a cliff with stunning views.",
    image: "https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 3100,
    location: "Big Sur",
    country: "United States",
  },
  {
    title: "Chic Studio in the Heart of Rome",
    description: "A cozy studio apartment located in the heart of Rome.",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 1300,
    location: "Rome",
    country: "Italy",
  },
  {
    title: "Private Island Villa",
    description: "Have an entire island to yourself in this luxurious private villa.",
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Bohemian Bungalow with Lush Garden",
    description: "A stylish bungalow with a bohemian vibe and lush greenery.",
    image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 1400,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Sky High Apartment with 360° View",
    description: "Enjoy breathtaking views from the 50th floor of this modern apartment.",
    image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 2800,
    location: "Hong Kong",
    country: "China",
  },
  {
    title: "Historic Castle Stay",
    description: "Live like royalty in a centuries-old castle with grand interiors.",
    image: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 5800,
    location: "Loire Valley",
    country: "France",
  },
  {
    title: "A-Frame Cabin in the Woods",
    description: "A charming A-frame cabin nestled in a tranquil forest.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 1100,
    location: "Vancouver",
    country: "Canada",
  },
  {
    title: "Chateau with Vineyard Views",
    description: "A grand chateau overlooking scenic vineyards in the countryside.",
    image: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 4500,
    location: "Bordeaux",
    country: "France",
  },
  {
    title: "Floating House on the Lake",
    description: "A peaceful floating house on a serene lake surrounded by mountains.",
    image: "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 3200,
    location: "Hallstatt",
    country: "Austria",
  }
];

module.exports = { data: sampleListings };  //saare data ko object ki form mein export kr rhe h