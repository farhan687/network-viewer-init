import React from 'react';
import PropTypes from 'prop-types';
import ViewerHeader from '../Components/ViewerHeader';
import ViewerRow from '../Components/ViewerRow';

import Styles from './ViewerContainer.module.css';

const ViewerContainer = ({ data, totalNetworkTime }) => (data.length ? (
  <table className={Styles.table}>
    <ViewerHeader maxTime={totalNetworkTime} />
    <tbody>
      {data.map(payload => (
        <ViewerRow key={payload.url} payload={payload} maxTime={totalNetworkTime} />
      ))}
    </tbody>
  </table>
) : (
  'NO DATA FOUND'
));

ViewerContainer.propTypes = {
  data: PropTypes.array,
  totalNetworkTime: PropTypes.number,
};

ViewerContainer.defaultProps = {
  data: [],
  totalNetworkTime: null,
};

export default ViewerContainer;
