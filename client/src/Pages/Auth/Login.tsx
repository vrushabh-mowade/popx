import { useNavigate } from "react-router-dom";
import InputBox from "../../Components/InputBox";

const Login = () => {
    const navigate = useNavigate();

  return (
    <div className="flex justify-center min-h-screen bg-gray-50 ">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 pt-4">Signin to your</h1>
        <h1 className="text-2xl font-bold text-gray-900">PopX Account</h1>
        <p className="text-gray-500 mt-2">Enter your credentials to login</p>

        <form className="mt-6 space-y-4">
          <InputBox label="Email" type="email"  required />
          <InputBox label="Password" type="password"  required />

          <button onClick={()=>{navigate("/account")}} type="submit" className="w-full mt-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition">
            Login
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
