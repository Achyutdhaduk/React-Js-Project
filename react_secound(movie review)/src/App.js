import "./App.css";
import Header from "./Component/Header";
import Movie from "./Component/Movie";
import movies from "./movie.json";

function App() {
 let login = true;

  return (
    <div className="App">
 
{

(()=>{
  if (login){
    return <h1 style={{color:'black'}}>Dekh le bhai</h1>
  }else{
    return  <h1 style={ {color:'black'}}>Dekh mat liyo galati se</h1>
  }
})()

}
      <Header />

      <div className="Main">
        {movies.map((element, index) => {
          return (
            <Movie
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
