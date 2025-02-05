// projectsData.js
// File: projectsData.js
// Student: Andres Acevedo
// StudentID: 12345678
// Date: 2025-02-04

const projectsData = [
    {
        id: 1,
        title: 'Something 2 Fear',
        thumbnail: '/assets/something2fear.jpg',  
        media: { type: 'youtube', url: 'https://www.youtube.com/embed/yw302XBtipQ?si=EuhvPUejpES0mUHH' },
        description: 'A vibrant puzzle game that challenges players to match and blend colors in creative ways.',
        role: 'Lead Developer',
        engineAndPlatforms: 'Unity / Xbox and PC',
        outcome: 'Successfully launched on itch.io with positive reviews from the gaming community.',
        itchioLink: 'https://andresac90.itch.io/something-2-fear'
    },
    {
      id: 2,
      title: 'The Book of Glory',
      thumbnail: '/assets/theboookofglorytn.jpg',  
      media: { type: 'youtube', url: 'https://www.youtube.com/embed/l0r3jzU0vSs?si=kX0oiQilsG-tbSat' },
      description: 'A mental health focused RPG, with rhythm based combat.',
      role: 'Director $ Gameplay Programmer',
      engineAndPlatforms: 'Unreal Engine / PC',
      outcome: 'Praised for its innovative narrative and gameplay mechanics.'
    },
    {
      id: 3,
      title: 'Castle Blocks',
      thumbnail: '/assets/castleblockstitle.jpg', 
      media: { type: 'image', url: '/assets/castleblocks.jpg' },
      description: 'ACastle Blocks is a platformer game where you can put a limited amount of blocks. multiplayer game that explores futuristic themes and advanced mechanics, offering a unique online experience.',
      role: 'Gamepley Programmer',
      engineAndPlatforms: 'Pico8 / PC & Mobile',
      outcome: 'Designed and implemented game mechanics from scratch using Lua while employing token optimization techniques to maintain a consistent 60FPS experience.'
    }
  ];
  
  export default projectsData;
  