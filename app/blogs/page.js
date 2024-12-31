"use client"
import { useState } from 'react';

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

export default function BlogPage() {
  const [blogs, setBlogs] = useState(sampleBlogs);

  // Handle Like
  const handleLike = (id) => {
    const updatedBlogs = blogs.map(blog => 
      blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
    );
    setBlogs(updatedBlogs);
  };

  // Handle Comment
  const handleComment = (id, commentText) => {
    const updatedBlogs = blogs.map(blog =>
      blog.id === id
        ? {
            ...blog,
            comments: [...blog.comments, { id: Date.now(), text: commentText }]
          }
        : blog
    );
    setBlogs(updatedBlogs);
  };

  // Render Blog Posts
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-5xl font-extrabold text-center text-foreground mb-10">
        Our Latest Blogs
      </h1>

      {/* Blog Posts - Single Column Layout */}
      <div className="grid grid-cols-1 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-card-bg p-6 rounded-lg shadow-lg">
            {/* Blog Title */}
            <h2 className="text-3xl font-semibold text-foreground">{blog.title}</h2>

            {/* Blog Meta */}
            <p className="text-sm text-foreground mb-4">
              <span className="font-medium">By {blog.author}</span> | <span>{blog.date}</span>
            </p>

            {/* Blog Content */}
            <p className="text-lg text-foreground mb-4">{blog.content}</p>

            {/* Image or Video */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="lg:col-span-1">
                {blog.image && <img src={blog.image} alt={blog.title} className="w-full h-auto mb-4 rounded-lg" />}
                {blog.video && (
                  <div className="relative pb-[56.25%] mb-4">
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full rounded-lg" 
                      src={blog.video} 
                      title="Blog Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>

              {/* Comments Section */}
              <div className="lg:col-span-1 mt-6 lg:mt-0">
                <h3 className="text-lg font-semibold text-foreground mb-4">Comments ({blog.comments.length})</h3>
                <div className="space-y-4 mb-6">
                  {blog.comments.map((comment) => (
                    <p key={comment.id} className="text-sm text-foreground">{comment.text}</p>
                  ))}
                </div>

                {/* Add Comment */}
                <div>
                  <textarea
                    placeholder="Add a comment..."
                    className="w-full p-4 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    rows="3"
                    onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
                    onBlur={(e) => handleComment(blog.id, e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Likes and Share */}
            <div className="flex items-center justify-between mt-4">
              {/* Like Button */}
              <button
                onClick={() => handleLike(blog.id)}
                className="flex items-center text-primary hover:text-primary-dark transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21c-1.5 0-3-1.2-4-2.4C6 16.6 2 12 2 8a6 6 0 1 1 12 0c0 4-4 8-6 10.6C15 19.8 13.5 21 12 21z"></path>
                </svg>
                Like {blog.likes}
              </button>

              {/* Share Button */}
              <button className="flex items-center text-primary hover:text-primary-dark transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h4a2 2 0 0 1 2 2v4m-6 6h4a2 2 0 0 1 2 2v4m-6-6h-4a2 2 0 0 1-2-2v-4m6-6h-4a2 2 0 0 1-2-2v-4m-4 10h4v4m0-4l4 4m0-4l-4-4"></path>
                </svg>
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
