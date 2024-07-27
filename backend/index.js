import express from 'express';
import cors from 'cors';
const app = express();
const port = 5000;

app.use(cors());

// Mock data
const analyticsData = {
  totalAdClicks: 1200,
  totalReviews: 300,
  averageRating: 4.5,
  // Add more data as needed
};

app.get('/api/analytics', (req, res) => {
  res.json(analyticsData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
