import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface WeatherGraphProps {
  data: number[];
}

const WeatherGraph: React.FC<WeatherGraphProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (data.length > 0) {
      const createChart = () => {
        const w = 800;
        const h = 600;
        const svg = d3.select(svgRef.current)
          .attr('width', w)
          .attr('height', h)
          .style('overflow', 'visible')
          .style('background', '#c5f6ff');

        const xScale = d3.scaleLinear()
          .domain([0, data.length - 1])
          .range([0, w]);

        const yScale = d3.scaleLinear()
          .domain([0, d3.max(data) || 100])
          .range([h, 0]);

        const generateLine = d3.line<number>()
          .x((d, i) => xScale(i))
          .y((d) => yScale(d))
          .curve(d3.curveCardinal);

        const xAxis = d3.axisBottom(xScale)
          .ticks(data.length > 1 ? data.length : 1)
          .tickFormat(d3.format('d'));

        const yAxis = d3.axisLeft(yScale).ticks(7);

        svg.append('g').call(xAxis).attr('transform', `translate(0,${h})`);
        svg.append('g').call(yAxis);

        svg.append('path')
          .datum(data)
          .attr('fill', 'none')
          .attr('stroke', 'blue')
          .attr('stroke-width', 2)
          .attr('d', generateLine);
      };

      createChart();
    } else {
      console.log('Andmed ei jõudnud kohale.');
    }
  }, [data]);

  if (data.length === 0) {
    return (
      <div>
        <h2>Temperatuurigraafik täna</h2>
        <div>Laadin</div>
      </div>
    );
  }

  return (
    <div>
      <h2>Temperatuurigraafik täna</h2>
      <svg ref={svgRef} style={{ margin: '100px', display: 'block' }}></svg>
    </div>
  );
};

export default WeatherGraph;
