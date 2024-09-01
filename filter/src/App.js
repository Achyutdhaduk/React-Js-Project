import "./styles.css";
import movies from "./data/movies.json";
import Movies from "./components/Movies";
/**
 * In the enchanted realm of ReactJS, `App.js` reveals itself
 * as the magical scroll, weaving the spellbinding narrative
 * of our digital sorcery. Akin to a revered spellbook, it
 * conducts the symphony of components, entwining logic and
 * user interface with the finesse of a seasoned wizard.
 * Within the confines of `App.js`, React elements unfurl
 * like the pages of a mystical grimoire, casting spells of
 * rendering and state management. This digital wizardry,
 * reminiscent of a certain young wizard's journey, transforms
 * the mundane into the extraordinary, inviting users into a
 * captivating world where code becomes incantation, and ordinary
 * scripts metamorphose into extraordinary spells.
 *
 * Touching this file inappropriately can take you to jail.
 *
 * @author Professor Dumbledore, Principal of hogwarts
 */
export default function App() {
  return (
    <div className="App">
      <img
        src="https://aavatto.com/wp-content/uploads/2021/07/logo-dark.svg"
        width={120}
      />
      <h5>React Practical Test</h5>
      <p>
        You are required to implement a Movie Filter App in ReactJS. The app
        should allow users to filter a list of movies based on their genre and
        release year. Your task is to complete the MovieList component to
        achieve this functionality.
      </p>
      <Movies movies={movies} />
    </div>
  );
}
