import { starterGames } from '../utils/helpers.js';

export async function fetchGames() {
  // JSONPlaceholder використовується як простий публічний API з умови лабораторної.
  // Сам список ігор зроблений локально, бо це мій навчальний каталог.
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=1');

  if (!response.ok) {
    throw new Error('Не вдалося завантажити дані');
  }

  await response.json();
  return starterGames;
}
