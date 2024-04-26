// iot-monitoring-frontend/src/components/MainPage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";

const MainPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check session storage for authentication state
    const authenticated = sessionStorage.getItem("isAuthenticated");
    setIsAuthenticated(authenticated);
  }, []);

  const handleAuthentication = () => {
    // Update authentication state in session storage
    sessionStorage.setItem("isAuthenticated", true);
    setIsAuthenticated(true);
  };

  return (
    <>
      <div className="bg-gray-600 h-screen">
        {!isAuthenticated && (
          <nav className="bg-gray-600 py-6">
            <div className="container mx-auto flex justify-between items-center">
              <Link to="/" className="text-white font-bold text-xl font-serif">
                Iot Data Monitoring Server
              </Link>
              <div>
                <Link
                  to="/register"
                  className="text-black bg-white rounded p-2 text-md font-serif"
                >
                  Register
                </Link>
              </div>
            </div>
          </nav>
        )}

        {!isAuthenticated && <Login onLogin={handleAuthentication} />}

        {isAuthenticated && (
          <div style={{ position: "absolute", top: "50%", left: "45%" }}>
            <Link
              to="/monitor"
              style={{
                color: "white",
                backgroundColor: "black",
                padding: "10px",
                textDecoration: "none",
              }}
              className="font-serif"
            >
              Monitor
            </Link>
            <Link
              to="/control"
              style={{
                color: "white",
                backgroundColor: "black",
                padding: "10px",
                marginLeft: "10px",
                textDecoration: "none",
              }}
              className="font-serif"
            >
              Control
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
