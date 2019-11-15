import React from 'react';
import 'react-vis/dist/style.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries, VerticalBarSeries, RadialChart
} from 'react-vis';

const dataForRadialChart = [{angle: 1}, {angle: 5,  label: 'Super Custom label', subLabel: 'With annotation'}, {angle: 3}];
const MSEC_DAILY = 273600000;  // милессикуннды

class Chart extends React.Component {
    render() {
        const timestamp = new Date('November 1 2019').getTime();
        return (
        <div>
            <h2>График №1</h2>
            <XYPlot xType="linear" width={700} height={300}>
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis title="X Axis" />
                <YAxis title="Y Axis" />
                <LineSeries
                    data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
                />
                <LineSeries data={null} />
                <LineSeries
                    data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 4, y: 2}, {x: 5, y: 15}]}
                />
            </XYPlot>

            <h2>График №2</h2>
            <XYPlot margin={{bottom: 70}} xType="ordinal" width={700} height={300}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis tickLabelAngle={-45} />
                <YAxis />
                <VerticalBarSeries
                    data={[
                        {x: 'Apples', y: 10},
                        {x: 'Bananas', y: 5},
                        {x: 'Cranberries', y: 15}
                    ]}
                />
                <VerticalBarSeries
                    data={[
                        {x: 'Apples', y: 12},
                        {x: 'Bananas', y: 2},
                        {x: 'Cranberries', y: 11}
                    ]}
                />
            </XYPlot>

            <h2>Круговая диаграмма</h2>
            <RadialChart
                data={dataForRadialChart}
                width={300}
                height={300} />

            <h2>Временной график</h2>
            <XYPlot xType="time" width={700} height={300}>
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis title="November" />
                <YAxis title="Value" />
                <LineSeries
                    data={[
                        {x: timestamp + MSEC_DAILY, y: 3},
                        {x: timestamp + MSEC_DAILY * 2, y: 5},
                        {x: timestamp + MSEC_DAILY * 3, y: 15},
                        {x: timestamp + MSEC_DAILY * 4, y: 12}
                    ]}
                />
                <LineSeries data={null} />
                <LineSeries
                    data={[
                        {x: timestamp + MSEC_DAILY, y: 10},
                        {x: timestamp + MSEC_DAILY * 2, y: 4},
                        {x: timestamp + MSEC_DAILY * 3, y: 2},
                        {x: timestamp + MSEC_DAILY * 4, y: 15}
                    ]}
                />
            </XYPlot>
        </div>
        );
    }
}

export default Chart;
