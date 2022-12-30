import * as echarts from "echarts";
import styles from "./ReleaseLine.module.css"
import { useEffect, useRef, useState } from "react";

export default function ReleaseLine(props) {
    const chartRef = useRef(null);
    const releaseData = props.releaseData;

    const myOption = () => {
        return ({
            title: {
                left: 'center',
                text: 'releases for this repo',
                textStyle: {
                    fontSize: 25,
                    align: 'center',
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: '{b}' 
            },
            dataset: {
                dimentions: ['author', 'message', 'date', 'name', 'commitNum'],
                source: releaseData,
            },
            xAxis: { type: 'category' },
            yAxis: {},
            series: [
                {
                    type: 'line',
                    encode: {
                        x: 'name',
                        y: 'commitNum',
                    },
                },
            ]

        })
    }

    useEffect(() => {
        let myChart = echarts.init(chartRef.current);

        myChart.setOption(myOption());

    }, [myOption()])

    return(
        <div className={styles.box1}>
            <div className={styles.box2}
                ref={chartRef}
            ></div>
        </div>
    )

}