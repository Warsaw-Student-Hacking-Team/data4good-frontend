import React from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid} from 'recharts';

const randomInt = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const data = new Array(10).fill(null).map((_, i) => ({
    day: `${i+1}.05`,
    score: randomInt(10, 30)
}))

const RoundedRectangularBar = (props) => {
    const {x, y, width, height, fill, edgeColor} = props;
    const radius = 5; // adjust the radius as needed

    return (
        <path
            d={`
        M${x},${y + radius}
        L${x},${y + height}
        L${x + width},${y + height}
        L${x + width},${y + radius}
        Q${x + width},${y} ${x + width - radius},${y}
        L${x + radius},${y}
        Q${x},${y} ${x},${y + radius}
        Z
      `}
            fill={fill}
            stroke={edgeColor}
        />
    );
};


const PointsDailyChart = () => {
    return (
        <BarChart
            width={300}
            height={100}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            {/*<CartesianGrid strokeDasharray="3 3"/>*/}
            <XAxis
                dataKey="day"
                angle={-90}
                textAnchor="end"
                tick={{ fontSize: 12 }} // Change font size
                interval={0} // Show all labels
            />
            {/*<YAxis/>*/}
            <Bar dataKey="score"
                 barSize={10}
                 shape={<RoundedRectangularBar/>}
                 label={{position: 'top'}} width={3}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#0F1828" // Transparent fill color
                          edgeColor="none" />
                ))}
            </Bar>
        </BarChart>
    );
}

export default PointsDailyChart