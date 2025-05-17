import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogCollection = collection(db, "blogs");
      const snapshot = await getDocs(blogCollection);
      const blogList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogList);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-[#121212] min-h-screen py-10 px-4 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-[#fca311] tracking-wide animate-fade-in-down">
          Histopedia Blogs
        </h2>

        

        
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#1e1e1e] rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
            >
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3">{blog.desc}</p>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="inline-block mt-4 text-[#fca311] hover:underline text-sm font-medium"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in-down {
            animation: fade-in-down 0.5s ease-out forwards;
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.5s ease-out forwards;
          }

          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default BlogPage;
