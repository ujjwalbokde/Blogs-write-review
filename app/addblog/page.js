"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineFileImage } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);
  const [preview, setPreview] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  // const router = useRouter();  

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlogPost = {
      title,
      content,
      media,
      likes,
      comments,
      date: new Date().toLocaleDateString(),
    };

    console.log("New Blog Post:", newBlogPost);

    // router.push("/blog"); // Redirect after submission
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-center text-foreground mb-8">
        Create a New Post
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6"
      >
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="What's on your mind?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <textarea
          placeholder="Share your thoughts..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          rows="4"
          required
        />

        {preview && (
          <div className="relative">
            {media.type.startsWith("image/") ? (
              <img
                src={preview}
                alt="Preview"
                className="w-48 h-auto rounded-lg"
              />
            ) : (
              <video controls className="w-full rounded-lg h-48">
                <source src={preview} type={media.type} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          <label
            htmlFor="media"
            className="flex items-center space-x-2 text-primary cursor-pointer"
          >
            <AiOutlineFileImage size={24} />
            <span>Upload Media</span>
          </label>
          <input
            type="file"
            id="media"
            accept="image/*,video/*"
            className="hidden"
            onChange={handleMediaChange}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary flex"
          ><span className="pr-2">Post</span>
             <FiSend size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
