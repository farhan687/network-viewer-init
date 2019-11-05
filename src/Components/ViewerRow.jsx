import React from 'react';
import PropTypes from 'prop-types';

import { VIEWER_FIELDS } from '../constants';
import TimelineChart from './TimelineChart';

import Styles from './ViewerHeader.module.css';

const ViewerRow = ({ payload, maxTime }) => (
  <tr>
    {VIEWER_FIELDS.map(({ key, unit }) => (
      <td className={Styles[key]} key={key}>
        {payload[key]}
        {' '}
        {unit}
      </td>
    ))}
    <td>
      <TimelineChart timings={payload.timings} maxTime={maxTime} />
    </td>
  </tr>
);

ViewerRow.propTypes = {
  payload: PropTypes.object.isRequired,
  maxTime: PropTypes.number.isRequired,
};

export default ViewerRow;
