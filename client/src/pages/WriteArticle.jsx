import React, { useState } from 'react';
import {
  Sparkles,
  Home,
  PenTool,
  Hash,
  Image,
  Scissors,
  Wand2,
  FileText,
  Edit3,
  LogOut,
  ChevronRight
} from 'lucide-react';

export default function WriteArticle() {
  const [topic, setTopic] = useState('');
  const [length, setLength] = useState('short');
  const [activeMenu, setActiveMenu] = useState('write');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'write', icon: PenTool, label: 'Write Article' },
    { id: 'titles', icon: Hash, label: 'Blog Titles' },
    { id: 'images', icon: Image, label: 'Generate Images' },
    { id: 'remove-bg', icon: Scissors, label: 'Remove Background' },
    { id: 'remove-obj', icon: Wand2, label: 'Remove Object' },
    { id: 'resume', icon: FileText, label: 'Review Resume' },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedContent('Your amazing AI-generated article will appear here!');
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Quickai
            </span>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold shadow-lg group-hover:scale-110 transition-transform duration-300">
              WM
            </div>
            <span className="font-semibold text-gray-700">William Mark</span>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-200 scale-105'
                    : 'text-gray-600 hover:bg-gray-50 hover:scale-105'
                  }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'}`} />
                <span className="font-medium">{item.label}</span>
                {isActive && <ChevronRight className="w-4 h-4 ml-auto animate-bounce" />}
              </button>
            );
          })}
        </nav>

        {/* Bottom Profile */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">WM</span>
              </div>
              <div>
                <p className="font-semibold text-gray-700 text-sm">William Mark</p>
                <p className="text-xs text-purple-600 font-medium">Premium Plan</p>
              </div>
            </div>
            <LogOut className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Article Writer Panel */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center animate-pulse">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Article Writer
              </h2>
            </div>

            {/* Article Topic */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Article Topic
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="The future of artificial intelligence"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-700"
              />
            </div>

            {/* Article Length */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Article Length
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => setLength('short')}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${length === 'short'
                      ? 'bg-blue-100 text-blue-700 border-2 border-blue-500 scale-105 shadow-lg'
                      : 'bg-gray-50 text-gray-600 border-2 border-transparent hover:bg-gray-100'
                    }`}
                >
                  Short (200 - 400 word)
                </button>
                <button
                  onClick={() => setLength('long')}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${length === 'long'
                      ? 'bg-blue-100 text-blue-700 border-2 border-blue-500 scale-105 shadow-lg'
                      : 'bg-gray-50 text-gray-600 border-2 border-transparent hover:bg-gray-100'
                    }`}
                >
                  Long (400 - 800 word)
                </button>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={!topic || isGenerating}
              className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${!topic || isGenerating
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95'
                }`}
            >
              <Edit3 className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
              {isGenerating ? 'Generating...' : 'Generate article'}
            </button>
          </div>

          {/* Generated Article Panel */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Generated article
              </h2>
            </div>

            {/* Content Area */}
            <div className="min-h-[400px] flex items-center justify-center">
              {!generatedContent && !isGenerating && (
                <div className="text-center animate-fade-in">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform duration-300">
                    <Edit3 className="w-12 h-12 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                  <p className="text-gray-400 text-lg">
                    Enter a topic and click "Generate article" to get started
                  </p>
                </div>
              )}

              {isGenerating && (
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center animate-pulse">
                    <Sparkles className="w-12 h-12 text-white animate-spin" />
                  </div>
                  <p className="text-gray-600 text-lg font-medium animate-pulse">
                    Generating your article...
                  </p>
                </div>
              )}

              {generatedContent && !isGenerating && (
                <div className="w-full animate-fade-in">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {generatedContent}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}