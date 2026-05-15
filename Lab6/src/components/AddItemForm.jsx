import { useState } from 'react';

function AddItemForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: '',
    genre: 'Shooter',
    hours: '',
    rating: '',
    price: 'Free'
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.title.trim()) {
      return;
    }

    onAdd({
      id: Date.now(),
      title: formData.title,
      genre: formData.genre,
      hours: Number(formData.hours) || 0,
      rating: Number(formData.rating) || 0,
      price: formData.price || 'No Price'
    });

    setFormData({ title: '', genre: 'Shooter', hours: '', rating: '', price: 'Free' });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Назва гри"
      />
      <select name="genre" value={formData.genre} onChange={handleChange}>
        <option>Shooter</option>
        <option>MMO</option>
        <option>RPG</option>
        <option>Sandbox</option>
        <option>Horror</option>
        <option>Puzzle</option>
        <option>Other</option>
      </select>
      <input
        name="hours"
        value={formData.hours}
        onChange={handleChange}
        placeholder="Години"
        type="number"
      />
      <input
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        placeholder="Рейтинг"
        type="number"
      />
      <input
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Ціна"
      />
      <button type="submit">Додати</button>
    </form>
  );
}

export default AddItemForm;
