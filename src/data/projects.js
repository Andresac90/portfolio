// src/data/projects.js

export const projectsData = [
  {
    id: 1,
    title: "The Book of Glory",
    shortDescription: "A brief description of the project that appears on the card.",
    fullDescription: "A more detailed description of the project that appears on the project detail page. This should explain what the project is about, the challenges faced, and the solutions implemented.",
    role: "Gameplay Programmer",
    tags: ["Unreal Engine", "C++", "Blueprint"],
    imageUrl: "/path/to/project1-image.jpg",
    videoUrl: "", // Optional: leave empty if using image
    features: [
      "Implemented complex gameplay mechanics",
      "Optimized performance for smooth 60 FPS gameplay",
      "Created modular system architecture"
    ],
    achievements: [
      "Reduced load times by 40%",
      "Implemented AI behavior tree system"
    ],
    links: {
      github: "https://github.com/Andresac90/project1",
      demo: "https://your-demo-link.com",
      itchio: "https://youritchio.itch.io/project1"
    },
    gallery: [
      { type: "image", url: "/path/to/gallery1.jpg" },
      { type: "image", url: "/path/to/gallery2.jpg" },
      { type: "video", url: "/path/to/gallery-video.mp4" }
    ]
  },
  {
    id: 2,
    title: "Project Title 2",
    shortDescription: "Another exciting game project showcasing different skills.",
    fullDescription: "Detailed information about this project, including the development process, technologies used, and what makes it unique.",
    role: "Lead Programmer",
    tags: ["Unity", "C#", "Multiplayer"],
    imageUrl: "/path/to/project2-image.jpg",
    videoUrl: "/path/to/project2-video.mp4", // Optional: can use video instead of image
    features: [
      "Developed multiplayer networking system",
      "Created custom shader effects",
      "Implemented procedural generation"
    ],
    achievements: [
      "Successfully launched with 1000+ players",
      "Achieved 4.5 star rating"
    ],
    links: {
      github: "https://github.com/Andresac90/project2",
      itchio: "https://youritchio.itch.io/project2"
    },
    gallery: [
      { type: "image", url: "/path/to/gallery3.jpg" },
      { type: "image", url: "/path/to/gallery4.jpg" }
    ]
  },
  {
    id: 3,
    title: "Project Title 3",
    shortDescription: "A third project demonstrating versatility in game development.",
    fullDescription: "This project showcases my ability to work with different engines and programming paradigms. It was developed over X months and features Y mechanics.",
    role: "Systems Programmer",
    tags: ["C++", "OpenGL", "Physics"],
    imageUrl: "/path/to/project3-image.jpg",
    videoUrl: "",
    features: [
      "Built custom physics engine",
      "Implemented efficient collision detection",
      "Created debug visualization tools"
    ],
    achievements: [
      "Presented at local game dev meetup",
      "Open-sourced and received 50+ stars on GitHub"
    ],
    links: {
      github: "https://github.com/Andresac90/project3"
    },
    gallery: []
  }
];
