import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeClosed } from "lucide-react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registered:", { name, email, password });
    localStorage.setItem("user", JSON.stringify({ name, email, password }));

    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border-1 border-gray-300 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-orange-600 font-medium"
              >
                {showPassword ? <EyeClosed /> : <Eye />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-400 transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-5">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-orange-600 hover:underline font-bold"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
