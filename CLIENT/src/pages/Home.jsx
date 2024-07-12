import React from "react";

export const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-300 text-white flex flex-col items-center justify-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-pulse">
                    Campus Connect
                </h1>
                <p className="text-2xl md:text-3xl mb-12">
                    Linking Students, Alumni, and Industry
                </p>
                <div className="flex space-x-4">
                    <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full shadow-lg transform transition duration-500 hover:scale-105 hover:bg-blue-600 hover:text-white">
                        Learn More
                    </button>
                    <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full shadow-lg transform transition duration-500 hover:scale-105 hover:bg-blue-600 hover:text-white">
                        Get Started
                    </button>
                </div>
            </div>
        </>
    )
}