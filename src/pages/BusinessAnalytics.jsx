import { useEffect, useState } from 'react';
import BusinessNav from "../components/BusinessNav";
import axios from 'axios';

const BusinessAnalytics = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch analytics data from the backend
    axios.get('http://localhost:5000/api/analytics')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BusinessNav />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Business Analytics</h1>
        {/* Example Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold">Total Ad Clicks</h2>
            <p>{data.totalAdClicks}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold">Total Reviews</h2>
            <p>{data.totalReviews}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold">Average Rating</h2>
            <p>{data.averageRating}</p>
          </div>
        </div>
        {/* More sections like Ad Performance, Consumer Reviews, etc. */}
      </div>
    </div>
  );
}

export default BusinessAnalytics;
