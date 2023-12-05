let recipeTable = document.querySelector('.recipe-table');






fetch('https://6a86-62-173-45-70.ngrok.io/recipe-management/get-meal?mealName=Rice')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data.mealType);
    console.log(data.mealName);
    console.log(data.recipeInstruction);
    console.log(data.ingredientList[0].name);
    console.log(data.ingredientList[1].name);
    let ing = ' ';
    data.ingredientList.forEach(element => ing += `${element.name}, `);
    console.log('API Response:', data);
    for (let index = 0; index < data.ingredientList.length; index++) {
        let recipe = document.createElement('div');
    recipe.setAttribute('class','recipe');
    let food = document.createElement('h1');
    food.innerHTML = `${data.mealName}`;
    let recipeIngredient = document.createElement('p')
    recipeIngredient.innerHTML = `Ingredients:<span><i>${ing}</i></span>`;
    let instruction = document.createElement('p') 
    instruction.innerHTML =  data.recipeInstruction;
    let hr = document.createElement('hr');
    
        recipe.appendChild(food);
        recipe.appendChild(recipeIngredient);
        recipe.appendChild(instruction)
        recipe.appendChild(hr)
        recipeTable.appendChild(recipe)
        console.log(index);
        
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });