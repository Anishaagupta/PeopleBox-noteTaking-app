import React from 'react';
import { Route, Switch } from 'react-router-dom';
const Home = React.lazy(() => import('../Container/Home.js'));
const AddNote = React.lazy(() => import('../Container/Note'));
const NotFound = React.lazy(() => import('../Container/NotFound'));

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/create' render={() => <AddNote />} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default AppRouter;
