import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="flex items-end  w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Welcome to PopX</h1>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="mt-6 mb-8 space-y-3">
            <button onClick={()=>{navigate("/signup")}} className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition">
              Create Account
            </button>
            <button onClick={()=>{navigate("/login")}} className="w-full py-3 bg-purple-200 text-purple-700 font-semibold rounded-lg shadow-md hover:bg-purple-300 transition">
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
