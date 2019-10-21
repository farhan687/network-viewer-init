import React from 'react';

import { VIEWER_FIELDS } from '../constants';

const ViewerHeader = () => (
  <thead>
    <tr>
      {VIEWER_FIELDS.map(({ key, name }) => (
        <td key={key}>{name}</td>
      ))}
    </tr>
  </thead>
);

export default ViewerHeader;
