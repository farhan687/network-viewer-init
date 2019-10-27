import * as types from './types';
import { filterData, sortBy } from './utils';

const initialState = {
  data: [],
  actualData: [],
  totalNetworkTime: null,
  sort: {
    key: 'startedDateTime',
    isAcs: true
  },
  filter: {
    search: '',
    key: null,
    value: null,
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_DATA: {
      const { sort } = state;
      const { data, totalNetworkTime } = payload;
      const sortedData = sortBy(data, sort.key, sort.isAcs);
      return {
        ...state,
        data: sortedData,
        actualData: sortedData,
        totalNetworkTime,
      };
    }
    case types.UPDATE_SEARCH: {
      const filter = {
        ...state.filter,
        search: payload,
      };
      return {
        ...state,
        filter,
        data: filterData(state.actualData, filter)
      };
    }
    case types.UPDATE_FILTER: {
      const filter = {
        ...state.filter,
        ...payload,
      };
      return {
        ...state,
        filter,
        data: filterData(state.actualData, filter)
      };
    }
    case types.UPDATE_SORT: {
      return {
        ...state,
        search: payload,
        data: sortBy(state.data, payload.key, payload.isAcs)
      };
    }

    default:
      return state;
  }
};

export { initialState, reducer };
export default reducer;
