import React from 'react';
import PropTypes from 'prop-types';

import {VIEWER_FIELDS} from "../constants";

const ViewerRow = ({ payload }) => (
  <tr>
    {VIEWER_FIELDS.map(({ key, unit }) => (
      <td key={key}>
        {payload[key]} {unit}
      </td>
    ))}
  </tr>
);

ViewerRow.propTypes = {
  payload: PropTypes.object.isRequired,
}

export default ViewerRow;
