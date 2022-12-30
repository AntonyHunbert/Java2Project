import * as echarts from "echarts";
import styles from "./IssueBar.module.css"
import { useEffect, useRef, useState } from "react";

export default function IssueBar(props) {
    const chartRef = useRef(null);
    const closeIssue = props.closeIssue;

    const myOption = () => {
        return ({
            title: {
                text: "issue resolution time",
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
                dimentions: ['name', 'value'],
                source: closeIssue,
            },
            xAxis: { type: 'category' },
            yAxis: {type: 'value'},
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