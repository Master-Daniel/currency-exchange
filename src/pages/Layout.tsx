import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <NavBar />
            <main className="container mx-auto p-6">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
