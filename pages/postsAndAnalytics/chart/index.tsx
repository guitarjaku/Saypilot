import { h } from "preact";
import { useState, useRef } from "preact/hooks";
import { Line } from "react-chartjs-2";

const Chart = (props: any) => {
  const chartRef = useRef(null);
  const [data, setData] = useState([]);

  const chartData = {
    labels: [],
    datasets: [
      {
        label: "",
        fill: false,
        backgroundColor: "",
        borderColor: "",
        data: data,
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
          gridLines: {
            display: true,
            drawOnChartArea: false,
          },
          scaleLabel: {
            display: true,
            labelString: "",
          },
          ticks: {},
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

  return (
    <div>
      <Line data={chartData} options={options} height={320} ref={chartRef} />
    </div>
  );
};

export default Chart;
