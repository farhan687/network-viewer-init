import React from 'react';
import PropTypes from 'prop-types';


import { VIEWER_FIELDS } from '../constants';
import Styles from './ViewerHeader.styles.css';

const ViewerHeader = ({ maxTime }) => (
  <thead>
    <tr>
      {VIEWER_FIELDS.map(({ key, name }) => (
        <th key={key}>{name}</th>
      ))}
      <th className={Styles['timeline-header']}>
        Timeline chart
      </th>
    </tr>
  </thead>
);

ViewerHeader.propTypes = {
  maxTime: PropTypes.number.isRequired,
};

export default ViewerHeader;
