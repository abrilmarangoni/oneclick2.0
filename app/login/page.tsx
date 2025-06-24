"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/logo"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    userType: "business",
  })

  const [verificationStep, setVerificationStep] = useState(false)
  const [verificationCode, setVerificationCode] = useState("")
  const [email, setEmail] = useState("")
  const [googleSignUpStep, setGoogleSignUpStep] = useState(false)

  // Add this useEffect to check URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get("mode") === "signup") {
      setIsLogin(false)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (e.target.name === "email") {
      setEmail(e.target.value)
    }
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      userType: formData.userType,
    })
  }

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLogin) {
      setVerificationStep(true)
    } else {
      // Handle login - for now, assume business type, but you'd get this from your auth system
      // This is just for demo purposes
      window.location.href = "/dashboard/business"
    }
  }

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Verifying code:", verificationCode)
    // Navigate to appropriate dashboard based on user type
    if (formData.userType === "business") {
      window.location.href = "/dashboard/business"
    } else {
      window.location.href = "/dashboard/personal"
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branded Section */}
      <div className="flex-1 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden flex flex-col justify-center items-center p-12">
        {/* Clean Minimal Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-cyan-300/15 to-blue-400/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-300/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-300/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 rounded-full blur-2xl"></div>
        </div>

        {/* Back to Home */}
        <Link
          href="/"
          className="absolute top-8 left-8 inline-flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-light">Back to home</span>
        </Link>

        {/* Main Content */}
        <div className="relative z-10 text-center text-gray-900 max-w-md">
          <div className="mb-8">
            <Logo size={48} className="mx-auto mb-6" />
          </div>
          <h1 className="text-4xl font-light mb-4 text-gray-900">Welcome back</h1>
          <p className="text-lg font-light text-gray-600">
            {isLogin ? "Sign in to your account" : "Create your account"}
          </p>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="flex-1 relative overflow-hidden flex flex-col justify-center items-center p-12">
        {/* Elegant background with subtle patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-teal-50/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-teal-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-100/30 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full blur-xl"></div>
        </div>

        {/* Glassmorphism container */}
        <div className="relative z-10 w-full max-w-sm">
          <div className="backdrop-blur-sm bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8">
            {googleSignUpStep ? (
              <>
                {/* Google Sign Up - Account Type Selection */}
                <div className="mb-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-light text-gray-900 mb-2">Choose your account type</h2>
                  <p className="text-gray-600 font-light">Select the type of account you want to create</p>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        setFormData({ ...formData, userType: "business" })
                        setGoogleSignUpStep(false)
                        // Navigate to business dashboard
                        window.location.href = "/dashboard/business"
                      }}
                      className="group relative p-4 border-2 border-gray-200 rounded-xl hover:border-teal-500 hover:shadow-md transition-all duration-200 text-center"
                    >
                      <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-gray-900 mb-1">Business</h3>
                      <p className="text-xs text-gray-600">For companies</p>
                    </button>

                    <button
                      onClick={() => {
                        setFormData({ ...formData, userType: "personal" })
                        setGoogleSignUpStep(false)
                        // Navigate to personal dashboard
                        window.location.href = "/dashboard/personal"
                      }}
                      className="group relative p-4 border-2 border-gray-200 rounded-xl hover:border-teal-500 hover:shadow-md transition-all duration-200 text-center"
                    >
                      <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-gray-900 mb-1">Personal</h3>
                      <p className="text-xs text-gray-600">For individuals</p>
                    </button>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => setGoogleSignUpStep(false)}
                    className="text-sm text-gray-500 hover:text-gray-700 font-light"
                  >
                    ← Back to sign up
                  </button>
                </div>
              </>
            ) : verificationStep ? (
              <>
                {/* Email Verification Step */}
                <div className="mb-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-light text-gray-900 mb-2">Check your email</h2>
                  <p className="text-gray-600 font-light">We sent a verification code to</p>
                  <p className="text-gray-900 font-medium">{formData.email}</p>
                </div>

                <form className="space-y-6" onSubmit={handleVerifyCode}>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Verification Code</Label>
                    <div className="flex justify-center space-x-3">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength={1}
                          value={verificationCode[index] || ""}
                          onChange={(e) => {
                            const value = e.target.value
                            if (value.match(/^[0-9]$/)) {
                              const newCode = verificationCode.split("")
                              newCode[index] = value
                              setVerificationCode(newCode.join(""))

                              // Auto-focus next input
                              if (index < 5) {
                                const nextInput = document.querySelector(
                                  `input[data-index="${index + 1}"]`,
                                ) as HTMLInputElement
                                if (nextInput) nextInput.focus()
                              }
                            }
                          }}
                          onKeyDown={(e) => {
                            // Handle backspace
                            if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
                              const prevInput = document.querySelector(
                                `input[data-index="${index - 1}"]`,
                              ) as HTMLInputElement
                              if (prevInput) prevInput.focus()
                            }
                          }}
                          data-index={index}
                          className="w-12 h-12 text-center text-lg font-medium border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:ring-teal-500 focus:outline-none transition-colors"
                        />
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-black hover:bg-gray-800 text-white font-medium rounded-lg"
                  >
                    Verify Email
                  </Button>
                </form>

                <div className="mt-6 text-center space-y-4">
                  <p className="text-sm text-gray-600 font-light">Didn't receive the code?</p>
                  <button
                    onClick={() => {
                      alert("Verification code resent!")
                    }}
                    className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                  >
                    Resend code
                  </button>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setVerificationStep(false)
                        setVerificationCode("")
                      }}
                      className="text-sm text-gray-500 hover:text-gray-700 font-light"
                    >
                      ← Back to sign up
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Form Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-light text-gray-900 mb-2">{isLogin ? "Log in" : "Sign up"}</h2>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleSignUp}>
                  {!isLogin && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="Alex"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="h-12 border-gray-200 focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Johnson"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="h-12 border-gray-200 focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                        />
                      </div>
                    </div>
                  )}

                  {!isLogin && (
                    <div className="space-y-2 mb-6">
                      <Label htmlFor="userType" className="text-sm font-medium text-gray-700">
                        Account Type
                      </Label>
                      <div className="relative">
                        <select
                          id="userType"
                          name="userType"
                          value={formData.userType}
                          onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                          className="h-12 w-full border border-gray-200 focus:border-teal-500 focus:ring-teal-500 rounded-lg px-3 bg-white appearance-none pr-10"
                        >
                          <option value="business">Business</option>
                          <option value="personal">Personal</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12 border-gray-200 focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="h-12 pr-10 border-gray-200 focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm Password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="h-12 pr-10 border-gray-200 focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  )}

                  {isLogin && (
                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                        <span className="text-sm text-gray-600 font-light">Remember me</span>
                      </label>
                      <Link href="#" className="text-sm text-teal-600 hover:text-teal-700 font-light">
                        Forgot Password?
                      </Link>
                    </div>
                  )}

                  {!isLogin && (
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          className="mt-1 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                        />
                        <span className="text-sm text-gray-600 font-light">
                          I agree to the{" "}
                          <Link href="#" className="text-teal-600 hover:text-teal-700">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="#" className="text-teal-600 hover:text-teal-700">
                            Privacy Policy
                          </Link>
                        </span>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full h-12 bg-black hover:bg-gray-800 text-white font-medium rounded-lg"
                  >
                    {isLogin ? "Enter" : "Create Account"}
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                  <Separator />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white px-4 text-sm text-gray-500 font-light">or</span>
                  </div>
                </div>

                {/* Google Sign In */}
                <Button
                  variant="outline"
                  className="w-full h-12 border-gray-200 hover:bg-gray-50 font-light rounded-lg"
                  onClick={() => {
                    if (!isLogin) {
                      setGoogleSignUpStep(true)
                    } else {
                      // For demo purposes, navigate to business dashboard
                      // In a real app, you'd get the user type from your auth system
                      window.location.href = "/dashboard/business"
                    }
                  }}
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Sign in with Google
                </Button>

                {/* Toggle Mode */}
                <div className="mt-6 text-center">
                  <span className="text-gray-600 font-light">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button onClick={toggleMode} className="text-teal-600 hover:text-teal-700 font-medium">
                      {isLogin ? "Sign up" : "Log in"}
                    </button>
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
