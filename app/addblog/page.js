"use client"
import { useState } from 'react';
// import { useSession } from 'next-auth/react';  // Import NextAuth hook
import { useRouter } from 'next/router';

export default function CreateBlog() {
//   const { data: session } = useSession();  // Get the current session
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState('');
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  
//   const router = useRouter();

  // If user is not authenticated, redirect them to the login page
//   if (!session) {
//     router.push('/login');
//   }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the author's name from the session
    const author = session.user.name;  // Assuming name is part of the session

    // Simulate a blog post object
    const newBlogPost = {
      id: Date.now(),
      title,
      author,
      content,
      image,
      video,
      likes,
      comments,
      date: new Date().toLocaleDateString(),
    };

    // Store the new blog post in a local state (or send to an API)
    // Here, we'll just log it for now
    console.log('New Blog Post:', newBlogPost);

    // Redirect to the blog page or show the new post
    router.push('/blog');  // Or redirect to the new post page
  };

  return (
    <div className="container mx-auto px-6 py-12 ">
      <h1 className="text-5xl font-extrabold text-center text-foreground mb-10">
        Create a New Blog Post
      </h1>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6  p-8 rounded-lg shadow-lg">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-foreground">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-4 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Author field is removed since it's derived from the session */}
        <div>
          <label htmlFor="content" className="block text-lg font-medium text-foreground">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full p-4 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows="6"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-lg font-medium text-foreground">Image URL (Optional)</label>
          <input
            type="url"
            id="image"
            value={image || ''}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-4 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="video" className="block text-lg font-medium text-foreground">Video URL (Optional)</label>
          <input
            type="url"
            id="video"
            value={video || ''}
            onChange={(e) => setVideo(e.target.value)}
            className="w-full p-4 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Publish Blog Post
          </button>
        </div>
      </form>
    </div>
  );
}
