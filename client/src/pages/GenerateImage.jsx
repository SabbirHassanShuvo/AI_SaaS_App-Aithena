
import React, { useState, useEffect } from 'react';
import { Sparkles, Image, ArrowRight, User, Home, Edit, Hash, Camera, Trash, FileText, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GenerateImage() {
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedImage, setGeneratedImage] = useState(null);
    const [prompt, setPrompt] = useState('');
    const [selectedStyle, setSelectedStyle] = useState('Realistic');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleGenerate = async () => {
        if (!prompt.trim()) return;
        setIsGenerating(true);
        setGeneratedImage(null);

        // Simulate AI generation delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Generate a random image URL
        const randomId = Math.floor(Math.random() * 1000);
        setGeneratedImage(`https://placehold.co/600x400/5c40ff/white?text=AI+Generated+Image+${randomId}`);
        setIsGenerating(false);
    };

    const sidebarItems = [
        { icon: <Home className="w-5 h-5" />, label: 'Dashboard', active: false },
        { icon: <Edit className="w-5 h-5" />, label: 'Write Article', active: false },
        { icon: <Hash className="w-5 h-5" />, label: 'Blog Titles', active: false },
        { icon: <Camera className="w-5 h-5" />, label: 'Generate Images', active: true },
        { icon: <Trash className="w-5 h-5" />, label: 'Remove Background', active: false },
        { icon: <Camera className="w-5 h-5" />, label: 'Remove Object', active: false },
        { icon: <FileText className="w-5 h-5" />, label: 'Review Resume', active: false },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Quickai
                        </h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex h-[calc(100vh-64px)]">
                {/* Sidebar */}
                <motion.aside
                    initial={{ x: -300 }}
                    animate={{ x: sidebarOpen ? 0 : -300 }}
                    transition={{ type: "spring", damping: 20 }}
                    className={`bg-white w-64 border-r border-gray-200 overflow-y-auto transition-all duration-300 ${sidebarOpen ? 'block' : 'hidden'}`}
                >
                    <div className="p-6">
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">William Mark</p>
                                <p className="text-sm text-gray-500">Premium Plan</p>
                            </div>
                        </div>

                        <nav className="space-y-2">
                            {sidebarItems.map((item, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${item.active
                                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </motion.button>
                            ))}
                        </nav>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                                    <User className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">William Mark</p>
                                    <p className="text-xs text-gray-500">Premium Plan</p>
                                </div>
                            </div>
                            <LogOut className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                        </div>
                    </div>
                </motion.aside>

                {/* Main Content */}
                <main className="flex-1 p-6 bg-gray-50">
                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Generator Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-xl shadow-md p-6"
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                <Sparkles className="w-5 h-5 text-green-500" />
                                <h2 className="text-lg font-semibold text-gray-900">AI Image Generator</h2>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Describe Your Image
                                </label>
                                <textarea
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="Describe what you want to see in the image..."
                                    className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all duration-300"
                                    disabled={isGenerating}
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Style
                                </label>
                                <div className="flex space-x-2">
                                    <motion.button
                                        onClick={() => setSelectedStyle('Realistic')}
                                        className={`px-4 py-2 rounded-lg transition-all duration-200 ${selectedStyle === 'Realistic'
                                            ? 'bg-blue-100 text-blue-700 border border-blue-300'
                                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Realistic
                                    </motion.button>
                                    <motion.button
                                        onClick={() => setSelectedStyle('Ghibli Style')}
                                        className={`px-4 py-2 rounded-lg transition-all duration-200 ${selectedStyle === 'Ghibli Style'
                                            ? 'bg-blue-100 text-blue-700 border border-blue-300'
                                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Ghibli Style
                                    </motion.button>
                                </div>
                            </div>

                            <motion.button
                                onClick={handleGenerate}
                                disabled={!prompt.trim() || isGenerating}
                                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isGenerating ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Generating...</span>
                                    </>
                                ) : (
                                    <>
                                        <Image className="w-5 h-5" />
                                        <span>Generate image</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </motion.button>
                        </motion.div>

                        {/* Generated Image Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white rounded-xl shadow-md p-6"
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                <Image className="w-5 h-5 text-green-500" />
                                <h2 className="text-lg font-semibold text-gray-900">Generated image</h2>
                            </div>

                            <AnimatePresence>
                                {generatedImage ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="relative"
                                    >
                                        <img
                                            src={generatedImage}
                                            alt="AI Generated"
                                            className="w-full h-64 object-cover rounded-lg"
                                        />
                                        <div className="mt-4 text-center">
                                            <p className="text-sm text-gray-600">{prompt}</p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="flex flex-col items-center justify-center h-64 text-gray-500"
                                    >
                                        <Image className="w-12 h-12 mb-4" />
                                        <p className="text-center text-sm">
                                            Describe an image and click "Generate Image" to get started
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </main>
            </div>
        </div>
    );
}