import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
//   const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  const handleNameChange = ({ target }) => {
    setName(target.value);
  };
  const handleCuisineChange = ({ target }) => {
    setCuisine(target.value);
  };
  const handlePhotoChange = ({ target }) => {
    setPhoto(target.value);
  };
  const handleIngredientsChange = ({ target }) => {
    setIngredients(target.value);
  };
  const handlePreparationChange = ({ target }) => {
    setPreparation(target.value);
  };
  
  const handleOnSubmit = (event) => {
    event.preventDefault();
    createRecipe({name, cuisine, photo, ingredients, preparation});
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };
  
  return (
    <form name="create" onSubmit={handleOnSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" type="text" required={true} onChange={handleNameChange} value={name} placeholder="Name" />
            </td>
            <td>
              <input id="cuisine" name="cuisine" type="text" required={true} onChange={handleCuisineChange} value={cuisine} placeholder="Cuisine" />
            </td>
            <td>
              <input id="photo" name="photo" type="url" required={false} onChange={handlePhotoChange} value={photo} placeholder="URL" />
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" required={true} rows={2} onChange={handleIngredientsChange} value={ingredients} placeholder="Ingredients" />
            </td>
            <td>
              <textarea id="preparation" name="preparation" required={true} rows={2} onChange={handlePreparationChange} value={preparation} placeholder="Preparation" />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
