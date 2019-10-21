import React, { useReducer, useEffect } from 'react';
import ViewerContainer from './Containers/ViewerContainer';
import { reducer, initialState } from './reducer';
import sampleData from './data/har2.json';
import { prepareViewerData } from './utils';
import * as actions from './actions';
import Filters from './Components/filters/Filters';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    actions.updateData(dispatch)(prepareViewerData(sampleData.log.entries));
  }, []);

  return (
    <div className="App">
      <Filters
        searchKeyword={state.filter.search}
        updateSearch={actions.updateSearch(dispatch)}
        updateFilter={actions.updateFilter(dispatch)}
      />
      <ViewerContainer data={state.data} />
    </div>
  );
};

export default App;
