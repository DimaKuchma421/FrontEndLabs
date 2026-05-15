import { useEffect, useMemo, useState } from 'react';
import Header from './Header.jsx';
import Filter from './Filter.jsx';
import ItemList from './ItemList.jsx';
import AddItemForm from './AddItemForm.jsx';
import Section from './Section.jsx';
import { fetchGames } from '../services/api.js';
import { filterGames, getGenres, sortGames } from '../utils/helpers.js';

function App() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [sortType, setSortType] = useState('title');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadData() {
      setIsLoading(true);
      setError(null);

      try {
        const games = await fetchGames(controller.signal);
        setItems(games);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadData();

    return () => controller.abort();
  }, []);

  const genres = useMemo(() => getGenres(items), [items]);

  const visibleItems = useMemo(() => {
    const filtered = filterGames(items, searchQuery, selectedGenre);
    return sortGames(filtered, sortType);
  }, [items, searchQuery, selectedGenre, sortType]);

  function handleAddGame(newGame) {
    setItems((prev) => [...prev, newGame]);
  }

  function handleDeleteGame(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Header searchQuery={searchQuery} onSearch={setSearchQuery} />

      <main>
        <Section title="Фільтр">
          <Filter
            genres={genres}
            selectedGenre={selectedGenre}
            sortType={sortType}
            onGenreChange={setSelectedGenre}
            onSortChange={setSortType}
          />
        </Section>

        <Section title="Додати гру">
          <AddItemForm onAdd={handleAddGame} />
        </Section>

        <Section title="Список ігор">
          {isLoading && <p>Завантаження...</p>}
          {error && <p className="error">Помилка: {error}</p>}
          {!isLoading && !error && <ItemList items={visibleItems} onDelete={handleDeleteGame} />}
        </Section>
      </main>
    </div>
  );
}

export default App;
