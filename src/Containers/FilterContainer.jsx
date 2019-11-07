import React from 'react';
import ImportHar from '../Components/ImportHAR';
import Filters from '../Components/filters/Filters';
import { prepareViewerData } from '../utils';
import { useNetwork } from '../state/provider';

const FilterContainer = () => {
  const { state, actions } = useNetwork();

  const prepareData = newNetworkData => (
    actions.updateData(prepareViewerData(newNetworkData.log.entries))
  );

  return (
    <div>
      <ImportHar onDataLoad={prepareData} />
      <Filters
        searchKeyword={state.filter.search}
        updateSearch={actions.updateSearch}
        updateFilter={actions.updateFilter}
      />
    </div>
  );
};

export default FilterContainer;
