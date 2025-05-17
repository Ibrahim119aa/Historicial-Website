import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';

const EncyclopediaDetailPage = () => {
    const { id } = useParams(); // Get the event ID from URL
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);

    const fetchEventDetails = async () => {
        try {
            const eventRef = doc(db, "events", id);
            const docSnap = await getDoc(eventRef);

            if (docSnap.exists()) {
                setEvent(docSnap.data());
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error fetching event:", error);
        }
    };

    useEffect(() => {
        fetchEventDetails();
    }, [id]);

    if (!event) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black text-white text-xl font-bold">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] via-[#111] to-[#0f0f0f] px-6 py-16 font-sans text-white overflow-x-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto"
            >
                <Card className="bg-gradient-to-br from-[#1b1b1b]/70 to-[#252525]/80 border border-gray-700 rounded-3xl shadow-lg backdrop-blur-lg overflow-hidden">
                    <CardContent className="p-8 flex flex-col space-y-8">
                        {/* Image Section */}
                        {event.imageUrl && (
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="relative w-full h-80 overflow-hidden rounded-2xl shadow-md"
                            >
                                <img
                                    src={event.imageUrl}
                                    alt={event.title}
                                    className="w-full h-full object-cover transform transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                            </motion.div>
                        )}

                        {/* Text Content */}
                        <div className="flex flex-col space-y-4">
                            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent leading-tight tracking-tight">
                                {event.title}
                            </h1>

                            <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-gray-400">
                                <p>{event.date}</p>
                                <span className="hidden md:inline-block w-1 h-1 bg-gray-400 rounded-full"></span>
                                <p>{event.address}</p>
                            </div>

                            <div
                                className="text-gray-300 text-base md:text-lg leading-relaxed mt-4 space-y-4"
                                dangerouslySetInnerHTML={{ __html: event.content }}
                            />
                        </div>

                        {/* Go Back Button */}
                        <Button
                            variant="outline"
                            onClick={() => navigate(-1)}
                            className="mt-8 self-start border-indigo-400 text-indigo-300 hover:bg-indigo-500 hover:text-white transition-all rounded-full px-6 py-3 text-base font-semibold tracking-wide"
                        >
                            ← Go Back
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default EncyclopediaDetailPage;
