import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip,
} from 'recharts';

const TimelineChart = ({ timings, maxTime }) => (
  <div>
    <ResponsiveContainer height={50} width={300}>
      <BarChart layout="vertical" data={[timings]}>
        <XAxis hide type="number" domain={[-timings.startTime, maxTime]} />
        <YAxis hide dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="blocked" stackId="a" fill="#A1000C" />
        <Bar dataKey="dns" stackId="a" fill="#DCC9E5" />
        <Bar dataKey="ssl" stackId="a" fill="#E78057" />
        <Bar dataKey="connect" stackId="a" fill="#DB8553" />
        <Bar dataKey="send" stackId="a" fill="#3C96C4" />
        <Bar dataKey="wait" stackId="a" fill="#7CA0BF" />
        <Bar dataKey="receive" stackId="a" fill="#65B955" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

TimelineChart.propTypes = {
  timings: PropTypes.object.isRequired,
  maxTime: PropTypes.number.isRequired,
};

export default TimelineChart;
