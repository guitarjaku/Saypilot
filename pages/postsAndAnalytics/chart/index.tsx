import React from "react";
import { useRef, useEffect, useState } from "preact/hooks";
import Chart from "chart.js";
// import { Line } from "react-chartjs-2";

const LineChart = (props: any) => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  const chartData = {
    labels: [],
    datasets: [
      {
        label: "",
        fill: false,
        backgroundColor: "",
        borderColor: "",
        data: props.data,
      },
    ],
  };

  const options = {
    responsive: true,
    centerText: {
      display: true,
      text: ``,
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            displayFormats: {
              second: "h:mm:ss",
            },
          },
          scaleLabel: {
            display: true,
            labelString: "Times",
          },
          gridLines: {
            display: true,
            // drawOnChartArea: false,
          },
        },
      ],
      yAxes: [
        {
          position: "right",
          gridLines: {
            display: true,
            drawOnChartArea: false,
          },
          scaleLabel: {
            display: true,
            labelString: "",
          },
          ticks: {
            min: 0,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    animation: {
      duration: 0,
    },
    annotation: {
      annotations: [
        {
          drawTime: "beforeDatasetsDraw",
          type: "box",
          xScaleID: "x-axis-0",
          yScaleID: "y-axis-0",
          borderWidth: 0,
          backgroundColor: "rgba(46, 204, 113,0.3)",
        },
      ],
    },
    maintainAspectRatio: false,
  };

  const chartConfig = {
    type: "line",
    data: chartData,
    options: options,
  };

  const onReceive = (chartRef: any) => {
    console.log(chartRef);
    if (chartRef) {
      chartRef.config.data.datasets[0].data = [];
    }
    props.data.map((x: any) => {
      chartRef.config.data.datasets.map((chart: any, i: any) => {
        chart.data.push(x);
      });
    });
    // update chart datasets keeping the current animation
    // chartRef.update({
    //   preservation: true,
    // });
  };

  useEffect(() => {
    if (chartRef && chartRef.current) {
      // @ts-ignore
      const newChartInstance = new Chart(chartRef.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [props.data]);

  return (
    <div>
      {/* <Line data={chartData} options={options} height={320} ref={chartRef} /> */}
      <canvas ref={chartRef} height={320} />
    </div>
  );
};

export default LineChart;
