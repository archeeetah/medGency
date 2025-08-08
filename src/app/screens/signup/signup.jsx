"use client";

import Image from "next/image";
import { useState } from "react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup
    alert("Signed up!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-white">
      {/* Doodle background for the whole page */}
      <Image
        src="/images/backgroundImage.png"
        alt="Doodle Background"
        fill
        className="object-cover opacity-100 z-0"
        style={{ pointerEvents: 'none' }}
        priority
      />
      {/* Signup container above the background */}
      <div className="w-full max-w-5xl h-[80vh] flex flex-col md:flex-row shadow-2xl relative z-10">
        {/* Left: Signup Form */}
        <div className="md:w-1/2 flex flex-col justify-center bg-[#92DCE53D] backdrop-blur-md p-8 md:p-12 rounded-tl-3xl rounded-bl-3xl border-r border-white/40">
          <div className="flex rounded-2xl border border-[#5ec7c0] bg-transparent shadow-md overflow-hidden mb-8 justify-center">
            <button
              className="px-8 py-3 font-semibold rounded-2xl shadow-md text-white bg-[#073c57]"
              type="button"
              disabled
            >
              Sign-up
            </button>
          </div>
          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a3557] bg-white placeholder:text-[#0a3557] text-[#0a3557]"
                placeholder="Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">E-mail</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a3557] bg-white placeholder:text-[#0a3557] text-[#0a3557]"
                placeholder="doc@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a3557] bg-white pr-10 placeholder:text-[#3D6B82] text-[#0a3557]"
                placeholder="********"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500 hover:text-[#0a3557]"
                onMouseDown={() => setShowPassword(true)}
                onMouseUp={() => setShowPassword(false)}
                onMouseLeave={() => setShowPassword(false)}
                tabIndex={-1}
                aria-label="Show password"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 002.25 12s3.75 7.5 9.75 7.5c1.772 0 3.432-.293 4.92-.807M21.75 12c-.621-1.591-1.67-3.614-3.27-5.223M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                  </svg>
                )}
              </button>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a3557] bg-white pr-10 placeholder:text-[#3D6B82] text-[#0a3557]"
                placeholder="********"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500 hover:text-[#0a3557]"
                onMouseDown={() => setShowConfirmPassword(true)}
                onMouseUp={() => setShowConfirmPassword(false)}
                onMouseLeave={() => setShowConfirmPassword(false)}
                tabIndex={-1}
                aria-label="Show confirm password"
              >
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 002.25 12s3.75 7.5 9.75 7.5c1.772 0 3.432-.293 4.92-.807M21.75 12c-.621-1.591-1.67-3.614-3.27-5.223M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                  </svg>
                )}
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-2 rounded-lg bg-[#0a3557] text-white font-semibold text-lg shadow hover:bg-[#174a6c] transition"
            >
              Sign-up
            </button>
            <div className="flex items-center gap-2 my-4">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="text-xs text-gray-500">or continue with</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
            <div className="flex gap-4 justify-center">
              <button type="button" className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 shadow">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><g><circle cx="12" cy="12" r="12" fill="#fff"/><path d="M21.805 12.227c0-.818-.073-1.597-.21-2.346H12.19v4.44h5.44a4.66 4.66 0 01-2.02 3.06v2.54h3.27c1.92-1.77 3.025-4.38 3.025-7.694z" fill="#4285F4"/><path d="M12.19 22c2.73 0 5.02-.9 6.69-2.44l-3.27-2.54c-.91.61-2.07.98-3.42.98-2.63 0-4.86-1.77-5.66-4.15H3.1v2.61A9.81 9.81 0 0012.19 22z" fill="#34A853"/><path d="M6.53 13.85a5.89 5.89 0 010-3.7v-2.61H3.1a9.81 9.81 0 000 8.92l3.43-2.61z" fill="#FBBC05"/><path d="M12.19 7.58c1.48 0 2.8.51 3.84 1.51l2.88-2.88C17.21 4.9 14.92 4 12.19 4A9.81 9.81 0 003.1 7.54l3.43 2.61c.8-2.38 3.03-4.15 5.66-4.15z" fill="#EA4335"/></g></svg>
              </button>
              <button type="button" className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 shadow">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><g><circle cx="12" cy="12" r="12" fill="#000"/><path d="M16.365 12.27c0-2.41-1.97-4.37-4.37-4.37-2.41 0-4.37 1.96-4.37 4.37 0 2.41 1.96 4.37 4.37 4.37 2.4 0 4.37-1.96 4.37-4.37zm-4.37 2.7c-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7z" fill="#fff"/></g></svg>
              </button>
            </div>
          </form>
        </div>
        {/* Right: Images */}
        <div className="md:w-1/2 w-full flex flex-col justify-between items-center bg-[#0a3557] px-6 rounded-tr-3xl rounded-br-3xl h-full">
          <div className="w-full flex flex-col items-center">
            <Image
              src="/icons/logo.png"
              alt="MedGency Logo"
              width={200}
              height={150}
              className="mb-10 p-2 mt-10"
              priority
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <Image
              src="/images/loginImage.png"
              alt="Doctors Illustration"
              width={543}
              height={674}
              className="mb-0 p-0"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
