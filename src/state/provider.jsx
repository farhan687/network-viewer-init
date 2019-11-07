import React, { useReducer, useContext } from 'react';

import { reducer, initialState } from './reducer';
import {
  updateData, updateSearch, updateSort, updateFilter,
} from './actions';
import { actionsWrapper } from '../utils';

export const NetworkContext = React.createContext();

export const NetworkProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <NetworkContext.Provider value={value} {...props} />;
};

export const useNetwork = () => {
  const context = useContext(NetworkContext);
  if (!context) {
    throw new Error('useNetwork must be used within a CountProvider');
  }
  const [state, dispatch] = context;

  return {
    state,
    dispatch,
    actions: actionsWrapper({
      updateData,
      updateSearch,
      updateSort,
      updateFilter,
    })(dispatch, state),
  };
};
