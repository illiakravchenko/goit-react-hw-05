import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MoviesDetailsPage = lazy(() =>
  import("../pages/MoviesDetailsPage/MoviesDetailsPage")
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fullback={"null"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route
            path="/movies/:movieId"
            element={<MoviesDetailsPage />}
          ></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
