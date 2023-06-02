import { CirclesWithBar } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="grid place-content-center h-screen">
      <CirclesWithBar
        height="150"
        width="150"
        color="#4fa94d"
        visible={true}
        outerCircleColor=""
        innerCircleColor="#EA8115"
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};

export default Spinner;
