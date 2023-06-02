import { BiLineChart, BiLineChartDown } from "react-icons/bi";

const Scorecard = ({ title, value, trend, trendPercentage }) => {
  const getTrendColor = () =>
    trend === "up" ? "text-green-500" : "text-red-500";

  return (
    <div className="p-4 bg-base-100/40 rounded-xl">
      <h3 className="text-lg text-white/80 font-semibold">{title}</h3>
      <p className="text-2xl text-white font-bold">{value}</p>
      <div className="flex items-center">
        <p className={`text-sm mr-1 ${getTrendColor()}`}>{trendPercentage}</p>
        <span className={getTrendColor()}>
          {trend === "up" ? <BiLineChart /> : <BiLineChartDown />}
        </span>
      </div>
    </div>
  );
};

export default Scorecard;
