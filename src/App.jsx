import React, { useReducer } from 'react';
import ViewerContainer from './Containers/ViewerContainer';
import { reducer, initialState } from './reducer';
import { prepareViewerData } from './utils';
import * as actions from './actions';
import Filters from './Components/filters/Filters';
import ImportHar from './Components/ImportHAR';

import Styles from './App.module.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { filter, data, totalNetworkTime } = state;

  const prepareData = newNetworkData => (
    actions.updateData(dispatch)(prepareViewerData(newNetworkData.log.entries))
  );

  return (
    <div className={Styles['app-container']}>
      <ImportHar onDataLoad={prepareData} />
      <Filters
        searchKeyword={filter.search}
        updateSearch={actions.updateSearch(dispatch)}
        updateFilter={actions.updateFilter(dispatch)}
      />
      <ViewerContainer data={data} totalNetworkTime={totalNetworkTime} />
    </div>
  );
};

export default App;
