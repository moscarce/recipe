let recipeTable = document.querySelector('.recipe-table');




for (let index = 0; index < 5; index++) {
    let recipe = document.createElement('div');
recipe.setAttribute('class','recipe');
let food = document.createElement('h1');
food.innerHTML = 'Beans';
let recipeIngredient = document.createElement('p')
recipeIngredient.innerHTML = 'Ingredients:<span><i> ewa, ponmo</i></span>';
let instruction = document.createElement('p') 
instruction.innerHTML =  'Instruction:<span><i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ex suscipit eligendi voluptates odio excepturi alias omnis. Corrupti repellendus perferendis, unde architecto impedit inventore labore id harum atque nulla velit</i></span>';
let hr = document.createElement('hr');

    recipe.appendChild(food);
    recipe.appendChild(recipeIngredient);
    recipe.appendChild(instruction)
    recipe.appendChild(hr)
    recipeTable.appendChild(recipe)
    console.log(index);
    
}