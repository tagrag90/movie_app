import React from 'react';
// import Movie from './Movie';
import Food from './Food';




function App() {
  return (
    <div>
      <h1>Hello!  React app.</h1>

      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiosal" />
      <Food fav="chukumi" />
    </div>
  );
}
export default App;
