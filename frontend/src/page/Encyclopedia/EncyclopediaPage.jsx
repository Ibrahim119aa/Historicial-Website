import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const EncyclopediaPage = () => {
  const [events, setEvents] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);

  const fetchEvents = async () => {
    try {
      const q = collection(db, "events");
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const toggleBookmark = (id) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] via-[#111] to-[#0f0f0f] px-6 py-16 font-sans text-white overflow-x-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-16 tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent leading-tight drop-shadow-md"
      >
        Explore the Historical Encyclopedia
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {events.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, type: 'spring', stiffness: 70 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl border border-gray-700 hover:border-indigo-500 bg-gradient-to-br from-[#1b1b1b]/60 to-[#252525]/80 hover:shadow-xl hover:shadow-indigo-500/30 backdrop-blur-xl transform hover:scale-[1.02] transition-all duration-500"
          >
            <Card className="bg-transparent h-full flex flex-col">
              <CardContent className="p-6 flex flex-col flex-1">
                {item.imageUrl && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-full h-52 overflow-hidden rounded-2xl shadow-md mb-5"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </motion.div>
                )}

                <div className="flex flex-col flex-1 justify-between">
                  <div className="flex justify-between items-start mb-3">
                    <motion.h3
                      whileHover={{ scale: 1.03 }}
                      className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent group-hover:text-indigo-400 transition-all duration-300 drop-shadow-lg"
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

                  <div className="mb-3">
                    <p className="text-gray-400 text-sm">{item.date}</p>
                    <p className="text-gray-500 text-sm">{item.address}</p>
                  </div>

                  <Link to={`/encyclopedia/${item.id}`}>
                    <Button
                      variant="outline"
                      className="self-start border-indigo-400 text-indigo-300 hover:bg-indigo-500 hover:text-white transition-all rounded-full px-5 py-2 text-sm"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EncyclopediaPage;
