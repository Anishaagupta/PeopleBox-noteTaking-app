import React, { Suspense } from 'react';
import Loader from '../Components/Loader';
import AppRoute from '../router';

const App = () => (
  <Suspense fallback={<Loader />}>
    <AppRoute />
  </Suspense>
);

export default App;
