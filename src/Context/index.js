import React, { createContext, useState } from 'react';

export const someContext = createContext(null);

const { Provider } = someContext;
const SomeProvider = ({ children }) => {
  const [state, setState] = useState([]);
  return <Provider value={[state, setState]}>{children}</Provider>;
};
SomeProvider.context = someContext;
export default SomeProvider;
