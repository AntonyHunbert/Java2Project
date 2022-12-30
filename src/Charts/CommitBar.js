import * as echarts from "echarts";
import styles from "./CommitBar.module.css"
import { useEffect, useRef, useState } from "react";

export default function CommitBar(props) {

    const chartRef = useRef(null);

    const devData = props.devData;

    const myOption = () => {
        return ({
            title: {
                left: 'center',
                text: 'developers for this repo',
                textStyle: {
                    fontSize: 25,
                    align: 'center',
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            dataset: {
                dimentions: ['name', 'commit_number'],
                source: devData,
            },
            xAxis: { type: 'category' },
            yAxis: {},
            series: [{ type: 'bar' }]
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
