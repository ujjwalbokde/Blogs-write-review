// app/page.js
export default function Hero() {
  return (
    <div className="relative bg-gray-800 text-white">
      {/* Hero Section */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/path-to-your-image.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl">
          Discover and Share Amazing Blogs
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          A platform to read, write, and connect with others through insightful
          blogs.
        </p>
        <div className="flex justify-center items-center py-8">
          <div className="w-48 h-48 relative">
            <iframe
              src="https://giphy.com/embed/ic1jCtqVzH46YWOFJn"
              width="100%"
              height="100%"
              style={{ position: "absolute" }}
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mt-4">
          <a
            href="/blogs"
            className="inline-block bg-primary text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-primary/80 transition-all duration-200"
          >
            Explore Blogs
          </a>
        </div>
        
      </div>
    </div>
  );
}
