import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, addDoc, collection, query, where, getDocs, orderBy, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { motion } from "framer-motion";

const BlogDetailPage = () => {
  const { Id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, "blogs", Id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBlog(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchComments = async () => {
      try {
        const q = query(
          collection(db, "comments"),
          where("blogid", "==", Id)

        );
        const querySnapshot = await getDocs(q);
        const commentsData = [];
        querySnapshot.forEach((doc) => {
          commentsData.push({ id: doc.id, ...doc.data() });
        });


        setCommentsList(commentsData);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchBlog();
    fetchComments();
  }, [Id]);

  const SaveBlog = async () => {
    const u = localStorage.getItem("users");
    if (u) {
      await addDoc(collection(db, "saveblog"), {
        userid: JSON.parse(u).uid,
        blogid: Id,
        createdAt: new Date()
      });
      alert("Blog successfully saved.");
    } else {
      alert("Please login to save the blog.");
    }
  };

  const postComment = async () => {
    const u = localStorage.getItem("users");
    if (!comment.trim()) {
      alert("Please enter a comment.");
      return;
    }
    if (u) {


      await addDoc(collection(db, "comments"), {
        userid: JSON.parse(u).uid,
        blogid: Id,
        comment,
        createdAt: serverTimestamp()
      });
      setComment("");

      const q = query(
        collection(db, "comments"),
        where("blogid", "==", Id)

      );
      const querySnapshot = await getDocs(q);
      const commentsData = [];
      querySnapshot.forEach((doc) => {
        commentsData.push({ id: doc.id, ...doc.data() });
      });
      setCommentsList(commentsData);
    } else {
      alert("Please login to post a comment.");
    }
  };

  if (loading) return <p className="text-gray-300 text-center mt-10">Loading blog...</p>;
  if (!blog) return <p className="text-red-400 text-center mt-10">Blog not found.</p>;

  return (
    <div className="bg-[#121212] min-h-screen px-5 py-10 text-gray-100 font-sans">
      <div className="max-w-4xl mx-auto bg-[#1e1e1e] rounded-2xl shadow-lg overflow-hidden">
        <motion.img
          initial={{ opacity: 0.4, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-80 object-cover"
          src={blog.imageUrl || "https://via.placeholder.com/600"}
          alt={blog.title}
        />

        <div className="p-8">
          <motion.h1
            className="text-3xl font-semibold text-white mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {blog.title}
          </motion.h1>

          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://miro.medium.com/v2/resize:fill:44:44/1*qjDK60yIk7jZmfS0hXaNDA.png"
              alt="Author"
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="text-lg font-medium">Jake Keeper</p>
              <p className="text-sm text-gray-400">3 min read · May 2017</p>
            </div>
          </div>

          <motion.div
            className="prose prose-invert max-w-none leading-relaxed text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p dangerouslySetInnerHTML={{ __html: blog.content }}></p>
          </motion.div>

          {/* Save and Back Buttons */}
          <div className="flex justify-between items-center mt-10">
            <button
              onClick={SaveBlog}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition duration-300 px-6 py-2 rounded-lg text-white shadow-md"
            >
              Save Blog
            </button>
            <button
              onClick={() => navigate(-1)}
              className="text-gray-400 hover:text-white transition duration-300"
            >
              ← Back
            </button>
          </div>

          {/* Comments Section */}
          <div className="mt-20">
            <h2 className="text-2xl font-semibold mb-4 text-white">Comments</h2>

            {/* Input box */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                type="text"
                placeholder="Write a comment..."
                className="flex-1 w-full sm:w-auto bg-[#2c2c2c] text-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={postComment}
                className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-5 py-2 rounded-lg text-white"
              >
                Post
              </button>
            </div>

            {/* Comments list */}
            {commentsList.length === 0 ? (
              <p className="text-gray-400">No comments yet. Be the first to comment!</p>
            ) : (
              <div className="space-y-5">
                {commentsList.map((c) => (
                  <div key={c.id} className="bg-[#2c2c2c] p-4 rounded-lg shadow">
                    <p className="text-gray-300">{c.comment}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {c.createdAt?.toDate ? c.createdAt.toDate().toLocaleString() : new Date(c.createdAt).toLocaleString()}
                    </p>

                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
