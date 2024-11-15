import React from 'react';

function Navbar() {
    return (
        <nav className="bg-white-100 p-4 shadow-md">
            {/* Navbar container */}
            <div className="flex justify-between items-center">
                {/* Left side: Icon and Image */}
                <div className="flex items-center space-x-2">
                    {/* Home icon */}
                    <i className="fas fa-home text-xl text-blue-500"></i>

                    {/* App logo image */}
                    <img
                        src="/attyre.png"
                        //this by default goes to public folder
                        alt="App Logo"
                        className="w-15 h-9" // Adjust the width and height as needed
                    />
                </div>

                {/* Right side: Navbar options */}
                <div className="flex space-x-6">
                    <a href="http://localhost:3000/" className="text-gray-700 hover:text-blue-500">Home</a>
                    <a href="http://localhost:3000/" className="text-gray-700 hover:text-blue-500">Color Analysis</a>
                    <a href="http://localhost:3000/" className="text-gray-700 hover:text-blue-500">Curations</a>
                    <a href="http://localhost:3000/" className="text-gray-700 hover:text-blue-500">Find the Fit</a>
                    <a href="http://localhost:3000/" className="text-gray-700 hover:text-blue-500">Marketplace</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
