import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Image, Check, X, Sparkles, Diamond, User, LogOut, Home, FileText, Hash, Camera, Trash2, Download, XCircle } from 'lucide-react';

const RemoveBackground = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage({
                    url: e.target.result,
                    name: file.name,
                    size: file.size
                });
                setProcessedImage(null);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveBackground = () => {
        if (!selectedImage) return;

        setIsProcessing(true);

        // Simulate processing delay
        setTimeout(() => {
            // In a real app, this would call an API to remove background
            // For demo, we'll just show the same image with a "processed" effect
            setProcessedImage(selectedImage.url);
            setIsProcessing(false);
        }, 2000);
    };

    const handleDownload = () => {
        if (!processedImage) return;

        const link = document.createElement('a');
        link.download = 'processed-image.png';
        link.href = processedImage;
        link.click();
    };

    const handleReset = () => {
        setSelectedImage(null);
        setProcessedImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const sidebarVariants = {
        open: { x: 0 },
        closed: { x: -280 }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0px 4px 12px rgba(255, 107, 107, 0.3)"
        },
        tap: { scale: 0.95 }
    };

    const user = {
        name: "William Mark",
        plan: "Premium Plan"
    };

    const navItems = [
        { icon: Home, label: "Dashboard", active: false },
        { icon: FileText, label: "Write Article", active: false },
        { icon: Hash, label: "Blog Titles", active: false },
        { icon: Camera, label: "Generate Images", active: false },
        { icon: Sparkles, label: "Remove Background", active: true },
        { icon: Trash2, label: "Remove Object", active: false },
        { icon: User, label: "Review Resume", active: false }
    ];

    return (
        <div className="h-screen bg-gray-50 flex overflow-hidden">
            {/* Sidebar */}
            <motion.div
                className="bg-white w-64 shadow-lg flex flex-col"
                variants={sidebarVariants}
                animate={sidebarOpen ? "open" : "closed"}
                transition={{ type: "spring", damping: 20 }}
            >
                {/* Header */}
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center space-x-2 mb-6">
                        <Sparkles className="w-8 h-8 text-indigo-600" />
                        <h1 className="text-xl font-bold text-indigo-600">Quickai</h1>
                    </div>

                    {/* User Profile */}
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold">
                            {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                            <div className="font-medium text-gray-800">{user.name}</div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-6 px-4">
                    {navItems.map((item, index) => (
                        <motion.button
                            key={index}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${item.active
                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <item.icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </motion.button>
                    ))}
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold">
                                {user.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <div className="font-medium text-gray-800">{user.name}</div>
                                <div className="text-xs text-gray-500">{user.plan}</div>
                            </div>
                        </div>
                        <LogOut className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Left Card - Background Removal */}
                        <motion.div
                            className="bg-white rounded-xl shadow-md p-6"
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                <Sparkles className="w-6 h-6 text-red-500" />
                                <h2 className="text-xl font-bold text-gray-800">Background Removal</h2>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Upload image</label>

                                {selectedImage ? (
                                    <div className="border-2 border-gray-300 rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-2">
                                                <Image className="w-5 h-5 text-gray-500" />
                                                <span className="text-sm font-medium text-gray-800 truncate max-w-[150px]">{selectedImage.name}</span>
                                            </div>
                                            <button
                                                onClick={handleReset}
                                                className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50"
                                            >
                                                <XCircle className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <div className="mt-2">
                                            <img
                                                src={selectedImage.url}
                                                alt="Preview"
                                                className="w-full h-32 object-contain rounded border border-gray-200"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-indigo-400 transition-colors">
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                        />
                                        <div onClick={() => fileInputRef.current?.click()} className="cursor-pointer">
                                            <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                                            <p className="text-sm text-gray-500">
                                                Choose File <span className="ml-2 text-gray-400">No file chosen</span>
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <p className="text-xs text-gray-400 mt-2">Supports JPG, PNG, and other image formats</p>
                            </div>

                            <motion.button
                                className={`w-full py-3 px-4 rounded-lg font-medium text-white flex items-center justify-center space-x-2 ${!selectedImage || isProcessing
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
                                    } transition-all duration-300`}
                                disabled={!selectedImage || isProcessing}
                                onClick={handleRemoveBackground}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                {isProcessing ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white"></div>
                                        <span>Processing...</span>
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-5 h-5" />
                                        <span>Remove background</span>
                                    </>
                                )}
                            </motion.button>

                            {selectedImage && (
                                <motion.button
                                    className="mt-4 w-full py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                                    onClick={handleReset}
                                >
                                    Reset
                                </motion.button>
                            )}
                        </motion.div>

                        {/* Right Card - Processed Image */}
                        <motion.div
                            className="bg-white rounded-xl shadow-md p-6"
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                <Diamond className="w-6 h-6 text-red-500" />
                                <h2 className="text-xl font-bold text-gray-800">Processed Image</h2>
                            </div>

                            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                                {processedImage ? (
                                    <div className="relative w-full h-full">
                                        <img
                                            src={processedImage}
                                            alt="Processed"
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                        <div className="absolute top-2 right-2 flex space-x-2">
                                            <motion.button
                                                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                                                onClick={handleDownload}
                                                variants={buttonVariants}
                                                whileHover="hover"
                                                whileTap="tap"
                                            >
                                                <Download className="w-5 h-5 text-gray-700" />
                                            </motion.button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center p-4">
                                        <Diamond className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                                        <p className="text-gray-500 text-sm">
                                            Upload an image and click "Remove Background" to get started
                                        </p>
                                    </div>
                                )}
                            </div>

                            {processedImage && (
                                <div className="mt-4 flex items-center justify-center space-x-4">
                                    <motion.button
                                        className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        <Check className="w-5 h-5 mr-2" />
                                        Save Changes
                                    </motion.button>
                                    <motion.button
                                        className="py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        <X className="w-5 h-5 mr-2" />
                                        Discard
                                    </motion.button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoveBackground;
