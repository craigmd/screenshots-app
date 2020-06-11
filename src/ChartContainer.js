import React, { useEffect } from 'react';
import { DrawBarChart } from './chart';

export function ChartContainer({ data, id }) {
  useEffect(() => {
    DrawBarChart(data, id, 400, 300);
  }, [data, id]);

  return <div id={id} className="chart-root" />;
}
