function Header({ searchQuery, onSearch }) {
  return (
    <header className="header">
      <div>
        <h1>Каталог ігор</h1>
        <p>Лабораторна робота 6. React</p>
      </div>

      <input
        type="text"
        value={searchQuery}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Пошук гри..."
      />
    </header>
  );
}

export default Header;
