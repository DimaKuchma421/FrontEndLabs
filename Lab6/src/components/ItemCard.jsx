function ItemCard({ id, title, genre, hours, rating, price, onDelete }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p><b>Жанр:</b> {genre}</p>
      <p><b>Години:</b> {hours}</p>
      <p><b>Рейтинг:</b> {rating}%</p>
      <p><b>Ціна:</b> {price}</p>
      <button type="button" onClick={() => onDelete(id)}>
        Видалити
      </button>
    </article>
  );
}

export default ItemCard;
