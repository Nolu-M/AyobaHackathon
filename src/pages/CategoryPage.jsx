import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryName } = useParams();

  return (
    <div>
      <h1>Businesses in {categoryName}</h1>
      {/* Add your logic to fetch and display businesses in the selected category */}
    </div>
  );
};

export default CategoryPage;
