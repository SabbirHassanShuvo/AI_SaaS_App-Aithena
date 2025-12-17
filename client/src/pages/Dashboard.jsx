import React, { useState } from "react";
import {
  Home,
  Edit,
  Hash,
  Image,
  Trash2,
  FileText,
  User,
  LogOut,
  Sparkles,
  Zap,
  Palette,
  Wand2,
  Brain,
  ArrowRight,
  ChevronDown,
  Search,
  MoreVertical,
  X,
  Shield,
  CreditCard,
  Settings,
  Mail,
  Lock,
  Plus,
  Edit2,
  Check,
} from "lucide-react";
import { FaGoogle } from "react-icons/fa";
const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [accountActiveTab, setAccountActiveTab] = useState("profile");

  const user = {
    name: "William Mark",
    avatar: "https://placehold.co/80x80/6366f1/ffffff?text=WM",
    plan: "Premium",
    email: "user.greatstack@gmail.com",
    connectedAccounts: ["Google"],
    subscription: {
      type: "Premium",
      price: "$16 / month",
      renewal: "Renews Aug 3",
    },
    paymentMethods: [{ type: "Visa", last4: "4242", default: true }],
  };

  const stats = [
    {
      title: "Total Creations",
      value: "1",
      icon: <Sparkles className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Plan Status",
      value: "Premium",
      icon: <Zap className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-400",
    },
  ];

  const recentCreations = [
    {
      id: 1,
      title: "Navigating the Technological Frontier: Trends Shaping Our Future",
      type: "article",
      date: "6/11/2025",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: 2,
      title: "Background removed from an image.",
      type: "image",
      date: "6/11/2025",
      icon: <Image className="w-4 h-4" />,
    },
  ];

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home className="w-5 h-5" /> },
    {
      id: "write-article",
      label: "Write Article",
      icon: <Edit className="w-5 h-5" />,
    },
    {
      id: "blog-titles",
      label: "Blog Titles",
      icon: <Hash className="w-5 h-5" />,
    },
    {
      id: "generate-images",
      label: "Generate Images",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      id: "remove-background",
      label: "Remove Background",
      icon: <Wand2 className="w-5 h-5" />,
    },
    {
      id: "remove-object",
      label: "Remove Object",
      icon: <Trash2 className="w-5 h-5" />,
    },
    {
      id: "review-resume",
      label: "Review Resume",
      icon: <Brain className="w-5 h-5" />,
    },
  ];

  const AccountModal = () => {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-fadeIn">
          {/* Header */}
          <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Account</h2>
              <p className="text-sm text-gray-500">Manage your account info.</p>
            </div>
            <button
              onClick={() => setShowAccountModal(false)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 border-r border-gray-200 p-6">
              <div className="space-y-2">
                <button
                  onClick={() => setAccountActiveTab("profile")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    accountActiveTab === "profile"
                      ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}>
                  <User className="w-4 h-4" />
                  Profile
                </button>
                <button
                  onClick={() => setAccountActiveTab("security")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    accountActiveTab === "security"
                      ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}>
                  <Shield className="w-4 h-4" />
                  Security
                </button>
                <button
                  onClick={() => setAccountActiveTab("billing")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    accountActiveTab === "billing"
                      ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}>
                  <CreditCard className="w-4 h-4" />
                  Billing
                </button>
                <button
                  onClick={() => setAccountActiveTab("settings")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    accountActiveTab === "settings"
                      ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}>
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <div className="text-xs text-gray-500">Secured by Clerk</div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              {accountActiveTab === "profile" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">
                      Profile details
                    </h3>
                    <button className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                      Update profile
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Profile Section */}
                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {user.name}
                          </h4>
                          <p className="text-sm text-gray-500">Great Stack</p>
                        </div>
                      </div>
                    </div>

                    {/* Email Addresses */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">
                        Email addresses
                      </h4>
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-900">{user.email}</span>
                          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                            Primary
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-1 text-gray-400 hover:text-gray-600">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
                        <Plus className="w-4 h-4" />
                        Add email address
                      </button>
                    </div>

                    {/* Connected Accounts */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">
                        Connected accounts
                      </h4>
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FaGoogle className="w-4 h-4 text-red-500" />
                          <span className="text-gray-900">
                            Google • {user.email}
                          </span>
                        </div>
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {accountActiveTab === "security" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    Security settings
                  </h3>

                  <div className="space-y-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Lock className="w-5 h-5 text-gray-400" />
                          <h4 className="font-medium text-gray-900">
                            Password
                          </h4>
                        </div>
                        <button className="px-3 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                          Change password
                        </button>
                      </div>
                      <p className="text-sm text-gray-500">
                        Last changed on June 1, 2025
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-gray-400" />
                          <h4 className="font-medium text-gray-900">
                            Two-factor authentication
                          </h4>
                        </div>
                        <button className="px-3 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                          Set up 2FA
                        </button>
                      </div>
                      <p className="text-sm text-gray-500">
                        Add an extra layer of security to your account
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-gray-400" />
                          <h4 className="font-medium text-gray-900">
                            Session management
                          </h4>
                        </div>
                        <button className="px-3 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                          View sessions
                        </button>
                      </div>
                      <p className="text-sm text-gray-500">
                        Manage active sessions and log out from other devices
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {accountActiveTab === "billing" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">Billing</h3>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex space-x-6 mb-4">
                      <button className="px-4 py-2 font-medium text-gray-900 border-b-2 border-indigo-500">
                        Subscription
                      </button>
                      <button className="px-4 py-2 font-medium text-gray-500 hover:text-gray-700">
                        Statements
                      </button>
                      <button className="px-4 py-2 font-medium text-gray-500 hover:text-gray-700">
                        Payments
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Subscription */}
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-gray-900">
                          Subscription
                        </h4>
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              {user.subscription.type}
                            </div>
                            <div className="text-sm text-gray-500">
                              {user.subscription.renewal}
                            </div>
                          </div>
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {user.subscription.price}
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                          Switch plans
                        </button>
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-gray-900">
                          Payment methods
                        </h4>
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="space-y-3">
                        {user.paymentMethods.map((method, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                <CreditCard className="w-4 h-4 text-gray-500" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">
                                  {method.type} • {method.last4}
                                </div>
                                {method.default && (
                                  <span className="text-xs text-gray-500">
                                    Default
                                  </span>
                                )}
                              </div>
                            </div>
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        ))}

                        <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
                          <Plus className="w-4 h-4" />
                          Add new payment method
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {accountActiveTab === "settings" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900">Settings</h3>

                  <div className="space-y-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Settings className="w-5 h-5 text-gray-400" />
                          <h4 className="font-medium text-gray-900">
                            Notification preferences
                          </h4>
                        </div>
                        <button className="px-3 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                          Manage notifications
                        </button>
                      </div>
                      <p className="text-sm text-gray-500">
                        Choose how you want to be notified about updates and
                        activity
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Edit2 className="w-5 h-5 text-gray-400" />
                          <h4 className="font-medium text-gray-900">
                            Appearance
                          </h4>
                        </div>
                        <button className="px-3 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                          Customize theme
                        </button>
                      </div>
                      <p className="text-sm text-gray-500">
                        Change the look and feel of your dashboard
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-gray-400" />
                          <h4 className="font-medium text-gray-900">
                            Data & privacy
                          </h4>
                        </div>
                        <button className="px-3 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                          Manage data
                        </button>
                      </div>
                      <p className="text-sm text-gray-500">
                        Control what data is collected and how it's used
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-md opacity-75" />
              <Sparkles className="w-8 h-8 text-white relative z-10" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Quickai
            </h1>
          </div>

          {/* User Profile */}
          <div
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-all duration-200"
            onClick={() => setShowAccountModal(true)}>
            <img
              src={user.avatar}
              alt="User"
              className="w-10 h-10 rounded-full ring-2 ring-indigo-100"
            />
            <div>
              <div className="font-semibold text-gray-900">{user.name}</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-200 shadow-sm"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}>
                  <div
                    className={`p-1 rounded-lg group-hover:bg-gray-200 ${
                      activeTab === item.id ? "bg-white shadow-sm" : ""
                    }`}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{user.name}</div>
                <div className="text-xs text-purple-600 font-medium">
                  {user.plan} Plan
                </div>
              </div>
            </div>
            <button className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Top Bar */}
        <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Dashboard
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2.5 w-64 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200"
                />
              </div>
              <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200">
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-3xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Creations */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">
                Recent Creations
              </h3>
              <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-2 transition-colors duration-200">
                View All
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {recentCreations.map((creation) => (
                <div
                  key={creation.id}
                  className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 group">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2 rounded-lg ${
                        creation.type === "article"
                          ? "bg-blue-50 text-blue-600"
                          : "bg-indigo-50 text-indigo-600"
                      } group-hover:scale-110 transition-transform duration-200`}>
                      {creation.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 leading-tight group-hover:text-indigo-700 transition-colors duration-200">
                        {creation.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            creation.type === "article"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-indigo-100 text-indigo-700"
                          }`}>
                          {creation.type}
                        </span>
                        <span className="ml-3 text-gray-400">
                          {creation.date}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Account Modal */}
      {showAccountModal && <AccountModal />}
    </div>
  );
};

export default UserDashboard;
