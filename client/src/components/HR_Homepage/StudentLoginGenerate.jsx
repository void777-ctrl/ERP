import { useState } from "react";

const StudentLoginGenerate = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    console.log("Form Submitted");
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold text-gray-900 text-center mb-4">Generate Student Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 mb-4">

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmpassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmpassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-2.5 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition ${
              password !== confirmPassword ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={password !== confirmPassword}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentLoginGenerate;
