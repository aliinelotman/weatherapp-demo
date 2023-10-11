import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

  
function D3BarChart({ data }: any) {
  const svgRef = useRef();

  useEffect(() => {
    // Create the SVG container for the chart
    const svg = d3.select(svgRef.current);

    // Your D3.js code to create the graph goes here

  }, [data]);

  return (
    <div>
      <svg ref={svgRef} width={600} height={400}></svg>
    </div>
  );
}
