export async function getRecipes() {
    const respuesta = await fetch("https://dummyjson.com/recipes");
    const data = await respuesta.json();

    const recetas = data.recipes;

    const resumenRecetas = recetas.map((receta) => ({
        nombre: receta.name,
        tiempo: receta.prepTimeMinutes,
        dificultad: receta.difficulty,
        imagen: receta.image,
        tipo: receta.cuisine,
        id: receta.id,
        ingredientes: receta.ingredients,
        instructiones: receta.instructions
}));

return resumenRecetas;
}