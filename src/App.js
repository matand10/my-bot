import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes'


export const App = () => {
  return (
    <section>
      <Routes>
        {routes.map(route => <Route key={route.path} exact element={route.component} path={route.path} />)}
      </Routes>
    </section>
  );
}

