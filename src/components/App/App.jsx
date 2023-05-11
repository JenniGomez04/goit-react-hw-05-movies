import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import Appbar from "components/AppBar/AppBar";
import Container from "components/Container/Container";



const Home = lazy(() => import('views/Home/Home'));
const Movies = lazy(() => import('views/Movies/Movies'));
const MovieDetails = lazy(() => import('views/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));



const App = () => {
  return (
    <>
    <Container>
       <Appbar/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/moviesdetails/:id" element={<MovieDetails />} />
      </Routes>
      </Suspense>
    </Container>
    </>
  );
};

export default App;






///////////////////////////////////////////////////////////////


/*import Appbar from 'components/Appbar/AppBar';
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';



const Home = lazy(() => import('../Home/Home'));
const Movies = lazy(() => import('../Movies/Movies'));
const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movies/:movieId" component={MovieDetails} />
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
          </Routes>
      </Suspense>
    </div>
  );
}

export default App;*/
