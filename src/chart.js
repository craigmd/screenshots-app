import * as d3 from 'd3';

export function DrawBarChart(data, id, width, height) {
  // margin
  const margin = {
    left: 100,
    right: 10,
    top: 10,
    bottom: 30,
  };

  // scales
  const xDomain = data.map((d) => d.country);
  const xScale = d3.scaleBand().domain(xDomain).range([0, width]).padding(0.1);
  const yDomain = d3.extent(data.map((d) => d.value));
  const yScale = d3.scaleLinear().domain(yDomain).range([height, 0]);

  // svg
  const svg = d3
    .select('#' + id)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // bars
  svg
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', function (d) {
      return xScale(d.country);
    })
    .attr('width', xScale.bandwidth())
    .attr('y', function (d) {
      return yScale(d.value);
    })
    .attr('height', function (d) {
      return height - yScale(d.value);
    })
    .attr('fill', 'white');

  // axes - fill and stroke need to be explicit for html2canvas
  const xAxis = svg
    .append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(xScale));

  xAxis.selectAll('.tick line').attr('stroke', 'white');
  xAxis.selectAll('.domain').attr('stroke', 'white');
  xAxis.selectAll('.tick text').attr('fill', 'white');

  const yAxis = svg.append('g').call(d3.axisLeft(yScale));

  yAxis.selectAll('.tick line').attr('stroke', 'white');
  yAxis.selectAll('.domain').attr('stroke', 'white');
  yAxis.selectAll('.tick text').attr('fill', 'white');
}
