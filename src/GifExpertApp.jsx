import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  //   console.log(categories);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      {/* <input type="text" /> */}
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Listado de Gif */}
      {/* <button onClick={ onAddCategory }>Agregar</button> */}
      {categories.map((category) => (
        // <div key={ category }>
        // 	<h3>{ category }</h3>
        // 	<li>{ category }</li>
        // </div>
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
