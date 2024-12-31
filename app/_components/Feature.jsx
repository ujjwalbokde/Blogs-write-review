"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Feature() {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    async function fetchFeaturedPosts() {
      const response = await fetch('/api/featured-posts'); // Replace with your API endpoint for featured posts
      const data = await response.json();
      setFeaturedPosts(data);
    }
    
    fetchFeaturedPosts();
  }, []);

  return (
    <div>

      {/* Featured Blog Posts Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-8">Featured Blog Posts</h2>
        
        {/* Blog Posts List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.length === 0 ? (
            <p>No featured posts available.</p>
          ) : (
            featuredPosts.map(post => (
              <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} passHref>
                  <a className="text-blue-600 hover:text-blue-800 font-medium">Read more</a>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
