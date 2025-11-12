import keralaImg from "../assets/kerala.jpg";
import meghalayaImg from "../assets/meghalaya.jpg";
import gokarnaImg from "../assets/gokarna.jpg";

export const destinations = [
  {
    id: "kerala",
    title: "Kerala — God's Own Country",
    subtitle: "Where peace meets nature.",
    heroImage: keralaImg,
    highlights: [
      "Backwaters & Houseboats",
      "Munnar Tea Hills",
      "Alleppey Boating",
      "Kovalam Beach",
    ],
    price: "₹9,499 / 4N5D",
  },

  {
    id: "meghalaya",
    title: "Meghalaya — The Abode of Clouds ☁️",
    subtitle:
      "Explore the serene hills, root bridges, waterfalls, and crystal-clear rivers of Meghalaya — the true Abode of Clouds.",
    heroImage: meghalayaImg,
    itinerary: [
      {
        day: "Day 1: Arrival in Shillong & Umiam Lake",
        plan: `
• Arrive at Guwahati Airport and drive to Shillong (3–4 hrs).  
• En-route: Stop at Umiam Lake (Barapani) for panoramic views and optional boating.  
• Evening: Check in at your hotel, explore Police Bazar for dinner & local walk.  
• Overnight: Shillong.`,
      },
      {
        day: "Day 2: Shillong Local Sightseeing & Laitlum Canyon",
        plan: `
• Visit Shillong Peak, Elephant Falls, and Ward’s Lake.  
• Afternoon: Explore Don Bosco Museum.  
• Late Afternoon: Drive to Laitlum Canyon (1.5 hrs) for sunset views.  
• Overnight: Shillong.`,
      },
      {
        day: "Day 3: Drive to Cherrapunji (Sohra) & Waterfalls",
        plan: `
• Drive to Cherrapunji (approx. 2 hrs).  
• Visit Nohkalikai Falls, Seven Sisters Falls, and Dainthlen Falls.  
• Evening: Relax in Cherrapunji.  
• Overnight: Cherrapunji.`,
      },
      {
        day: "Day 4: Living Root Bridge Trek & Caves",
        plan: `
• Early morning trek to the Double Decker Living Root Bridge (6–8 hrs round trip).  
• Optional: Trek to Rainbow Falls (1.5 hrs one way).  
• Alternative: Visit Riwai Single Root Bridge, Mawsmai Cave, or Arwah Cave.  
• Overnight: Cherrapunji.`,
      },
      {
        day: "Day 5: Mawlynnong & Dawki",
        plan: `
• Drive to Mawlynnong (Asia’s Cleanest Village) and visit Sky View point.  
• Visit Riwai Root Bridge (if not already done).  
• Proceed to Dawki – enjoy a boat ride on the crystal-clear Umngot River.  
• Visit Dawki Bridge and Indo-Bangladesh border.  
• Overnight: Dawki/Shnongpdeng (camping) or Mawlynnong.`,
      },
      {
        day: "Day 6: Krang Shuri Falls & Jowai",
        plan: `
• Visit Krang Shuri Falls near Jowai — stunning blue water pool.  
• Explore Jowai region: Phe Phe Falls, Nartiang Monoliths.  
• Return drive to Shillong or Guwahati.  
• Overnight: Shillong.`,
      },
      {
        day: "Day 7: Departure",
        plan: `
• Morning: Optional shopping at Police Bazar or visit State Museum.  
• Drive back to Guwahati Airport (3–4 hrs).  
• Departure.`,
      },
    ],
    details: {
      duration: "6 Nights / 7 Days",
      shortDescription:
        "Experience Meghalaya’s magic — misty mountains, living root bridges, and crystal-clear rivers that redefine beauty.",
      inclusions: [
        "✅ Local vehicle",
        "✅ Accommodation (Rooms / Villas / Homestay)",
        "✅ Tolls and taxes",
        "✅ Breakfast",
        "✅ First Aid",
        "✅ Driver charges",
      ],
      exclusions: [
        "❌ All entry tickets and rides",
        "❌ Lunch for all days",
        "❌ Personal expenses",
        "❌ Anything not mentioned in inclusions",
      ],
      contact: "📞 9392329967",
      price: "₹14,499 / 6N7D",
    },
  },

  {
    id: "gokarna",
    title: "Gokarna — Peace in Every Wave",
    subtitle: "Sunsets, silence, and soul reset.",
    heroImage: gokarnaImg,
    highlights: [
      "Om Beach",
      "Kudle Cliff Trek",
      "Paradise Beach",
      "Mirjan Fort",
    ],
    price: "₹5,999 / 2N3D",
  },
];
