import { useState, useEffect } from "react";

// Reusable hook to fetch data
const useFetchData = (dataSource) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulating fetching data
        setData(dataSource);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [dataSource]);

  return { data, loading, error };
};

export default useFetchData;

// import { useState, useEffect } from "react";
// import axios from "axios";

// /**
//  * useFetchData - Custom hook for fetching data from an API using Axios.
//  *
//  * This hook provides a reusable and modular way to fetch data asynchronously.
//  * It manages the state for data, loading, and errors, making it easy to integrate
//  * with any component that needs to retrieve data from an API.
//  *
//  * @param {string} url - The API endpoint URL from which to fetch data.
//  *
//  * @returns {Object} - Contains the fetched data, loading state, and error object.
//  * - data: The retrieved data from the API (initially null).
//  * - loading: A boolean indicating whether the data is still being loaded.
//  * - error: An error object if the request fails, otherwise null.
//  *
//  * Usage:
//  * const { data, loading, error } = useFetchData("/api/some-endpoint");
//  *
//  * - Reusability: This hook can be used in any component by simply passing
//  *   the desired API URL. It abstracts the data-fetching logic and state management.
//  * - Flexibility: Can be extended or modified to handle different request methods
//  *   (e.g., POST, PUT), query parameters, or headers if needed.
//  */
// const useFetchData = (url) => {
//   const [data, setData] = useState(null); // Change initial state to `null`
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(url); // Fetch data from API
//         setData(response.data); // Set the fetched data
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchData(); // Call the fetch function
//   }, [url]); // Dependencies include `url`

//   return { data, loading, error };
// };

// export default useFetchData;
