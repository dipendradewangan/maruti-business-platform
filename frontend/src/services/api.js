// Base URL of the Express backend API.
// All frontend API requests will use this base URL.
const API_BASE_URL = "http://localhost:5000/api";

/**
 * Check whether the backend API is running.
 *
 * This function calls the backend health endpoint.
 * It will later also help us verify the complete
 * Frontend → Backend communication.
 */
export const checkBackendHealth = async () => {
  try {
    // Send GET request to the backend health endpoint
    const response = await fetch(`${API_BASE_URL}/health`);

    // Convert backend response into JSON
    const data = await response.json();

    // Return both HTTP status and response data
    return {
      success: response.ok,
      data,
    };
  } catch (error) {
    // Handle network/backend connection errors
    console.error("Backend connection failed:", error);

    return {
      success: false,
      data: {
        message: "Unable to connect to backend server",
      },
    };
  }
};