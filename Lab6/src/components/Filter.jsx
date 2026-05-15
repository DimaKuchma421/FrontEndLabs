function Filter({ genres, selectedGenre, sortType, onGenreChange, onSortChange }) {
  return (
    <div className="filters">
      <label>
        Жанр:
        <select value={selectedGenre} onChange={(event) => onGenreChange(event.target.value)}>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre === 'all' ? 'Всі' : genre}
            </option>
          ))}
        </select>
      </label>

      <label>
        Сортування:
        <select value={sortType} onChange={(event) => onSortChange(event.target.value)}>
          <option value="title">За назвою</option>
          <option value="hours">За часом</option>
          <option value="rating">За рейтингом</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;
