import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories, categories}) =>{
    const [inputValue, setInputValue] = useState('');
    
    const check = (val) =>{
        for (let cat of categories){
            if (val === cat){
                return false
            }
        }
        return true;
    }
    
    const handleInputChange = ( e ) =>{
        setInputValue(e.target.value);
    }
    const handleSubmit = ( e ) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2 && check(inputValue.trim()) ){
            setCategories( cats => [ inputValue, ...cats  ] );
            setInputValue('');
        }

    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={ inputValue }
                onChange={ handleInputChange }
            />
            <button>Agregar</button>
        </form>
    );
}

AddCategory.propType = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;