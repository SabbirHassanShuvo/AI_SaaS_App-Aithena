import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BlogTitle = () => {
  const [keyword, setKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [generatedTitles, setGeneratedTitles] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const categories = [
    "General",
    "Technology",
    "Business",
    "Health",
    "Lifestyle",
    "Education",
    "Travel",
    "Food",
  ];

  const generateTitles = async () => {
    if (!keyword.trim()) return;

    setIsGenerating(true);
    setShowPlaceholder(false);

    // Simulate AI generation with a delay
    setTimeout(() => {
      const mockTitles = [
        `The Future of Artificial Intelligence: ${keyword} in 2025`,
        `Why ${keyword} is Revolutionizing the Tech Industry`,
        `${keyword}: The Next Big Thing You Need to Know About`,
        `From Theory to Reality: How ${keyword} is Changing Everything`,
        `The Ultimate Guide to Understanding ${keyword} `,
        `Top 10 Ways ${keyword} Will Impact Your Daily Life`,
        `${keyword} Explained: Simple Insights for Complex Concepts`,
        `Breaking Down ${keyword}: What Experts Are Saying Now`
      ];

      setGeneratedTitles(mockTitles);
      setIsGenerating(false);
    }, 1500);
  };

  useEffect(() => {
    if (keyword === "") {
      setGeneratedTitles([]);
      setShowPlaceholder(true);
    }
  }, [keyword]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 4px 15px rgba(147, 51, 234, 0.4)"
    },
    tap: { scale: 0.95 }
  };

  const placeholderVariants = {
    initial: { opacity: 0.7 },
    animate: {
      opacity: 0.7,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.5 7.5L20 10L14.5 12.5L12 18L9.5 12.5L4 10L9.5 7.5L12 2Z" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2L14.5 7.5L20 10L14.5 12.5L12 18L9.5 12.5L4 10L9.5 7.5L12 2Z" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h1 className="text-xl font-bold text-purple-700">Quickai</h1>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Sidebar */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold">
              S
            </div>
            <div>
              <p className="font-semibold text-gray-800">Sabbir</p>
              <p className="text-sm text-gray-500">Premium Plan</p>
            </div>
          </div>

          <nav className="space-y-2">
            {[
              { name: "Dashboard", icon: "🏠" },
              { name: "Write Article", icon: "📝" },
              { name: "Blog Titles", icon: "#", active: true },
              { name: "Generate Images", icon: "🖼️" },
              { name: "Remove Background", icon: "🧼" },
              { name: "Remove Object", icon: "🧹" },
              { name: "Review Resume", icon: "📄" }
            ].map((item, index) => (
              <button
                key={index}
                className={`w - full flex items - center space - x - 3 px - 4 py - 3 rounded - lg transition - all duration - 200 ${item.active
                    ? "bg-purple-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                  } `}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* AI Title Generator Card */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.5 7.5L20 10L14.5 12.5L12 18L9.5 12.5L4 10L9.5 7.5L12 2Z" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2 className="text-xl font-bold text-gray-800">AI Title Generator</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Keyword</label>
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="The future of artificial intelligence"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px - 4 py - 2 rounded - full text - sm font - medium transition - all duration - 200 ${selectedCategory === category
                          ? "bg-blue-100 text-blue-700 border border-blue-300"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                        } `}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                onClick={generateTitles}
                disabled={!keyword.trim() || isGenerating}
                className={`w - full py - 3 px - 4 rounded - lg font - medium text - white transition - all duration - 200 ${!keyword.trim() || isGenerating
                    ? "bg-purple-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  } `}
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Generating...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L14.5 7.5L20 10L14.5 12.5L12 18L9.5 12.5L4 10L9.5 7.5L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Generate title</span>
                  </div>
                )}
              </motion.button>
            </div>
          </div>

          {/* Generated Titles Card */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.5 7.5L20 10L14.5 12.5L12 18L9.5 12.5L4 10L9.5 7.5L12 2Z" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2 className="text-xl font-bold text-gray-800">Generated titles</h2>
            </div>

            <AnimatePresence mode="wait">
              {showPlaceholder && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    variants={placeholderVariants}
                    initial="initial"
                    animate="animate"
                    className="text-6xl text-gray-300 mb-4"
                  >
                    #
                  </motion.div>
                  <p className="text-gray-500">Enter keywords and click "Generate Titles" to get started</p>
                </motion.div>
              )}

              {generatedTitles.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-3"
                >
                  {generatedTitles.map((title, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors duration-200 cursor-pointer group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors duration-200">{title}</h3>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-purple-600 transition-opacity duration-200">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6V18M12 6L8 10M12 6L16 10M12 18L8 14M12 18L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitle;