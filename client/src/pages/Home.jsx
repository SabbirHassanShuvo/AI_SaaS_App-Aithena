import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Check,
  Star,
  Menu,
  X,
  Zap,
  Brain,
  Palette,
  FileText,
  Wand2,
  ArrowRight,
  Mail,
  Github,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <FileText className="w-7 h-7" />,
      title: "AI Article Writer",
      description:
        "Generate high-quality, engaging articles on any topic with our AI writing technology.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Blog Title Generator",
      description:
        "Create compelling, SEO-friendly titles that grab attention and drive clicks.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: "AI Image Generation",
      description:
        "Generate stunning visuals and graphics tailored to your content needs.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <Wand2 className="w-7 h-7" />,
      title: "Background Removal",
      description:
        "Automatically remove backgrounds from images with precision and speed.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Object Removal",
      description:
        "Easily remove unwanted objects from your photos without leaving traces.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Brain className="w-7 h-7" />,
      title: "Resume Review",
      description:
        "Get AI-powered feedback to optimize your resume for maximum impact.",
      gradient: "from-indigo-500 to-violet-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      image: "SJ",
      text: "ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Creative Director, DesignStudio",
      image: "MC",
      text: "I was skeptical at first, but the AI tools exceeded my expectations. The image generation feature alone is worth the subscription.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Freelance Writer",
      image: "ER",
      text: "As a freelance writer, this tool has doubled my output without sacrificing quality. The title generator is my favorite feature.",
      rating: 5,
    },
  ];

  const stats = [
    { value: "10K+", label: "Trusted by users" },
    { value: "1M+", label: "Content Created" },
    { value: "99.9%", label: "Uptime" },
    { value: "4.9/5", label: "User Rating" },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${
        darkMode ? "bg-slate-950" : "bg-white"
      }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-1/2 -left-1/4 w-[500px] h-[500px] ${
            darkMode ? "bg-violet-500/20" : "bg-violet-300/30"
          } rounded-full blur-3xl animate-pulse`}
          style={{ animationDuration: "4s" }}
        />
        <div
          className={`absolute top-1/3 -right-1/4 w-[500px] h-[500px] ${
            darkMode ? "bg-cyan-500/20" : "bg-cyan-300/30"
          } rounded-full blur-3xl animate-pulse`}
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />
        <div
          className={`absolute -bottom-1/4 left-1/3 w-[500px] h-[500px] ${
            darkMode ? "bg-pink-500/20" : "bg-pink-300/30"
          } rounded-full blur-3xl animate-pulse`}
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? darkMode
              ? "bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-slate-900/50"
              : "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg"
            : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-xl blur-md group-hover:blur-lg transition-all opacity-75" />
                <Sparkles className="w-8 h-8 text-white relative z-10" />
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Quick.ai
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {["Home", "Features", "Testimonials", "Pricing"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-all hover:scale-105 ${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}>
                  {item}
                </a>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-xl transition-all hover:scale-105 ${
                  darkMode
                    ? "bg-slate-800 hover:bg-slate-700 text-yellow-400"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}>
                {darkMode ? "☀️" : "🌙"}
              </button>
              <button className="px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:shadow-xl hover:shadow-violet-500/50 transition-all hover:scale-105">
                Get Started →
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                darkMode ? "bg-slate-800" : "bg-gray-100"
              }`}>
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div
              className={`md:hidden mt-4 p-4 rounded-xl ${
                darkMode ? "bg-slate-800" : "bg-gray-50"
              } space-y-3`}>
              {["Home", "Features", "Testimonials", "Pricing"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 font-medium">
                  {item}
                </a>
              ))}
              <button className="w-full px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-violet-500 to-cyan-500 text-white">
                Get Started →
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 ${
                darkMode
                  ? "bg-violet-500/10 border border-violet-500/20"
                  : "bg-violet-50 border border-violet-200"
              }`}>
              <Sparkles className="w-4 h-4 text-violet-500" />
              <span
                className={`text-sm font-semibold ${
                  darkMode ? "text-violet-300" : "text-violet-700"
                }`}>
                ✨ AI-Powered Content Creation
              </span>
            </div>

            <h1
              className={`text-5xl sm:text-6xl md:text-7xl font-black mb-8 leading-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
              Create amazing content{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  with AI tools
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500 rounded-full" />
              </span>
            </h1>

            <p
              className={`text-lg sm:text-xl md:text-2xl mb-12 leading-relaxed px-4 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
              Transform your content creation with our suite of premium AI
              tools. Write articles, generate images, and enhance your workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
              <button className="group px-10 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:shadow-2xl hover:shadow-violet-500/50 transition-all hover:scale-105">
                Start creating now
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className={`px-10 py-4 rounded-xl font-bold text-lg border-2 transition-all hover:scale-105 ${
                  darkMode
                    ? "border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white"
                    : "border-gray-200 bg-white hover:bg-gray-50 text-gray-900"
                }`}>
                Watch demo ▶
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl backdrop-blur-xl transition-all hover:scale-105 ${
                    darkMode
                      ? "bg-slate-800/50 border border-slate-700/50"
                      : "bg-white/80 border border-gray-200 shadow-lg"
                  }`}>
                  <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* User Avatars */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`w-14 h-14 rounded-full border-4 ${
                      darkMode
                        ? "border-slate-950 bg-gradient-to-br from-violet-500 to-cyan-500"
                        : "border-white bg-gradient-to-br from-violet-400 to-cyan-400"
                    } flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div
                  className={`font-bold text-lg ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}>
                  Trusted by 10k+ creators
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  <span
                    className={`text-sm ml-1 font-semibold ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                    4.9/5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-40 left-10 animate-bounce hidden lg:block"
          style={{ animationDuration: "3s" }}>
          <div
            className={`p-5 rounded-2xl backdrop-blur-xl shadow-xl ${
              darkMode
                ? "bg-violet-500/10 border border-violet-500/20"
                : "bg-violet-100 border border-violet-200"
            }`}>
            <Zap className="w-10 h-10 text-violet-500" />
          </div>
        </div>
        <div
          className="absolute top-60 right-10 animate-bounce hidden lg:block"
          style={{ animationDuration: "4s", animationDelay: "1s" }}>
          <div
            className={`p-5 rounded-2xl backdrop-blur-xl shadow-xl ${
              darkMode
                ? "bg-cyan-500/10 border border-cyan-500/20"
                : "bg-cyan-100 border border-cyan-200"
            }`}>
            <Brain className="w-10 h-10 text-cyan-500" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className={`py-24 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-slate-900/50" : "bg-gray-50/50"
        }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2
              className={`text-4xl md:text-5xl font-black mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
              Powerful AI Tools
            </h2>
            <p
              className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}>
              Everything you need to create, enhance, and optimize your content
              with cutting-edge AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`group p-8 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  darkMode
                    ? "bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600"
                    : "bg-white border border-gray-200 hover:shadow-2xl"
                }`}>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  {feature.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}>
                  {feature.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2
              className={`text-4xl md:text-5xl font-black mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
              Loved by Creators
            </h2>
            <p
              className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}>
              Don't just take our word for it. Here's what our users are saying.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl backdrop-blur-xl transition-all hover:scale-105 ${
                  darkMode
                    ? "bg-slate-800/50 border border-slate-700/50"
                    : "bg-white border border-gray-200 shadow-lg hover:shadow-2xl"
                }`}>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p
                  className={`mb-8 text-base leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <div
                      className={`font-bold text-base ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}>
                      {testimonial.name}
                    </div>
                    <div
                      className={`text-sm mt-1 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className={`py-24 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-slate-900/50" : "bg-gray-50/50"
        }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2
              className={`text-4xl md:text-5xl font-black mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
              Choose Your Plan
            </h2>
            <p
              className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}>
              Start for free and scale up as you grow. Find the perfect plan for
              your content creation needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div
              className={`p-10 rounded-3xl backdrop-blur-xl ${
                darkMode
                  ? "bg-slate-800/50 border border-slate-700/50"
                  : "bg-white border border-gray-200 shadow-lg"
              }`}>
              <h3
                className={`text-2xl font-bold mb-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}>
                Free
              </h3>
              <p
                className={`text-sm mb-6 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                Always free
              </p>
              <div className="mb-8">
                <span
                  className={`text-5xl font-black ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}>
                  $0
                </span>
              </div>
              <ul className="space-y-4 mb-10">
                {["Title Generation", "Article Generation"].map(
                  (feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-3 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}>
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  )
                )}
              </ul>
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all hover:scale-105 ${
                  darkMode
                    ? "bg-slate-700 hover:bg-slate-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                }`}>
                Subscribe
              </button>
            </div>

            {/* Premium Plan */}
            <div className="relative p-10 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border-2 border-violet-500/50">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-bold shadow-lg">
                MOST POPULAR
              </div>
              <h3
                className={`text-2xl font-bold mb-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}>
                Premium
              </h3>
              <p
                className={`text-sm mb-6 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                Billed annually
              </p>
              <div className="mb-8">
                <span
                  className={`text-5xl font-black ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}>
                  $16
                </span>
                <span
                  className={`text-xl ml-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}>
                  /month
                </span>
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  "Title Generation",
                  "Article Generation",
                  "Generate Images",
                  "Remove Background",
                  "Remove Object",
                  "Resume Review",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}>
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:shadow-xl hover:shadow-violet-500/50 transition-all hover:scale-105">
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t ${
          darkMode
            ? "border-slate-800/50 bg-slate-900/30"
            : "border-gray-200 bg-gray-50/50"
        }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-xl blur-md opacity-75" />
                  <Sparkles className="w-10 h-10 text-white relative z-10" />
                </div>
                <span className="font-bold text-3xl bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Quickai
                </span>
              </div>
              <p
                className={`text-base leading-relaxed mb-6 max-w-md ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                Experience the power of AI with QuickAi. Transform your content
                creation with our suite of premium AI tools. Write articles,
                generate images, and enhance your workflow.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <Twitter className="w-5 h-5" />, href: "#" },
                  { icon: <Github className="w-5 h-5" />, href: "#" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                  { icon: <Youtube className="w-5 h-5" />, href: "#" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className={`p-3 rounded-xl transition-all hover:scale-110 ${
                      darkMode
                        ? "bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white"
                        : "bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900 shadow-sm"
                    }`}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4
                className={`font-bold text-lg mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}>
                Company
              </h4>
              <ul className="space-y-4">
                {["Home", "About us", "Contact us", "Privacy policy"].map(
                  (link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className={`transition-colors hover:underline ${
                          darkMode
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-600 hover:text-gray-900"
                        }`}>
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4
                className={`font-bold text-lg mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}>
                Subscribe to our newsletter
              </h4>
              <p
                className={`text-sm mb-6 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all ${
                    darkMode
                      ? "bg-slate-800 text-white border border-slate-700 focus:border-violet-500"
                      : "bg-white text-gray-900 border border-gray-200 focus:border-violet-500"
                  } outline-none`}
                />
                <button className="p-3 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-violet-500/50 transition-all hover:scale-105">
                  <Mail className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className={`pt-8 border-t ${
              darkMode ? "border-slate-800/50" : "border-gray-200"
            }`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-500" : "text-gray-600"
                }`}>
                Copyright 2025 © Quickai. All Right Reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className={`transition-colors hover:underline ${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}>
                  Terms of Service
                </a>
                <a
                  href="#"
                  className={`transition-colors hover:underline ${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}>
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className={`transition-colors hover:underline ${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}>
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
