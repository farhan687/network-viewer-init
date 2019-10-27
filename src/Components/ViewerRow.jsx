import React from 'react';
import PropTypes from 'prop-types';

import { VIEWER_FIELDS } from '../constants';
import TimelineChart from './TimelineChart';

const ViewerRow = ({ payload, maxTime }) => (
  <tr>
    {VIEWER_FIELDS.map(({ key, unit }) => (
      <td key={key}>
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
