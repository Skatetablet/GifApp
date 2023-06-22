import {useState} from 'react'
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {


  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    //Es una opcion
    //setCategories(categories.concat("The weeknd"))
    //setCategories([...categories, "The weeknd"])

    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }
  return (
    <>
   
      <h1>Gif Search</h1>

      <AddCategory 
      /* setCategories={setCategories} */
      onNewCategory={value => onAddCategory(value)}
      />
      
      <ol>
        {
          categories.map((category) => (
            <GifGrid key={category} category={category}/>
          ))
        }  
      </ol>
   
    </>
  )
}

export default GifExpertApp