export const starterGames = [
  { id: 1, title: 'Counter-Strike 2', genre: 'Shooter', hours: 2240, rating: 86, price: 'Free' },
  { id: 2, title: 'Albion Online', genre: 'MMO', hours: 1532, rating: 78, price: 'Free' },
  { id: 3, title: 'EVE Online', genre: 'MMO', hours: 156, rating: 73, price: 'Free' },
  { id: 4, title: 'The Elder Scrolls Online', genre: 'MMO', hours: 142, rating: 80, price: '599₴' },
  { id: 5, title: 'HELLDIVERS 2', genre: 'Shooter', hours: 118, rating: 75, price: '1199₴' },
  { id: 6, title: 'Terraria', genre: 'Sandbox', hours: 102, rating: 97, price: '225₴' },
  { id: 7, title: 'Paladins', genre: 'Shooter', hours: 99, rating: 84, price: 'Free' },
  { id: 8, title: 'Phasmophobia', genre: 'Horror', hours: 96, rating: 94, price: '272₴' },
  { id: 9, title: 'Mortal Kombat 11', genre: 'Fighting', hours: 93, rating: 87, price: 'No Price' },
  { id: 10, title: 'Celeste', genre: 'Platformer', hours: 93, rating: 96, price: '389₴' },
  { id: 11, title: 'Marvel Rivals', genre: 'Shooter', hours: 91, rating: 76, price: 'Free' },
  { id: 12, title: 'Robocraft', genre: 'Sandbox', hours: 80, rating: 72, price: 'No Price' },
  { id: 13, title: 'SCP: Secret Laboratory', genre: 'Horror', hours: 75, rating: 90, price: 'Free' },
  { id: 14, title: 'Lethal Company', genre: 'Horror', hours: 67, rating: 96, price: '225₴' },
  { id: 15, title: 'The Forest', genre: 'Survival', hours: 62, rating: 95, price: '279₴' },
  { id: 16, title: 'Battlefield 6', genre: 'Shooter', hours: 57, rating: 65, price: '1699₴' },
  { id: 17, title: 'Team Fortress 2', genre: 'Shooter', hours: 52, rating: 90, price: 'Free' },
  { id: 18, title: 'Mount & Blade II: Bannerlord', genre: 'RPG', hours: 52, rating: 87, price: '849₴' },
  { id: 19, title: 'Lords of the Fallen', genre: 'Action RPG', hours: 37, rating: 67, price: '899₴' },
  { id: 20, title: 'Dying Light', genre: 'Survival', hours: 34, rating: 94, price: '69₴' },
  { id: 21, title: 'Brawlhalla', genre: 'Fighting', hours: 33, rating: 80, price: 'Free' },
  { id: 22, title: 'DELTARUNE', genre: 'RPG', hours: 32, rating: 97, price: '499₴' },
  { id: 23, title: 'Warframe', genre: 'Shooter', hours: 28, rating: 87, price: 'Free' },
  { id: 24, title: 'Stellaris', genre: 'Strategy', hours: 28, rating: 84, price: '1349₴' },
  { id: 25, title: 'Hearts of Iron IV', genre: 'Strategy', hours: 28, rating: 88, price: '1349₴' },
  { id: 26, title: 'Age of Empires III: Definitive Edition', genre: 'Strategy', hours: 21, rating: 84, price: 'Free' },
  { id: 27, title: 'Undertale', genre: 'RPG', hours: 21, rating: 95, price: '169₴' },
  { id: 28, title: 'Battlefield 1', genre: 'Shooter', hours: 17, rating: 86, price: '1199₴' },
  { id: 29, title: 'Barotrauma', genre: 'Survival', hours: 17, rating: 93, price: '499₴' },
  { id: 30, title: 'Apex Legends', genre: 'Shooter', hours: 17, rating: 67, price: 'Free' },
  { id: 31, title: 'R.E.P.O.', genre: 'Horror', hours: 16, rating: 95, price: '194₴' },
  { id: 32, title: 'Muck', genre: 'Survival', hours: 16, rating: 92, price: 'Free' },
  { id: 33, title: 'PEAK', genre: 'Adventure', hours: 14, rating: 94, price: '159₴' },
  { id: 34, title: 'Garry\'s Mod', genre: 'Sandbox', hours: 13, rating: 96, price: '169₴' },
  { id: 35, title: 'THE FINALS', genre: 'Shooter', hours: 13, rating: 78, price: 'Free' },
  { id: 36, title: 'Tom Clancy\'s Rainbow Six Siege', genre: 'Shooter', hours: 12, rating: 82, price: 'Free' },
  { id: 37, title: 'SpiderHeck', genre: 'Action', hours: 11, rating: 90, price: '199₴' },
  { id: 38, title: 'NARAKA: BLADEPOINT', genre: 'Action', hours: 10, rating: 69, price: 'Free' },
  { id: 39, title: 'Schedule I', genre: 'Simulation', hours: 10, rating: 97, price: '415₴' },
  { id: 40, title: 'PAYDAY 2', genre: 'Shooter', hours: 9, rating: 89, price: '97₴' },
  { id: 41, title: 'Fallout Shelter', genre: 'Strategy', hours: 9, rating: 87, price: 'Free' },
  { id: 42, title: 'Super Auto Pets', genre: 'Strategy', hours: 8, rating: 89, price: 'Free' },
  { id: 43, title: 'Counter-Strike: Condition Zero', genre: 'Shooter', hours: 8, rating: 90, price: '169₴' },
  { id: 44, title: 'Portal 2', genre: 'Puzzle', hours: 8, rating: 98, price: '225₴' }
];

export function getGenres(games) {
  return ['all', ...new Set(games.map((game) => game.genre))];
}

export function filterGames(games, search, genre) {
  const query = search.trim().toLowerCase();

  return games.filter((game) => {
    const titleMatches = game.title.toLowerCase().includes(query);
    const genreMatches = genre === 'all' || game.genre === genre;
    return titleMatches && genreMatches;
  });
}

export function sortGames(games, sortType) {
  const copy = [...games];

  if (sortType === 'rating') {
    return copy.sort((a, b) => b.rating - a.rating);
  }

  if (sortType === 'hours') {
    return copy.sort((a, b) => b.hours - a.hours);
  }

  return copy.sort((a, b) => a.title.localeCompare(b.title));
}
