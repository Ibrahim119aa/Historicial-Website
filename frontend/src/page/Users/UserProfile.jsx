import React, { useState, useEffect } from "react";
import { LogOut, Pencil } from "lucide-react";
import { collection, updateDoc, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { updateEmail, updatePassword } from "firebase/auth";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [saveLandmark, setsaveLandmark] = useState();
  const [user, setuser] = useState();
  const [quizResults, setQuizResults] = useState([]);
  const [saveBlog, setSaveBlog] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState("history");

  const [notification, setnotification] = useState([]);

  const n = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("users");
    alert("You have successfully logged out.");
    n("/");
  };

  const getUser = async (userId) => {
    const blogQuery = query(collection(db, "users"), where("uid", "==", userId));
    const snapshot = await getDocs(blogQuery);
    if (!snapshot.empty) {
      const docSnap = snapshot.docs[0];
      const userData = { id: docSnap.id, ...docSnap.data() };
      setuser(userData);
    }
  };

  const getUserInfo = () => {
    let u = localStorage.getItem("users");
    if (u) setUserInfo(JSON.parse(u));
  };

  const getNotification = async () => {
    const blogQuery = query(collection(db, "notification"), where("userstatus", "==", "unseen"));
    const snapshot = await getDocs(blogQuery);
    const blogList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setnotification(blogList);
  };

  const getSaveLandMark = async (userId) => {
    const blogQuery = query(collection(db, "savelandmark"), where("userid", "==", userId));
    const snapshot = await getDocs(blogQuery);
    const blogList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setsaveLandmark(blogList);
  };

  const getSaveBlog = async (userId) => {
    try {
      const q = query(collection(db, "saveblog"), where("userid", "==", userId));
      const querySnapshot = await getDocs(q);
      const results = await Promise.all(
        querySnapshot.docs.map(async (docSnap) => {
          const data = docSnap.data();
          const quizRef = doc(db, "blogs", data.blogid);
          const quizSnap = await getDoc(quizRef);
          const quizData = quizSnap.exists() ? quizSnap.data() : {};
          return {
            ...data,
            title: quizData.title || "Untitled Blog",
            topic: quizData.topic || "General",
            blogid: data.blogid,
            createdAt: new Date(data.createdAt?.seconds * 1000).toLocaleDateString(),
            imageurl: quizData.imageUrl
          };
        })
      );
      setSaveBlog(results);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const getQuizResults = async (userId) => {
    try {
      const q = query(collection(db, "quizresult"), where("userid", "==", userId));
      const querySnapshot = await getDocs(q);
      const results = await Promise.all(
        querySnapshot.docs.map(async (docSnap) => {
          const data = docSnap.data();
          const quizRef = doc(db, "quizzes", data.quizid);
          const quizSnap = await getDoc(quizRef);
          const quizData = quizSnap.exists() ? quizSnap.data() : {};
          return {
            ...data,
            title: quizData.title || "Untitled Quiz",
            topic: quizData.topic || "General",
            quizid: quizData.id,
            createdAt: new Date(data.createdAt?.seconds * 1000).toLocaleDateString(),
            percentage: data.percentage?.toFixed(2),
          };
        })
      );
      setQuizResults(results);
    } catch (error) {
      console.error("Error fetching quiz results:", error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (userInfo?.uid) {
      getQuizResults(userInfo.uid);
      getSaveBlog(userInfo.uid);
      getSaveLandMark(userInfo.uid);
      getUser(userInfo.uid);
      getNotification();

    }
  }, [userInfo]);

  const handleChange = (field, value) => {
    setuser((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      setEditMode(false);
      const userId = user?.uid;
      const userRef = doc(db, "users", user.id);

      await updateDoc(userRef, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      });

      const currentUser = auth.currentUser;
      if (currentUser) {
        if (user.email !== currentUser.email) {
          await updateEmail(currentUser, user.email);
        }
        if (user.password && user.password.length >= 6) {
          await updatePassword(currentUser, user.password);
        }
      }
    } catch (error) {
      console.error("Error updating user info:", error);
      alert("Failed to update user info: " + error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-6 text-white animate-fade-in">
      <div className="bg-[#121212] border border-[#2c2c2c] shadow-lg rounded-3xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">User Profile</h2>
          <button onClick={() => setEditMode(!editMode)} className="p-2 rounded hover:bg-[#1f1f1f] transition-all">
            <Pencil size={20} />
          </button>
        </div>

        <div className="grid gap-5">
          <input disabled={!editMode} value={user?.firstName} onChange={(e) => handleChange("firstName", e.target.value)} placeholder="First Name" className="bg-[#1e1e1e] border border-[#3a3a3a] text-white rounded-xl px-4 py-3 w-full focus:outline-none" />
          <input disabled={!editMode} value={user?.lastName || ""} onChange={(e) => handleChange("lastName", e.target.value)} placeholder="Last Name" className="bg-[#1e1e1e] border border-[#3a3a3a] text-white rounded-xl px-4 py-3 w-full focus:outline-none" />
          <input disabled={!editMode} value={user?.email || ""} onChange={(e) => handleChange("email", e.target.value)} placeholder="Email" className="bg-[#1e1e1e] border border-[#3a3a3a] text-white rounded-xl px-4 py-3 w-full focus:outline-none" />
          <input disabled={!editMode} type="password" value={user?.password || ""} onChange={(e) => handleChange("password", e.target.value)} placeholder="Password" className="bg-[#1e1e1e] border border-[#3a3a3a] text-white rounded-xl px-4 py-3 w-full focus:outline-none" />

          {editMode && (
            <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold">
              Save Changes
            </button>
          )}
        </div>

        <div className="mt-10">
          <div className="flex justify-around border-b border-[#2c2c2c]">
            {["history", "streak", "saved", "Notification"].map((tab) => (
              <button key={tab} className={`py-2 px-4 ${activeTab === tab ? "border-b-2 border-blue-500 text-blue-400" : "text-gray-400"}`} onClick={() => setActiveTab(tab)}>
                {tab === "history" ? "Quiz Results" : tab === "streak" ? "Saved Blogs" : tab === "Notification" ? "Notification" : "Saved Landmarks"}
              </button>
            ))}
          </div>

          <div className="mt-6 max-h-56 overflow-y-auto">
            {activeTab === "history" && (
              <ul className="space-y-4">
                {quizResults.length > 0 ? (
                  quizResults.map((res, i) => (
                    <Link to={`/quizz/${res.quizid}`} key={i} className="block hover:text-blue-400">
                      <li>
                        <span className="font-semibold text-white">{res.title}</span> ({res.topic}) – <span className="text-green-500">{res.percentage}%</span> on <span className="text-gray-400">{res.createdAt}</span>
                      </li>
                    </Link>
                  ))
                ) : (
                  <p>No quiz results found.</p>
                )}
              </ul>
            )}

            {activeTab === "streak" && (
              <ul className="space-y-4">
                {saveBlog.length > 0 ? (
                  saveBlog.map((res, i) => (
                    <Link to={`/blogs/${res.blogid}`} key={i} className="flex gap-4 items-center hover:text-blue-400">
                      <img className="w-20 h-14 rounded-lg object-cover" src={res.imageurl} alt="" />
                      <span className="text-white font-medium">{res.title}</span>
                    </Link>
                  ))
                ) : (
                  <p>No blogs found.</p>
                )}
              </ul>
            )}

            {activeTab === "saved" && (
              <ul className="space-y-4">
                {saveLandmark.length > 0 ? (
                  saveLandmark.map((res, i) => (
                    <li key={i} className="text-white font-medium">
                      {res.name}
                    </li>
                  ))
                ) : (
                  <p>No landmarks saved.</p>
                )}
              </ul>
            )}
            {activeTab === "Notification" && (
              <ul className="space-y-4">
                {notification.length > 0 ? (
                  notification.map((res, i) => (
                    <li key={i} className="text-white font-medium">
                      {res.message}
                    </li>
                  ))
                ) : (
                  <p>No Notification.</p>
                )}
              </ul>
            )}
          </div>
        </div>

        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-xl mt-8 flex items-center justify-center gap-2 w-full">
          <LogOut size={18} /> Sign Out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
