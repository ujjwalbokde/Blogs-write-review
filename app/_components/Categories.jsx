"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch('/api/categories'); // Replace with your API endpoint
      const data = await response.json();
      setCategories(data);
    }

    fetchCategories();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-semibold text-center text-gray-900 mb-8">Blog Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.length === 0 ? (
          <p>No categories available.</p>
        ) : (
          categories.map(category => (
            <div key={category.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{category.name}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <Link href={`/category/${category.id}`} passHref>
                <a className="text-blue-600 hover:text-blue-800 font-medium">Explore Posts</a>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
