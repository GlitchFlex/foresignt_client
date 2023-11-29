import React, { useState } from 'react';
import {
    LineChart,
    ResponsiveContainer,
    Line,
    Tooltip,
    CartesianGrid,
    XAxis,
    YAxis,
} from 'recharts';
import './Charts.css';
import { Button } from 'antd';
// import { Tooltip } from 'antd';

function Chart() {
    const [mode, setMode] = useState('inflow');

    const timelineData = [
        {
            date: '2023-08-26',
            day: 'saturday',
            humidity: 87.1,
            condition: false,
            inflow: 0.174,
            outflow: 83.1,
            index: 0,
            windspeed: 9.2,
        },
        {
            date: '2023-08-27',
            day: 'sunday',
            humidity: 75.7,
            inflow: 0.156,
            condition: false,
            index: 1,
            outflow: 87.9,
            windspeed: 9.2,
        },
        {
            date: '2023-08-28T00:30:00+05:30',
            day: 'monday',
            humidity: 59.3,
            inflow: 0.15,
            index: 2,
            condition: true,
            outflow: 30.6,
            windspeed: 6.8,
        },
        {
            date: '2023-08-29T00:30:00+05:30',
            day: 'tuesday',
            humidity: 60.1,
            inflow: 0.4,
            condition: true,
            index: 3,
            outflow: 31.2,
            windspeed: 9.5,
        },
        {
            date: '2023-08-30T00:30:00+05:30',
            day: 'wednesday',
            humidity: 58.2,
            inflow: 0.2,
            index: 4,
            condition: true,
            outflow: 31.9,
            windspeed: 6.8,
        },
    ];

    return (
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', gap: '15px', marginBottom : "20px" }}>
                <Button
                    type="primary"
                    shape="round"
                    className= {mode === 'inflow' ? 'buttonsActive' : 'buttons'}
                    onClick={() => setMode('inflow')}
                >
                    Inflow
                </Button>
                <Button
                    type="primary"
                    shape="round"
                    className= {mode === 'inflow' ? 'buttons' : 'buttonsActive'}
                    onClick={() => setMode('outflow')}
                >
                    Outflow
                </Button>
            </div>

            <div className="chart">
                <ResponsiveContainer width="92%" aspect={2.3}>
                    <LineChart
                        data={timelineData}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // borderBottom : "2px solid lightgrey"
                        }}
                    >
                        {/* <XAxis dataKey={"day"}  stroke = "black" style={{fontSize :"14px"}}/> */}
                        {/* <YAxis stroke = "black" style={{fontSize :"14px"}}/> */}
                        {/* <CartesianGrid stroke="gray" /> */}
                        <Tooltip />
                        <Line type="monotone" dataKey={mode} stroke="black" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Chart;
