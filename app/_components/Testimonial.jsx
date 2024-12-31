export default function Testimonials() {
    const testimonials = [
      {
        id: 1,
        name: "John Doe",
        message: "Blogify helped me find amazing content on technology and improve my coding skills. Highly recommend!",
        position: "Software Engineer"
      },
      {
        id: 2,
        name: "Jane Smith",
        message: "I love writing on Blogify. It gave me the platform to share my travel stories and connect with readers.",
        position: "Travel Blogger"
      },
      {
        id: 3,
        name: "Michael Lee",
        message: "The blog posts on Blogify are insightful, and they helped me advance my career in digital marketing.",
        position: "Digital Marketer"
      }
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-8">What Our Users Are Saying</h2>
        <div className="space-y-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-card-bg p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <p className="text-lg text-gray-600 mb-4">"{testimonial.message}"</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  