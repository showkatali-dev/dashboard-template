import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center space-y-3">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <p className="mt-2 text-2xl font-medium text-gray-100">
          Page Not Found
        </p>
        <p className="mt-2 text-white/60">
          The page you are looking for does not exist.
        </p>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          <BsArrowLeft />
          Go Back to home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
