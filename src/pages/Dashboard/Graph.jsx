import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";

const Graph = ({ title, data }) => {
  const option = {
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundColor: "rgba(0, 0, 0, 0.59)",
      borderWidth: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      show: false,
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: data.map((item) => item.category),
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        type: "line",
        smooth: true,
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 191, 0)",
            },
            {
              offset: 1,
              color: "#F450D3",
            },
          ]),
          width: 4,
        },
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            {
              offset: 0,
              color: "#FE4C00",
            },
            {
              offset: 1,
              color: "rgba(255,144,70,0.1)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        showSymbol: false,
        data: data.map((item) => item.revenue),
      },
    ],
  };

  return (
    <div className="bg-base-100/40 rounded-2xl p-4">
      <h1 className="text-secondary text-2xl font-bold">{title}</h1>
      <ReactECharts option={option} />
    </div>
  );
};

export default Graph;
