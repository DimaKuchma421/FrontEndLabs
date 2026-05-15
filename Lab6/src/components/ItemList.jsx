import ItemCard from './ItemCard.jsx';

function ItemList({ items, onDelete }) {
  if (items.length === 0) {
    return <p className="empty">Нічого не знайдено.</p>;
  }

  return (
    <div className="list">
      {items.map((item) => (
        <ItemCard key={item.id} {...item} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ItemList;
