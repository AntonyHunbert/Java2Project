import * as echarts from "echarts";
import styles from './CommitScatter.module.css'
import { useEffect, useRef, useState } from "react";

export default function CommitScatter(props) {
    const chartRef = useRef(null);
    const dateData = props.dateData;
    const BASE_TIME = "2016-01-01";
    const myOption = () => {
        return ({
            title: {
                text: "commit time analysis",
                textStyle: {
                    fontSize: 25,
                    align: 'center',
                }
            },
            dataset: {
                dimentions: ['date', 'time'],
                source: dateData,
            },
            xAxis: {
                show: 'true',
                type: 'time',
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                // boundaryGap: 'false',
            },
            yAxis: {
                show: 'true',
                type: 'time',
                min: `${BASE_TIME} 0:00:00`,
                max: `${BASE_TIME} 23:59:59`,
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                },
                formatter: '{b}' 
            },
            series: [
                {
                    type: 'scatter',
                    symbolSize: 10,
                }
            ]


        })
    }

    useEffect(() => {
        let myChart = echarts.init(chartRef.current);

        myChart.setOption(myOption());

    }, [myOption()])

    return (
        <div className={styles.box1}>
            <div className={styles.box2}
                ref={chartRef}
            ></div>
        </div>
    )
}