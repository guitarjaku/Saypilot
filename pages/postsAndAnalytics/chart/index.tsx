import { h } from "preact";
import { useState, useRef, useEffect } from "preact/hooks";
import { Line } from "react-chartjs-2";

const Chart = (props: any) => {
  const chartRef = useRef(null);

  const chartData = {
    labels: [],
    datasets: [
      {
        label: "",
        fill: false,
        backgroundColor: "",
        borderColor: "",
        data: [],
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

  const onReceive = (chartRef: any) => {
    // console.log(chartRef.current.chartInstance.config.data.datasets[0].data);
    chartRef.current.chartInstance.config.data.datasets[0].data = [];

    props.data.map((x: any) => {
      chartRef.current.chartInstance.config.data.datasets.map(
        (chart: any, i: any) => {
          chart.data.push(x);
        }
      );
    });

    // update chart datasets keeping the current animation
    chartRef.current.chartInstance.update({
      preservation: true,
    });
  };

  useEffect(() => {
    onReceive(chartRef);
  }, [props.data]);

  return (
    <div>
      <Line data={chartData} options={options} height={320} ref={chartRef} />
    </div>
  );
};

export default Chart;
