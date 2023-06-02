import { useLoaderData } from "react-router-dom";
import Graph from "./Graph";
import Scorecard from "./ScoreCard";
import Table from "./Table";

const Dashboard = () => {
  const dashboardData = useLoaderData();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl text-secondary font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {dashboardData.scorecards.map((scorecard, index) => (
          <Scorecard
            key={index}
            title={scorecard.title}
            value={scorecard.value}
            trend={scorecard.trend}
            trendPercentage={scorecard.trendPercentage}
          />
        ))}
        <Graph
          title={dashboardData.graph.title}
          data={dashboardData.graph.data}
        />
        <Table
          title={dashboardData.table.title}
          filters={dashboardData.table.filters}
          data={dashboardData.table.data}
        />
      </div>
    </div>
  );
};

export default Dashboard;
