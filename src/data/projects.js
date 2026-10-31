// src/data/projects.js

export const projectsData = [
  {
    id: 1,
    title: "The Book of Glory Prototype",
    shortDescription: "A mental health focused RPG with rhythm-based combat. Directed the project and developed the dual-world gameplay system and gameplay mechanics in Unreal Engine 5.",
    fullDescription: "The Book of Glory is a unique RPG that explores mental health themes through a dual-world gameplay experience. Players navigate between a realistic daily life and fantastical dream adventures, featuring rhythm-based combat mechanics that challenge both timing and strategy.",
    role: "Game Director & Gameplay Programmer",
    tags: ["Unreal Engine 5", "C++", "Blueprints", "RPG"],
    imageUrl: "/portfolio/assets/images/tbog-image.webp",
    videoUrl: "/portfolio/assets/videos/tbog-video.mp4", 
    videoPreviewUrl: "/portfolio/assets/videos/tbog-preview.mp4", 
    features: [
      "Dual-world gameplay systems",
      "Rhythm-based combat mechanics integrated with RPG elements",
      "Mental health narrative that explores psychological themes",
      "Paper Mario-inspired art style"
    ],
    achievements: [
      "Designed, programmed, and optimized core gameplay mechanics, systems, and events for the video games Colors and The Book of Glory using C#, C++, and Blueprints in Unity and Unreal Engine",
      "Led a 12-member startup using the Scrum methodology to ensure efficient project management and maintained project organization through GitHub version control",
      "Presented The Book of Glory in a virtual booth at Gamescom 2023"
    ],
    links: {
      itchio: "https://nefarious-game-studios.itch.io/tbog"
    },
    gallery: [
      { type: "image", url: "/portfolio/assets/images/tbog-ss1.webp" },
      { type: "image", url: "/portfolio/assets/images/tbog-ss2.webp" },
      { type: "image", url: "/portfolio/assets/images/tbog-ss3.webp" }
    ]
  },
  {
    id: 2,
    title: "Something 2 Fear",
    shortDescription: "A cooperative survival horror game. Designed the main gameplay loop and developed the core systems for the players using Unity and C#.",
    fullDescription: "Something 2 Fear is an intense cooperative survival horror experience. Players must work together to solve puzzles, manage limited resources, and evade a relentless threat in a tense atmospheric environment.",
    role: "Game Director & Gameplay Programmer",
    tags: ["Unity", "C#", "Horror", "Multiplayer"],
    imageUrl: "/portfolio/assets/images/something2fear-image.webp",
    videoUrl: "/portfolio/assets/videos/something2fear-video.mp4",
    videoPreviewUrl: "/portfolio/assets/videos/something2fear-preview.mp4", 
    features: [
      "Cooperative multiplayer with proximity voice chat horror gameplay",
      "AI-driven enemy behavior and pathfinding",
      "PSX-Style graphics",
      "Puzzle-solving mechanics that require teamwork"
    ],
    achievements: [
      "Successfully implemented multiplayer synchronization",
      "Created tension-building game mechanics",
      "Developed the gameplay movement and interaction systems for playersß"
    ],
    links: {
      itchio: "https://andresac90.itch.io/something-2-fear"
    },
    gallery: [
      { type: "image", url: "/portfolio/assets/images/s2f-ss1.webp" },
      { type: "image", url: "/portfolio/assets/images/s2f-ss2.webp" },
      { type: "image", url: "/portfolio/assets/images/s2f-ss3.webp" }
    ]
  },
  {
    id: 10,
    title: "Threat or Treat",
    shortDescription: "A first-person Halloween horror game where you question your neighbors to find doppelgängers. NPCs are powered by a local LLM. Made with Unity.",
    fullDescription: "Doppelgängers are real, and they can wear the skin of the people you see every day. In Threat or Treat you go trick-or-treating anyway, armed with a candy bucket and a pistol. Knock on doors, question your neighbors and decide who is human: take candy only from the people you trust, and get rid of the strange ones before they get rid of you. Each NPC is driven by a local LLM (Ollama) that tries to convince the player it's human — or not.",
    role: "Programmer & Designer",
    tags: ["Unity", "C#", "Horror", "LLM"],
    imageUrl: "/portfolio/assets/images/threatortreat-image.webp",
    videoUrl: "",
    features: [
      "LLM-driven NPCs using a local Ollama model for open-ended conversations",
      "Dialogue-based investigation: question each neighbor and judge their answers",
      "Tense candy-or-kill choices where both mistakes have consequences",
      "First-person, low-poly foggy neighborhood with a dark Halloween atmosphere"
    ],
    achievements: [
      "Integrated a local large language model into real-time NPC dialogue",
      "Built a playable prototype with a 4-person team",
      "Released for Windows and web (HTML5)"
    ],
    links: {
      itchio: "https://andresac90.itch.io/threat-or-treat"
    },
    gallery: [
      { type: "image", url: "/portfolio/assets/images/threatortreat-ss1.webp" },
      { type: "image", url: "/portfolio/assets/images/threatortreat-ss2.webp" },
      { type: "image", url: "/portfolio/assets/images/threatortreat-ss3.webp" },
      { type: "image", url: "/portfolio/assets/images/threatortreat-ss4.webp" }
    ]
  },
  {
    id: 11,
    title: "Please Help Me Hide the Body",
    shortDescription: "An asymmetric online co-op game: one player has to hide the evidence of a workplace murder while the other guides them through the security cameras. Made with Unity for Toronto Game Jam 2026.",
    fullDescription: "You've committed murder at your workplace. Your only hope? A friend behind the cameras. One player controls the murderer, moving through the office and hiding evidence, while the other player watches the security cameras, switching views on the minimap, opening doors and toggling lights to help them get away. Neither player can succeed without the other.",
    role: "Programmer & Designer",
    tags: ["Unity", "C#", "Multiplayer", "Co-op"],
    imageUrl: "/portfolio/assets/images/hidethebody-image.webp",
    videoUrl: "",
    features: [
      "Asymmetric co-op: murderer and camera operator play completely different roles",
      "Online create/join lobby system",
      "Security camera system with minimap-based camera switching",
      "Interactive environment: doors, lights and hideable evidence"
    ],
    achievements: [
      "Built and shipped a networked multiplayer game during Toronto Game Jam 2026 (May 8-10, 2026)",
      "Collaborated with a 5-person team under a 48-hour deadline"
    ],
    links: {
      itchio: "https://andresac90.itch.io/hide-the-body"
    },
    gallery: [
      { type: "image", url: "/portfolio/assets/images/hidethebody-image.webp" },
      { type: "image", url: "/portfolio/assets/images/hidethebody-ss1.webp" }
    ]
  },
  {
    id: 3,
    title: "Robot Simulation",
    shortDescription: "A simulation for the company Four DRobotics.",
    fullDescription: "This simulation was desiged using Unreal Engine 5 during my period as a student reseacher in Centennial College. The goal was to simulate a robot moving in different scenarios and identifying different threats along the map",
    role: "Programmer",
    tags: ["Unreal Engine 5", "C++", "Blueprints", "Simulation"],
    imageUrl: "/portfolio/assets/images/robotsimulation-image.webp",
    videoUrl: "/portfolio/assets/videos/robotsimulation-video.mp4", 
    videoPreviewUrl: "/portfolio/assets/videos/robotsimulation-preview.mp4", 
    features: [
      "Use chaos physics for realistic robot movement",
      "Threat detection system",
      "Navigation and pathfinding"
    ],
    achievements: [
      "Developed a full simulation during a 3 months research program",
      "Followed stakeholder requirements to deliver a functional product"
    ],
    gallery: [
      { type: "image", url: "/portfolio/assets/images/robotsimulation-ss1.webp" },
      { type: "image", url: "/portfolio/assets/images/robotsimulation-ss2.webp" },
      { type: "image", url: "/portfolio/assets/images/robotsimulation-ss3.webp" }
    ]
  },
  {
    id: 4,
    title: "Castle Blocks",
    shortDescription: "A puzzle platformer where you build your path using blocks. Created and designed the block placement system and physics-based platforming mechanics in Pico-8.",
    fullDescription: "Castle Blocks combines classic platforming with creative building mechanics. Players must strategically place blocks to create paths, overcome obstacles, and reach their goal while managing limited resources.",
    role: "Game Designer & Programmer",
    tags: ["Pico-8", "Lua", "Platformer", "Puzzle"],
    imageUrl: "/portfolio/assets/images/castleblocks-image.webp",
    videoUrl: "",
    features: [
      "Dynamic block placement system",
      "Physics-based platforming mechanics",
      "Progressive difficulty with new block types",
      "Level design encouraging creative solutions"
    ],
    achievements: [
      "Created intuitive building mechanics",
      "Balanced challenge and creativity",
      "60fps performance optimization in Pico-8"
    ],
    links: {
      itchio: "https://andresac90.itch.io/castle-blocks"
    },
    gallery: [
      { type: "image", url: "/portfolio/assets/images/castleblocks-ss1.webp" },
      { type: "image", url: "/portfolio/assets/images/castleblocks-ss2.webp" },
      { type: "image", url: "/portfolio/assets/images/castleblocks-ss3.webp" }]
  },
  {
    id: 5,
    title: "Monster's Flow",
    shortDescription: "A first person arcade game inspired by call of duty zombies mode. Developed enemy wave system and power-up mechanics using Unity.",
    fullDescription: "Inspired by Call of Duty zombies, the player can shoot water magic to fire monsters. This game was developed for the Game & Simulation class at Centennial College, as a solo developer I programmed the main gameplay movement and all the corresponding systems, all the assets are from Unity Asset Store.",
    role: "Programmer",
    tags: ["Unity", "C#", "First person shooter", "Arcade"],
    imageUrl: "/portfolio/assets/images/monstersflow-ss4.webp",
    videoUrl: "/portfolio/assets/videos/monstersflow-video.mp4", 
    videoPreviewUrl: "/portfolio/assets/videos/monstersflow-preview.mp4",
    features: [
      "Round-based enemy wave system",
      "Water magic shooting mechanics",
      "Perks and power-ups",
      "Variety of enemy types"
    ],
    achievements: [
      "Developed the game as a solo developer for a college project",
      "Used game programming patterns to create modular and reusable code"
    ],
    links: {
      itchio: "https://andresac90.itch.io/monsters-flow"
    },
    gallery: [
      { type: "image", url: "/portfolio/assets/images/monstersflow-ss3.webp" },
      { type: "image", url: "/portfolio/assets/images/monstersflow-ss1.webp" },
      { type: "image", url: "/portfolio/assets/images/monstersflow-ss2.webp" },
      { type: "image", url: "/portfolio/assets/images/monstersflow-ss4.webp" }
    ]
  },
  {
    id: 6,
    title: "OPYE",
    shortDescription: "A platformer game prototype, developed using Unreal Engine during an exchange program in South Korea.",
    fullDescription: "OPYE is a platformer prototype game where you can't jump on a traditional way, you need to shoot on your feet with a rocket launcher to propel yourself!",
    role: "Gameplay Programmer & Level Designer",
    tags: ["Unreal Engine 4", "C++", "Blueprints", "Platformer"],
    imageUrl: "/portfolio/assets/images/opye-ss1.webp",
    videoUrl: "",
    features: [
      "Rocket launcher jumping mechanic",
      "Precision platforming level",
      "Ray tracing reflections"
    ],
    achievements: [
      "Developed a prototype in an international team during a semester exchange in South Korea",
      "Sucessfully implemented fluid and responsive movement mechanics",
      "Completed the prototype within 2 days"
    ],
    links: {
      itchio: "https://andresac90.itch.io/opye"
    },
    gallery: [
      { type: "image", url: "/portfolio/assets/images/opye-image.webp" },
      { type: "image", url: "/portfolio/assets/images/opye-ss1.webp" }
    ]
  },
  {
    id: 7,
    title: "Colors - A colorful adventure",
    shortDescription: "Platforming game with a color theme mechanic. My first videogame developed.",
    fullDescription: "An endless runner mobile platforming game, where the player needs to change color to progress. Made with Unity in 2019, this is the first game I developed and the first project of Nefarious Game Studios.",
    role: "Director, Programmer & Designer",
    tags: ["Unity", "C#", "Platformer", "Casual"],
    imageUrl: "/portfolio/assets/images/colors-image.webp",
    videoUrl: "/portfolio/assets/videos/colors-video.mp4",
    videoPreviewUrl: "/portfolio/assets/videos/colors-preview.mp4",
    features: [
      "Color-based gameplay mechanics",
      "Pixel-art style and visuals",
      "Endless runner level design",
      "Online leaderboards integration"
    ],
    achievements: [
      "Designed a full videogame around a unique color mechanic",
      "Published my first game in Google Play and App Store",
      "Learned to use Unity and C#"
    ],
    links: {
      itchio: "https://nefarious-game-studios.itch.io/colors-a-colorful-adventure"
    },
    gallery: [
      { type: "image", url: "/portfolio/assets/images/colors-ss1.webp" },
      { type: "image", url: "/portfolio/assets/images/colors-ss2.webp" },
      { type: "video", url: "/portfolio/assets/videos/colors-video-2.mp4" }
    ]
  },
  {
    id: 8,
    title: "Escapa de la isla de las muñecas",
    shortDescription: "A horror puzzle game inspired by Mexican folklore. Designed for a Mexican Game Jam using Unreal Engine.",
    fullDescription: "A horror puzzle game inspired by the Island of the Dolls (Isla de las Muñecas) in Mexico. Players must solve challenging puzzles while navigating a haunting environment filled with eerie dolls and Mexican folklore elements.",
    role: "Programmer & Designer",
    tags: ["Unreal Engine", "C++", "Horror", "Puzzle"],
    imageUrl: "/portfolio/assets/images/islamunecas-image.webp",
    videoUrl: "/portfolio/assets/videos/escapadelaisla-video.mp4",
    videoPreviewUrl: "/portfolio/assets/videos/escapadelaisla-preview.mp4", 
    features: [
      "Atmospheric horror based on Mexican folklore",
      "Puzzle-solving mechanics"
    ],
    achievements: [
      "Designed intricate puzzle sequences",
      "Included Unreal Engine's fluid simulation for realistic water effects",
      "Use of atmosphere and tension"
    ],
    links: {
      itchio: "https://nefarious-game-studios.itch.io/escapa-de-la-isla-de-las-muecas"
    },
    gallery: []
  },
  {
    id: 9,
    title: "Classroom",
    shortDescription: "A stealth game where the player needs to get the highest score in an exam, made for a Mexican Game Jam using Unity.",
    fullDescription: "Classroom is a stealth game the players must avoid the AI-controlled teacher and strategically choose when to copy answers during an exam to maximize their score without getting caught.",
    role: "Programmer & Designer",
    tags: ["Unity", "C#", "Stealth"],
    imageUrl: "/portfolio/assets/images/classroom-image.webp",
    videoUrl: "/portfolio/assets/videos/classroom-video.mp4",
    videoPreviewUrl: "/portfolio/assets/videos/classroom-preview.mp4", 
    features: [
      "Stealth gameplay mechanics",
      "Pixel-art style and visuals",
      "AI-controlled teacher with detection system"
    ],
    achievements: [
      "Created a full stealth game during a 24-hour game jam",
      "Impemented challenging AI behavior for the teacher",
      "Designed engaging risk-reward mechanics"
    ],
    links: {
      itchio: "https://nefarious-game-studios.itch.io/classroom"
    },
    gallery: []
  }
];