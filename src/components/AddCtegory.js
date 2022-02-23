
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCtegory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');  

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        //no se recarga toda la pagina
        e.preventDefault();

        if(inputValue.trim().length > 2){
            
            setCategorias(cats => [inputValue,...cats]);
            setInputValue('');
        }
        
    }

  return (
    <form onSubmit={ handleSubmit }>
    
        <input
            type="text"
            value={ inputValue }
            onChange={handleInputChange}
        />
    </form>
  )
}

AddCtegory.prototype = {
    setCategorias: PropTypes.func.isRequired
}