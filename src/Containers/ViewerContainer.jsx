import React from 'react';
import PropTypes from 'prop-types';
import ViewerHeader from '../Components/ViewerHeader';
import ViewerRow from '../Components/ViewerRow';

const ViewerContainer = ({ data }) =>
  data.length ? (
    <table>
      <ViewerHeader />
      <tbody>
        {data.map(payload => (
          <ViewerRow key={payload.url} payload={payload} />
        ))}
      </tbody>
    </table>
  ) : (
    'NO DATA FOUND'
  );

ViewerContainer.propTypes = {
  data: PropTypes.array
};

ViewerContainer.defaultProps = {
  data: []
};

export default ViewerContainer;
