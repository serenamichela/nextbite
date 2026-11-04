import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";

export default function Home() {
  return (
    <main className="main-content">
      <section className="hero">
        <p className="subtitle">WELCOME TO NEXTBITES</p>

        <h1>Discover Your Next Favourite Meal!</h1>

        <p>
          Explore delicious recipes from different cuisines and find
          something amazing to cook today.
        </p>
      </section>

      <section className="recipes-section">
        <h2>Explore Our Recipes</h2>

        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </main>
  );
}