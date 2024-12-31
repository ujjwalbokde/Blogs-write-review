"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
// Sample Data for Blog Posts
const sampleBlogs = [
  {
    id: 1,
    title: "Understanding React and Next.js",
    author: "John Doe",
    content: "React and Next.js are powerful frameworks for building web applications. Here's how they can help you build modern, performant websites.",
    date: "January 15, 2024",
    likes: 45,
    comments: [
      { id: 1, text: "Great post! Very informative." },
      { id: 2, text: "I love how simple you made the concepts!" }
    ],
    image: "/path/to/image.jpg",  // Sample image path
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",  // Sample YouTube video embed link
  },
  {
    id: 2,
    title: "Exploring the World of Machine Learning",
    author: "Jane Smith",
    content: "Machine learning is revolutionizing many industries. This post explains the basics and how it is applied in real-world problems.",
    date: "January 20, 2024",
    likes: 32,
    comments: [
      { id: 1, text: "Thanks for breaking this down!" },
      { id: 2, text: "Interesting read. Looking forward to more on this topic." }
    ],
    image: "/path/to/another-image.jpg",  // Another image path
    video: "",  // No video for this post
  },
  // Add 8 more blog posts with similar structure...
];
export default function Feature() {
  const [featuredPosts, setFeaturedPosts] = useState(sampleBlogs);

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
              <div key={post.id} className="bg-card-bg p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.author}</p>
                <Link href={`/blog/${post.id}`} passHref>
                  <h1 className="text-blue-600 hover:text-blue-800 font-medium">Read more</h1>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
