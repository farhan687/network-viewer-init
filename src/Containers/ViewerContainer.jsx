import React from 'react';
import ViewerHeader from '../Components/ViewerHeader';
import ViewerRow from '../Components/ViewerRow';

import Styles from './ViewerContainer.module.css';
import { useNetwork } from '../state/provider';

const ViewerContainer = () => {
  const { state } = useNetwork();
  const { data, totalNetworkTime } = state;

  return (data.length ? (
    <table className={Styles.table}>
      <ViewerHeader maxTime={totalNetworkTime} />
      <tbody>
        {data.map(payload => (
          <ViewerRow key={payload.index} payload={payload} maxTime={totalNetworkTime} />
        ))}
      </tbody>
    </table>
  ) : (
    'NO DATA FOUND'
  ));
};

export default ViewerContainer;
