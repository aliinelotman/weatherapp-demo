import { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { fetchWeatherData } from './Data'

export function D3BarChart() {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [weatherData, setWeatherData] = useState(null);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        if (!dataFetched) {
            fetchWeatherData()
                .then(data => {
                    setWeatherData(data);
                    setDataFetched(true);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [dataFetched]);

    useEffect(() => {
        if (weatherData) {
            const svg = d3.select(svgRef.current);
            //  TODO: D3.js code to create the graph
        }
    }, [weatherData]);

    return (
        <div>
            <svg ref={svgRef} width={600} height={400}
            style={{
                border: "2px solid gold"
              }}></svg>
        </div>
    );
}
