import React, { useState } from 'react';
import { Eye, EyeOff, Lock, CheckCircle, Sparkles, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);

    const validatePasswordMatch = (confirmPass) => {
        setPasswordMatch(password === confirmPass);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordMatch(false);
            return;
        }

        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSuccess(true);
    };

    const handleBackToLogin = () => {
        setIsSuccess(false);
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 flex items-center justify-center p-4">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse animation-delay-4000"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-md"
            >
                {/* Logo at top */}
                <div className="mb-8 text-center">
                    <div className="inline-flex items-center space-x-2 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Quickai</h1>
                    </div>
                </div>

                {/* Main card */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="p-8 pb-6 text-center">
                        {!isSuccess ? (
                            <>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: 0.2
                                    }}
                                    className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6"
                                >
                                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded animate-pulse"></div>
                                    </div>
                                </motion.div>

                                <motion.h1
                                    className="text-3xl font-bold text-slate-800 mb-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    Reset Your Password
                                </motion.h1>
                                <motion.p
                                    className="text-slate-500 text-sm"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Create a new password for your account
                                </motion.p>
                            </>
                        ) : (
                            <>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: 0.2
                                    }}
                                    className="mx-auto w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6"
                                >
                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                </motion.div>

                                <motion.h1
                                    className="text-3xl font-bold text-slate-800 mb-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    Password Reset Successful!
                                </motion.h1>
                                <motion.p
                                    className="text-slate-500 text-sm"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Your password has been updated successfully
                                </motion.p>
                            </>
                        )}
                    </div>

                    {/* Form or Success Message */}
                    <div className="px-8 pb-8">
                        {!isSuccess ? (
                            <form onSubmit={handleSubmit}>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mb-6"
                                >
                                    <label htmlFor="password" className="block text-sm font-medium text-slate-600 mb-2">
                                        New Password
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full pl-10 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="••••••••"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mb-6"
                                >
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-600 mb-2">
                                        Confirm New Password
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            id="confirmPassword"
                                            value={confirmPassword}
                                            onChange={(e) => {
                                                setConfirmPassword(e.target.value);
                                                validatePasswordMatch(e.target.value);
                                            }}
                                            className={`w-full pl-10 pr-12 py-3 bg-slate-50 border ${!passwordMatch && confirmPassword ? 'border-red-300' : 'border-slate-200'
                                                } rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                                            placeholder="••••••••"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                        >
                                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                        {!passwordMatch && confirmPassword && (
                                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                                                <CheckCircle className="w-5 h-5 text-red-500" />
                                            </div>
                                        )}
                                    </div>
                                    {!passwordMatch && confirmPassword && (
                                        <p className="mt-1 text-sm text-red-600">Passwords do not match</p>
                                    )}
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    disabled={isLoading || !passwordMatch || !confirmPassword}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            <span>Resetting password...</span>
                                        </>
                                    ) : (
                                        <span>Reset Password</span>
                                    )}
                                </motion.button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-center"
                            >
                                <motion.button
                                    onClick={handleBackToLogin}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    <span>Back to Login</span>
                                </motion.button>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-75 animation-delay-1000"></div>
            </motion.div>
        </div>
    );
}
