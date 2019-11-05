import React from 'react';

import { VIEWER_FIELDS } from '../constants';
import Styles from './ViewerHeader.module.css';

const ViewerHeader = () => (
  <thead className={Styles.thead}>
    <tr>
      {VIEWER_FIELDS.map(({ key, name }) => (
        <th className={Styles[key]} key={key}>{name}</th>
      ))}
      <th className={Styles['timeline-header']}>
        Timeline chart
      </th>
    </tr>
  </thead>
);

export default ViewerHeader;
