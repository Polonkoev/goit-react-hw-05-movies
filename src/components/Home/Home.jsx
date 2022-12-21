import { Outlet } from "react-router-dom";

import { TrendMoviesPage } from "Pages/TrendMoviesPage"

export const Home = () => {
  return (
<>
<TrendMoviesPage/>
    <Outlet/>
    </>
  );
};
