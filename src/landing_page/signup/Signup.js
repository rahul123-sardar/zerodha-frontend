import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://zerodha-backend-1-fidb.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const message = await response.text(); // backend sends text

      if (response.ok) {
        alert(message); // "Signup successful"
        navigate("https://zerodha-dashboard1.vercel.app/");  // go to home
      } else {
        alert(message); // "Email already exists"
      }

    } catch (error) {
      alert("Backend server is not running");
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">

          <h2 className="text-center mb-4">Signup</h2>

          <form onSubmit={handleSignup}>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="btn btn-primary w-100">
              Signup
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Signup;
