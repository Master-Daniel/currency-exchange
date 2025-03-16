import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sticky top-0 z-40 shadow-md transition-colors bg-white">
            <header className="py-5 px-5 sm:px-8 flex items-center w-full">
                <Link to="/" className="font-bold text-lg">Currency Exchange</Link>
                <div className="flex gap-1 ml-auto">
                    <nav>
                        <ul className="heading-color gap-5 hidden lg:flex mr-1">
                            <li><Link className="nav__link" to="/">Exchange</Link></li>
                            <li><Link className="nav__link" to="/history">History</Link></li>
                        </ul>
                    </nav>
                    <nav className="lg:hidden relative">
                        <button className="p-2 cursor-pointer" aria-label="Open Menu" onClick={() => setIsOpen(true)}>
                            <MenuIcon className="w-6 h-6 text-gray-800" />
                        </button>
                        {isOpen && (
                            <div className="fixed inset-0 bg-black/50 bg-opacity-30 transition-opacity" onClick={() => setIsOpen(false)}></div>
                        )}
                        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
                            <button className="absolute top-4 right-4 p-2 cursor-pointer" aria-label="Close Menu" onClick={() => setIsOpen(false)}>
                                <CloseIcon className="w-6 h-6 text-gray-800" />
                            </button>
                            <ul className="flex flex-col gap-5 mt-16 px-6">
                                <li><Link className="text-gray-800 text-lg" onClick={() => setIsOpen(false)} to="/">Exchange</Link></li>
                                <li><Link className="text-gray-800 text-lg" onClick={() => setIsOpen(false)} to="/history">History</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default NavBar;
