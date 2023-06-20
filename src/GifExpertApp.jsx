import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {


  const [categories, setCategories] = useState(["Seahawks"]);

  const onAddCategory = (newCategory) => {
    //Es una opcion
    //setCategories(categories.concat("The weeknd"))
    //setCategories([...categories, "The weeknd"])

    if(categories.includes(newCategory)) return;
    setCategories([...categories, newCategory])
  }
  return (
    <>
   
      <h1>GifExpertApp</h1>

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