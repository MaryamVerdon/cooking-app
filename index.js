const result = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");
let meals = [];

const fetchMeals = async (search) => {
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
    .then((res) => res.json())
    .then((data) => (meals = data.meals));

  console.log(meals);
};

const mealsDisplay = () => {
  meals.length = 12;
  result.innerHTML = meals
    .map(
      (meal) =>
        `
      <li class="card">
        <h2>${meal.strMeal}</h2>
        <p>${meal.strArea}</p>
        <img src=${meal.strMealThumb} alt="photo ${meal.sttrMeal}">
        <ul></ul>
      </li>
     `
    )
    .join("");
};

input.addEventListener("input", (e) => {
  fetchMeals(e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  mealsDisplay();
});
