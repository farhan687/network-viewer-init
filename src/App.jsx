import React from 'react';
import ViewerContainer from './Containers/ViewerContainer';

import Styles from './App.module.css';
import { NetworkProvider } from './state/provider';
import FilterContainer from './Containers/FilterContainer';

const App = () => (
  <div className={Styles['app-container']}>
    <NetworkProvider>
      <FilterContainer />
      <ViewerContainer />
    </NetworkProvider>
  </div>
);

export default App;
