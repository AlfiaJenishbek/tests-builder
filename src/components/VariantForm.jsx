import React, { useState } from 'react'

const VariantForm = () => {

  const [variantValue, setVariantValue] = useState("")
  

  const handleInputChange = (event) => {
    setVariantValue(event.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();


  };

  return (
    <form onSubmit={handlerSubmit}>
        <label htmlFor="test">Введите вариант:</label>
        <input
          type="text"
          onChange={handleInputChange}
          value={questionValue}
        />
        <button type="submit">Добавить :</button>
      </form>
  )
}

export default VariantForm
