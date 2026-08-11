import { useEffect, useState } from "react";

// Import backend health-check function
import { checkBackendHealth } from "../services/api";

const Dashboard = () => {
  // Store backend health information
  const [health, setHealth] = useState(null);

  // Store loading state while API request is running
  const [loading, setLoading] = useState(true);

  // Check backend when Dashboard loads
  useEffect(() => {
    const checkHealth = async () => {
      // Call Express backend
      const result = await checkBackendHealth();

      // Store API response
      setHealth(result);

      // Stop loading state
      setLoading(false);
    };

    checkHealth();
  }, []);

  // Display loading message
  if (loading) {
    return <div>Checking backend connection...</div>;
  }

  return (
    <div>
      {/* Dashboard heading */}
      <h1>Maruti Business Platform</h1>

      {/* Backend connection status */}
      <h2>System Health</h2>

      {health?.success ? (
        <div>
          <p>Backend: Connected ✅</p>

          <p>
            Message: {health.data?.message}
          </p>

          <p>
            Database: {health.data?.database || "Not Checked"}
          </p>
        </div>
      ) : (
        <div>
          <p>Backend: Disconnected ❌</p>

          <p>
            {health?.data?.message || "Backend is unavailable"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;