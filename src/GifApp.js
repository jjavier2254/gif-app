import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory'
import {GifGrid} from './components/GifGrid'


export const GifApp = () => {
    
   // const categories = ['Dragon Ball', 'Chavo del 8', 'Samurai X']

    const [categories, setCategories] = useState(['Dragon Ball'])

    /*
    const handleApp = () => {
        const newCategory = ('One Pusch'); 
        setCategories([...categories, newCategory])
    };
    */

    return (
        <>
            <h2>GifApp</h2>
            <hr />  
            <AddCategory setCategories={setCategories}/>
            {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
        
            }
    </>
        )}