import * as echarts from "echarts";
import styles from "./IssuePie.module.css"
import { useEffect, useRef, useState } from "react";

export default function IssuePie(props) {
    const chartRef = useRef(null);
    const totalIssue = props.totalIssue;

    const myOption = () => {
        return ({
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                    type: 'pie',
                    id: 'issuePie',
                    radius: ['0%', '80%'],
                    data: totalIssue,
                    itemStyle: {
                        borderRadius: 7,
                        borderColor: '#fff',
                        borderWidth: 3
                    },
                    label: {
                        show: true,
                        fontSize: 14,
                        // fontWeight: 'bold',
                        position: 'inside',
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 20,
                            fontWeight: 'bold',
                        }
                    },
                },
            ],


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