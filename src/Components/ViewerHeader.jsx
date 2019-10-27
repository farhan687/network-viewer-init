import React from 'react';

import { VIEWER_FIELDS } from '../constants';
import Styles from './ViewerHeader.styles.css';

const ViewerHeader = () => (
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

export default ViewerHeader;
