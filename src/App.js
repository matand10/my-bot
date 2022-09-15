import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppHeader } from './cmps/app-header';
import { routes } from './routes'


export const App = () => {
  return (
    <section className="app">
      <AppHeader/>
      <Routes>
        {routes.map(route => <Route key={route.path} exact element={route.component} path={route.path} />)}
      </Routes>
    </section>
  );
}

