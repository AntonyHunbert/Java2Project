import * as echarts from "echarts";
import styles from "./CommitPie.module.css"
import { useEffect, useRef, useState } from "react";

export default function CommitPie(props) {
    const chartRef = useRef(null);

    const cTime = props.cTime;
    const weekData = props.weekData;

    const myOption = () => {
        return ({
            tooltip: {
                trigger: 'item'
              },
            series: [
                {
                    type: 'pie',
                    id: 'weekPie',
                    radius: ['85%', '90%'],
                    data: weekData,
                    itemStyle: {
                        borderRadius: 10,
                        // borderColor: '#fff',
                        // borderWidth: 10
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 20,
                            fontWeight: 'bold',
                        }
                    },
                    
                },
                {
                    type: 'pie',
                    id: 'timePie',
                    radius: ['0%', '83%'],
                    data: cTime,
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
                }
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