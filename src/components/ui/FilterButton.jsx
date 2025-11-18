import { useState } from 'react';

export default function FilterButton({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(category)}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            border: selectedCategory === category ? 'none' : '1px solid #3b3b3b',
            backgroundColor: selectedCategory === category ? 'white' : 'transparent',
            color: selectedCategory === category ? 'black' : 'white',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            fontSize: '0.9rem'
          }}
        >
          {category}
        </button>
      ))}
    </>
  );
}
