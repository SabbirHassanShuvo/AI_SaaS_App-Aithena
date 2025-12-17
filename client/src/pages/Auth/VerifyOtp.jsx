import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle, Sparkles, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VerifyOtp() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [resendDisabled, setResendDisabled] = useState(true);
    const [countdown, setCountdown] = useState(60); // Changed to 60 seconds (1 minute)

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Move to next input if current input is filled
        if (element.value !== '' && index < 5) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            const prevInput = document.getElementById(`otp-input-${index - 1}`);
            prevInput.focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSuccess(true);
    };

    const handleResendOTP = async () => {
        setResendDisabled(true);
        setCountdown(60); // Reset to 60 seconds (1 minute)
        // Simulate sending OTP
        await new Promise(resolve => setTimeout(resolve, 1000));
    };

    const handleBackToLogin = () => {
        setIsSuccess(false);
        setOtp(['', '', '', '', '', '']);
    };

    useEffect(() => {
        let timer;
        if (resendDisabled && countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        } else if (countdown === 0) {
            setResendDisabled(false);
        }
        return () => clearTimeout(timer);
    }, [countdown, resendDisabled]);

    // Format countdown as MM:SS
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
                                    Verify Your Account
                                </motion.h1>
                                <motion.p
                                    className="text-slate-500 text-sm"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Enter the 6-digit code sent to your email
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-2 flex items-center justify-center text-slate-400 text-sm"
                                >
                                    <Mail className="w-4 h-4 mr-1" />
                                    <span className="font-mono">user@example.com</span>
                                </motion.div>
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
                                    Verification Successful!
                                </motion.h1>
                                <motion.p
                                    className="text-slate-500 text-sm"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Your account has been verified successfully
                                </motion.p>
                            </>
                        )}
                    </div>

                    {/* Form or Success Message */}
                    <div className="px-8 pb-8">
                        {!isSuccess ? (
                            <form onSubmit={handleSubmit}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mb-8"
                                >
                                    <div className="flex justify-center space-x-3">
                                        {otp.map((digit, index) => (
                                            <input
                                                key={index}
                                                id={`otp-input-${index}`}
                                                type="text"
                                                maxLength="1"
                                                value={digit}
                                                onChange={(e) => handleChange(e.target, index)}
                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                                className="w-12 h-12 text-center text-xl font-bold border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                                autoFocus={index === 0}
                                            />
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    disabled={isLoading || otp.some(digit => digit === '')}
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
                                            <span>Verifying...</span>
                                        </>
                                    ) : (
                                        <span>Verify Code</span>
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
                                    <span>Continue to Dashboard</span>
                                </motion.button>
                            </motion.div>
                        )}

                        {!isSuccess && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="mt-6 text-center"
                            >
                                <p className="text-slate-500 text-sm">
                                    {resendDisabled ? (
                                        <span>Resend code in {formatTime(countdown)}</span>
                                    ) : (
                                        <>
                                            Didn't receive the code?{' '}
                                            <button
                                                onClick={handleResendOTP}
                                                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                                            >
                                                Resend OTP
                                            </button>
                                        </>
                                    )}
                                </p>
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
