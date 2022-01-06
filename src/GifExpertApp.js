import { useState } from "react";
import AddCategory from "./AddCategory";
import { GifGrid } from "./GifGrid";
const GifExpertApp = () =>{

    /* const handleAdd = () =>{
        setCategories(cats => [...cats,'Tom Hardy']);
        //setCategories([...categories,'sadge']);
    } */
    
    const [categories, setCategories] = useState([/* 'Brad Pitt', 'Cristiano Ronaldo', */ 'Tom Brady']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory categories={categories} setCategories = { setCategories }/>
            <hr />
            <ol>
                {
                    categories.map((category) => <GifGrid key={category} category={category} /> )
                }
            </ol>
        </>
    );
}

export default GifExpertApp