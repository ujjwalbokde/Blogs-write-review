// components/Footer.js
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer top - Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/about" className="hover:text-gray-300">About</a></li>
              <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul>
              <li><a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-gray-300">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <ul className="flex space-x-6">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <FaFacebook size={20} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <FaTwitter size={20} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <FaInstagram size={20} />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <FaLinkedin size={20} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p>Subscribe to get the latest news and updates from Blogify.</p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded bg-gray-800 text-white w-full mb-4"
              />
              <button type="submit" className="w-full p-2 rounded bg-secondary hover:bg-secondary-dark text-black">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom - Copyright */}
        <div className="mt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Blogify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
