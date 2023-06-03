import Chart from "react-apexcharts";

const Scorecard = ({ title, value, trend, trendPercentage }) => {
  const options = {
    chart: {
      height: 250,
      type: "radialBar",
      offsetY: -40,
    },
    colors: ["#fe4c00"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#333",
          margin: 10,
          startAngle: -90,
          endAngle: 90,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "20px",
            show: true,
            color: trend === "up" ? "green" : "red",
            offsetY: -4,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#F450D3"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "butt",
    },
    labels: ["Progress"],
  };

  return (
    <div className={`p-4 bg-base-100/40 overflow-hidden rounded-xl`}>
      <h3 className="text-lg text-white/80 font-semibold mb-1">{title}</h3>
      <div className="flex flex-wrap xl:flex-nowrap justify-between gap-4">
        <div>
          <p className="text-2xl text-white font-bold">{value}</p>
        </div>
        <div className="shrink-0 h-24">
          <Chart
            options={options}
            series={[trendPercentage.split("%")[0]]}
            type="radialBar"
          />
        </div>
      </div>
    </div>
  );
};

export default Scorecard;
