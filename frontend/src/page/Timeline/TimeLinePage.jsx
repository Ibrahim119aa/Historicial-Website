import { useState, useEffect } from 'react';
import { db } from '../../firebase'; // adjust the path if needed
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TimelinePage = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);

  const fetchTimelineData = async () => {
    try {
      const q = query(collection(db, "timeline"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTimelineData(data);
    } catch (error) {
      console.error("Error fetching timeline data:", error);
    }
  };

  useEffect(() => {
    fetchTimelineData();
  }, []);

  const toggleBookmark = (id) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-gradient-to-b from-[#0f0f0f] via-[#111] to-[#0f0f0f] min-h-screen px-6 py-14 font-sans text-white">
      <motion.h1
        className="text-6xl font-extrabold text-center mb-16 tracking-tight bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent leading-tight"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Historical  Timeline
      </motion.h1>

      <div className="space-y-16 max-w-7xl mx-auto">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: 'spring', stiffness: 70 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden group relative border border-gray-800 hover:border-indigo-500 backdrop-blur-lg bg-[#1b1b1b]/60 hover:bg-[#252525]/80 transition-all duration-400 shadow-2xl hover:shadow-indigo-500/20"
          >
            <Card className="bg-transparent">
              <CardContent className="p-10 flex flex-col md:flex-row items-start gap-10">
                {item.media && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-full md:w-56 h-56 overflow-hidden rounded-2xl shadow-md"
                  >
                    <img
                      src={item.media}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                  </motion.div>
                )}

                <div className="flex-1 space-y-6">
                  <div className="flex justify-between items-start">
                    <motion.h3
                      className="text-3xl text-[#212529] font-bold leading-tight group-hover:text-indigo-400 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      {item.title}
                    </motion.h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleBookmark(item.id)}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      <AnimatePresence mode="wait">
                        {bookmarked.includes(item.id) ? (
                          <motion.div
                            key="checked"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <BookmarkCheck className="w-6 h-6" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="unchecked"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Bookmark className="w-6 h-6" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>
                  </div>

                  <span className="inline-block px-4 py-1 rounded-full text-sm bg-indigo-600/20 text-indigo-400 font-semibold tracking-wider">
                    {item.period}
                  </span>

                  <p className="text-[#212529] leading-relaxed text-lg font-light">
                    {item.summary}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
