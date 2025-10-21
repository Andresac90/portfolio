// src/data/projects.js

export const projectsData = [
  {
    id: 1,
    title: "The Book of Glory Prototype",
    shortDescription: "A mental health focused RPG with rhythm-based combat. Directed the project and developed the dual-world gameplay system and gameplay mechanics in Unreal Engine 5.",
    fullDescription: "The Book of Glory is a unique RPG that explores mental health themes through a dual-world gameplay experience. Players navigate between a realistic daily life and fantastical dream adventures, featuring rhythm-based combat mechanics that challenge both timing and strategy.",
    role: "Game Director & Gameplay Programmer",
    tags: ["Unreal Engine 5", "C++", "Blueprints", "RPG"],
    imageUrl: "/portfolio/assets/images/tbog-image.jpg",
    videoUrl: "/portfolio/assets/videos/tbog-video.mp4", 
    videoPreviewUrl: "/portfolio/assets/videos/tbog-video-compressed.mp4", 
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
      { type: "image", url: "/portfolio/assets/images/tbog-ss1.jpg" },
      { type: "image", url: "/portfolio/assets/images/tbog-ss2.jpg" },
      { type: "image", url: "/portfolio/assets/images/tbog-ss3.jpg" }
    ]
  },
  {
    id: 2,
    title: "Something 2 Fear",
    shortDescription: "A cooperative survival horror game. Designed the main gameplay loop and developed the core systems for the players using Unity and C#.",
    fullDescription: "Something 2 Fear is an intense cooperative survival horror experience. Players must work together to solve puzzles, manage limited resources, and evade a relentless threat in a tense atmospheric environment.",
    role: "Game Director & Gameplay Programmer",
    tags: ["Unity", "C#", "Horror", "Multiplayer"],
    imageUrl: "/portfolio/assets/images/something2fear-image.jpg",
    videoUrl: "/portfolio/assets/videos/something2fear-video.mp4",
    videoPreviewUrl: "/portfolio/assets/videos/something2fear-video-compressed.mp4", 
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
      { type: "image", url: "/portfolio/assets/images/s2f-ss1.jpg" },
      { type: "image", url: "/portfolio/assets/images/s2f-ss2.jpg" },
      { type: "image", url: "/portfolio/assets/images/s2f-ss3.jpg" }
    ]
  },
  {
    id: 3,
    title: "Castle Blocks",
    shortDescription: "A puzzle platformer where you build your path using blocks. Created and designed the block placement system and physics-based platforming mechanics in Pico-8.",
    fullDescription: "Castle Blocks combines classic platforming with creative building mechanics. Players must strategically place blocks to create paths, overcome obstacles, and reach their goal while managing limited resources.",
    role: "Game Designer & Programmer",
    tags: ["Pico-8", "Lua", "Platformer", "Puzzle"],
    imageUrl: "/portfolio/assets/images/castleblocks-image.jpg",
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
    gallery: []
  },
  {
    id: 4,
    title: "OPYE",
    shortDescription: "An environmental education simulation game. Developed decision-making systems and visual feedback mechanics to teach sustainability using Unity.",
    fullDescription: "OPYE (One Planet, Your Earth) is an educational game that raises awareness about environmental issues. Players make decisions that impact the planet's health, learning about sustainability and conservation through interactive gameplay.",
    role: "Lead Programmer",
    tags: ["Unity", "C#", "Educational", "Simulation"],
    imageUrl: "/portfolio/assets/images/opye-image.jpg",
    videoUrl: "",
    features: [
      "Environmental impact simulation system",
      "Decision-making gameplay with consequences",
      "Educational content about sustainability",
      "Visual feedback showing planetary health"
    ],
    achievements: [
      "Created for university Game Design course",
      "Successfully conveyed environmental message through gameplay",
      "Developed engaging educational mechanics"
    ],
    links: {
      itchio: "https://andresac90.itch.io/opye"
    },
    gallery: [{ type: "image", url: "/portfolio/assets/images/opye-ss1.jpg" }]
  },
  {
    id: 5,
    title: "Escapa de la isla de las muñecas",
    shortDescription: "A horror puzzle game inspired by Mexican folklore. Designed intricate puzzle sequences and implemented atmospheric horror mechanics in Unity.",
    fullDescription: "A horror puzzle game inspired by the Island of the Dolls (Isla de las Muñecas) in Mexico. Players must solve challenging puzzles while navigating a haunting environment filled with eerie dolls and Mexican folklore elements.",
    role: "Programmer & Designer",
    tags: ["Unity", "C#", "Horror", "Puzzle"],
    imageUrl: "/portfolio/assets/images/munecas-cover.jpg",
    videoUrl: "",
    features: [
      "Atmospheric horror based on Mexican folklore",
      "Complex puzzle-solving mechanics",
      "Environmental storytelling",
      "Cultural authenticity in setting and narrative"
    ],
    achievements: [
      "Created authentic Mexican horror experience",
      "Designed intricate puzzle sequences",
      "Effective use of atmosphere and tension"
    ],
    links: {
      itchio: "https://andresac90.itch.io/escapa-de-la-isla-de-las-munecas"
    },
    gallery: []
  },
  {
    id: 6,
    title: "IndiesMX_Classroom",
    shortDescription: "A humorous stealth strategy game about cheating on exams. Implemented teacher AI detection system and timing-based stealth mechanics in Unity.",
    fullDescription: "A lighthearted strategy game where players must cleverly copy answers from classmates while avoiding the teacher's watchful eye. Features timing-based mechanics and strategic planning.",
    role: "Programmer",
    tags: ["Unity", "C#", "Strategy", "Comedy"],
    imageUrl: "/portfolio/assets/images/indiesmx-cover.jpg",
    videoUrl: "",
    features: [
      "Timing-based stealth mechanics",
      "Teacher AI with detection system",
      "Multiple classmate personalities",
      "Risk vs reward decision making"
    ],
    achievements: [
      "Created humorous and relatable gameplay",
      "Implemented challenging stealth AI",
      "Designed engaging risk-reward mechanics"
    ],
    links: {
      itchio: "https://andresac90.itch.io/indiesmx-classroom"
    },
    gallery: []
  },
  {
    id: 7,
    title: "Colors - A colorful adventure",
    shortDescription: "A vibrant platformer with color-based mechanics. Designed unique color puzzles and polished movement controls using Unity.",
    fullDescription: "Colors is a cheerful platforming game that takes players through vibrant, colorful worlds. Each level features unique color-based mechanics and challenges, creating a visually stunning and mechanically diverse experience.",
    role: "Developer",
    tags: ["Unity", "C#", "Platformer", "Casual"],
    imageUrl: "/portfolio/assets/images/colors-cover.jpg",
    videoUrl: "",
    features: [
      "Color-based gameplay mechanics",
      "Vibrant art style and visuals",
      "Progressive difficulty across levels",
      "Satisfying platforming controls"
    ],
    achievements: [
      "Created visually appealing game world",
      "Designed color-based puzzle mechanics",
      "Polished movement and controls"
    ],
    links: {
      itchio: "https://andresac90.itch.io/colors"
    },
    gallery: []
  }
];