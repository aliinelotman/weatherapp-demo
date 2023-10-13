import { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { fetchWeatherData } from './Data'

    function WeatherChart({ weatherData }) {
        const svgRef = useRef<SVGSVGElement | null>(null);
      
        useEffect(() => {
          if (data) {
            const svg = d3.select(svgRef.current);
      
            // Extract the date and temperature data
            const temperatureData = data.map((entry) => ({
              date: new Date(entry.time),
              temperature: entry['temperature_2m (°C)'],
            }));
      
            // Define chart dimensions
            const width = 600;
            const height = 400;
            const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      
            const x = d3.scaleTime().domain(d3.extent(temperatureData, (d) => d.date)).range([margin.left, width - margin.right]);
            const y = d3.scaleLinear().domain([0, d3.max(temperatureData, (d) => d.temperature)]).nice().range([height - margin.bottom, margin.top]);
      
            // Create the line function
            const line = d3
              .line()
              .x((d) => x(d.date))
              .y((d) => y(d.temperature));
      
            // Create the SVG container
            svg.attr('width', width).attr('height', height);
      
            // Draw the line chart
            svg
              .append('path')
              .datum(temperatureData)
              .attr('fill', 'none')
              .attr('stroke', 'steelblue')
              .attr('stroke-width', 1.5)
              .attr('d', line);
      
            // Add X and Y axes
            svg
              .append('g')
              .attr('transform', `translate(0,${height - margin.bottom})`)
              .call(d3.axisBottom(x));
      
            svg.append('g').attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(y));
          }
        }, [data]);
      
        return <svg ref={svgRef}></svg>;
      }
      
      export default WeatherChart;