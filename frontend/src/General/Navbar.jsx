import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const l = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="w-full sticky top-0 bg-white z-50">
            {/* Top Strip */}


            {/* Main Navbar */}
            <div className="border-b border-[#f5f5f5]  px-10 py-5 relative">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to={"/"}>
                        <span>Histopedia</span>
                    </Link>

                    {/* Hamburger */}
                    <button
                        className="lg:hidden text-[#cc0000] text-2xl z-50"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex lg:flex-row gap-10 items-center ml-4">
                        {renderLinks(l)}
                        <Link to="/coperate-inquires" onClick={() => setMobileMenuOpen(false)}>
                            <button className=" text-[#fff] rounded-full bg-blue-300 px-6 py-2 text font-bold text-sm">
                                JOIN US
                            </button>
                        </Link>
                    </div>
                </div>


                <div
                    className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-md p-6 transform transition-transform duration-300 ease-in-out z-40 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >

                    <div className="flex justify-end mb-4">
                        <button onClick={() => setMobileMenuOpen(false)} className="text-[#cc0000] text-xl">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    <div className="flex flex-col gap-6">
                        {renderLinks(l)}
                        <Link to="/coperate-inquires" onClick={() => setMobileMenuOpen(false)}>
                            <button className="rounded-full bg-blue-300 px-6 py-2 text-white font-semibold text-sm">
                                SIGN IN
                            </button>
                        </Link>
                    </div>
                </div>


                {mobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-30"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                )}
            </div>
        </div>
    );
};

const renderLinks = (l) => (
    <>
        <Link to="/" className={`font-semibold no-underline ${l.pathname === '/' ? 'text-blue-300' : 'text-[#212529]'} relative group`}>
            Home
            <span className={`absolute left-0 -bottom-1 w-0 h-[2px] ${l.pathname === '/' ? 'bg-[#212529]' : 'bg-blue-300'}  transition-all duration-300 group-hover:w-full`}></span>
        </Link>
        <Link to="/product/Laptop" className={`font-semibold no-underline ${l.pathname === '/product/Laptop' ? 'text-blue-300' : 'text-[#212529]'} relative group`}>
            Explore
            <span className={`absolute left-0 -bottom-1 w-0 h-[2px] ${l.pathname === '/product/Laptop' ? 'bg-[#212529]' : 'bg-blue-300'} transition-all duration-300 group-hover:w-full`}></span>
        </Link>
        <Link to="/product/Desktop" className={`font-semibold no-underline ${l.pathname === '/product/Desktop' ? 'text-blue-300' : 'text-[#212529]'} relative group`}>
            Play
            <span className={`absolute left-0 -bottom-1 w-0 h-[2px] ${l.pathname === '/product/Desktop' ? 'bg-[#212529]' : 'bg-blue-300'}  transition-all duration-300 group-hover:w-full`}></span>
        </Link>
        <Link to="/contact-us" className={`font-semibold no-underline ${l.pathname === '/contact-us' ? 'text-blue-300' : 'text-[#212529]'} relative group`}>
            Nearby
            <span className={`absolute left-0 -bottom-1 w-0 h-[2px] ${l.pathname === '/contact-us' ? 'bg-[#212529]' : 'bg-blue-300'} transition-all duration-300 group-hover:w-full`}></span>
        </Link>
        <Link to="/about-us" className={`font-semibold no-underline ${l.pathname === '/about-us' ? 'text-blue-300' : 'text-[#212529]'} relative group`}>
            Favorities
            <span className={`absolute left-0 -bottom-1 w-0 h-[2px] ${l.pathname === '/about-us' ? 'bg-[#212529]' : 'bg-blue-300'} transition-all duration-300 group-hover:w-full`}></span>
        </Link>

    </>
);

export default Navbar;
