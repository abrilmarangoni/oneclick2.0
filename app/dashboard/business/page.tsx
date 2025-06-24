"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/logo"
import {
  Moon,
  Sun,
  LogOut,
  Upload,
  Settings,
  CreditCard,
  FileText,
  Code,
  HelpCircle,
  User,
  Home,
  TrendingUp,
  DollarSign,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  CheckCircle,
  Plus,
  MoreHorizontal,
  Calendar,
  Zap,
} from "lucide-react"

export default function BusinessDashboard() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [storeName, setStoreName] = useState("Acme Store")
  const [oneClickDiscount, setOneClickDiscount] = useState("5")
  const [stripeConnected, setStripeConnected] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleLogout = () => {
    window.location.href = "/login"
  }

  const connectStripe = () => {
    setStripeConnected(true)
  }

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "profile", label: "Profile", icon: User },
    { id: "transactions", label: "Transactions", icon: CreditCard },
    { id: "developer", label: "Developer Settings", icon: Code },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className={`text-3xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Good morning, Sarah 👋
                </h1>
                <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"} mt-1`}>
                  Here's what's happening with your store today.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" className="h-10">
                  <Calendar className="w-4 h-4 mr-2" />
                  Last 30 days
                </Button>
                <Button className="h-10 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600">
                  <Plus className="w-4 h-4 mr-2" />
                  New Payment
                </Button>
              </div>
            </div>

            {/* Key Metrics - Modern Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm hover:shadow-md transition-shadow`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Total Revenue
                      </p>
                      <p className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-2`}>$45,231</p>
                      <div className="flex items-center mt-2">
                        <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm text-emerald-500 font-medium ml-1">+20.1%</span>
                        <span className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"} ml-1`}>
                          vs last month
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm hover:shadow-md transition-shadow`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        OneClick Orders
                      </p>
                      <p className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-2`}>2,350</p>
                      <div className="flex items-center mt-2">
                        <ArrowUpRight className="w-4 h-4 text-teal-500" />
                        <span className="text-sm text-teal-500 font-medium ml-1">+180.1%</span>
                        <span className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"} ml-1`}>
                          vs last month
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm hover:shadow-md transition-shadow`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Conversion Rate
                      </p>
                      <p className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-2`}>12.5%</p>
                      <div className="flex items-center mt-2">
                        <ArrowUpRight className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-blue-500 font-medium ml-1">+19%</span>
                        <span className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"} ml-1`}>
                          vs last month
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm hover:shadow-md transition-shadow`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Active Users
                      </p>
                      <p className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-2`}>573</p>
                      <div className="flex items-center mt-2">
                        <ArrowDownRight className="w-4 h-4 text-orange-500" />
                        <span className="text-sm text-orange-500 font-medium ml-1">-12%</span>
                        <span className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"} ml-1`}>
                          vs last hour
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card
                  className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className={`text-xl ${darkMode ? "text-white" : "text-gray-900"}`}>
                          Recent Transactions
                        </CardTitle>
                        <CardDescription className={darkMode ? "text-gray-400" : "text-gray-600"}>
                          Your latest payment activity
                        </CardDescription>
                      </div>
                      <Button variant="ghost" size="sm">
                        View all
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        id: "1",
                        customer: "john@example.com",
                        amount: "$89.99",
                        time: "2 min ago",
                        status: "completed",
                        avatar: "JD",
                      },
                      {
                        id: "2",
                        customer: "sarah@example.com",
                        amount: "$156.50",
                        time: "5 min ago",
                        status: "completed",
                        avatar: "SW",
                      },
                      {
                        id: "3",
                        customer: "mike@example.com",
                        amount: "$45.00",
                        time: "12 min ago",
                        status: "processing",
                        avatar: "MJ",
                      },
                      {
                        id: "4",
                        customer: "lisa@example.com",
                        amount: "$299.99",
                        time: "18 min ago",
                        status: "completed",
                        avatar: "LB",
                      },
                    ].map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">{transaction.avatar}</span>
                          </div>
                          <div>
                            <p className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                              {transaction.customer}
                            </p>
                            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                              {transaction.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-right">
                            <p className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                              {transaction.amount}
                            </p>
                            <Badge
                              variant={transaction.status === "completed" ? "default" : "secondary"}
                              className={
                                transaction.status === "completed"
                                  ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                                  : ""
                              }
                            >
                              {transaction.status}
                            </Badge>
                          </div>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Performance Stats */}
              <div className="space-y-6">
                <Card
                  className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
                >
                  <CardHeader>
                    <CardTitle className={`text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>
                      Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                          OneClick Adoption
                        </span>
                        <span className={`text-sm font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>78%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full"
                          style={{ width: "78%" }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                          Customer Satisfaction
                        </span>
                        <span className={`text-sm font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>94%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full"
                          style={{ width: "94%" }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                          Cart Recovery
                        </span>
                        <span className={`text-sm font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>65%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                          style={{ width: "65%" }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
                >
                  <CardHeader>
                    <CardTitle className={`text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start h-12">
                      <CreditCard className="w-4 h-4 mr-3" />
                      Process Refund
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-12">
                      <FileText className="w-4 h-4 mr-3" />
                      Generate Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-12">
                      <Settings className="w-4 h-4 mr-3" />
                      Update Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )

      case "profile":
        return (
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h1 className={`text-3xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                Complete your merchant information
              </h1>
              <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"} mt-2`}>
                Set up your store profile and payment preferences
              </p>
            </div>

            <div className="space-y-8">
              {/* Store Information */}
              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <Label
                          htmlFor="storeName"
                          className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                        >
                          Storename*
                        </Label>
                        <Input
                          id="storeName"
                          value={storeName}
                          onChange={(e) => setStoreName(e.target.value)}
                          placeholder="Click to write..."
                          className={`h-12 ${darkMode ? "bg-gray-700/50 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}`}
                        />
                      </div>

                      <div className="space-y-3">
                        <Label
                          htmlFor="discount"
                          className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                        >
                          One Click Discount
                          <span className="ml-2 text-xs text-gray-500">ⓘ</span>
                        </Label>
                        <div className="relative">
                          <Input
                            id="discount"
                            type="number"
                            value={oneClickDiscount}
                            onChange={(e) => setOneClickDiscount(e.target.value)}
                            className={`h-12 pr-8 ${darkMode ? "bg-gray-700/50 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}`}
                          />
                          <span
                            className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                          >
                            %
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Logo
                      </Label>
                      <div
                        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                          darkMode
                            ? "border-gray-600 bg-gray-700/30 hover:border-gray-500"
                            : "border-gray-300 bg-gray-50 hover:border-gray-400"
                        }`}
                      >
                        <div className="space-y-4">
                          <div className="w-12 h-12 mx-auto bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                            <Upload className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <Button variant="ghost" className="text-teal-600 hover:text-teal-700 font-medium">
                              Select a file
                            </Button>
                            <p className={`text-sm mt-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>or</p>
                            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                              Drag and drop your logo here
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stripe Connection */}
              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
              >
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div>
                      <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                        Connect to Your Existing Stripe Account
                      </h3>
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} mt-1`}>(Optional)</p>
                    </div>

                    {stripeConnected ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-center space-x-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                          <CheckCircle className="h-5 w-5 text-emerald-600" />
                          <span className={`font-medium ${darkMode ? "text-emerald-300" : "text-emerald-800"}`}>
                            Stripe Connected Successfully
                          </span>
                        </div>
                        <Button variant="outline" className="h-12">
                          Manage Stripe Settings
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={connectStripe}
                        className="h-12 px-8 bg-[#635BFF] hover:bg-[#5851EB] text-white font-medium"
                      >
                        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
                        </svg>
                        Connect to Stripe
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Save Button */}
              <div className="flex justify-center">
                <Button className="h-12 px-12 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium">
                  Save Profile
                </Button>
              </div>
            </div>
          </div>
        )

      case "transactions":
        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className={`text-3xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Transactions</h1>
                <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"} mt-1`}>
                  Monitor and manage all your payment transactions
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" className="h-10">
                  <Calendar className="w-4 h-4 mr-2" />
                  Last 30 days
                </Button>
                <Button variant="outline" className="h-10">
                  Export
                </Button>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Total Volume
                      </p>
                      <p className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-1`}>$127,543</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Successful
                      </p>
                      <p className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-1`}>1,247</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Failed</p>
                      <p className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-1`}>23</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                      <span className="w-5 h-5 text-white text-lg">×</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Processing
                      </p>
                      <p className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-1`}>8</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Transactions Table */}
            <Card
              className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className={`text-xl ${darkMode ? "text-white" : "text-gray-900"}`}>
                    Recent Transactions
                  </CardTitle>
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Input
                        placeholder="Search transactions..."
                        className={`pl-10 w-80 ${darkMode ? "bg-gray-700/50 border-gray-600" : "bg-gray-50 border-gray-200"}`}
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "txn_1234567890",
                      customer: "john.doe@example.com",
                      amount: "$299.99",
                      date: "Dec 15, 2024 2:30 PM",
                      status: "completed",
                      method: "OneClick",
                      avatar: "JD",
                    },
                    {
                      id: "txn_1234567891",
                      customer: "sarah.wilson@example.com",
                      amount: "$156.50",
                      date: "Dec 15, 2024 1:45 PM",
                      status: "completed",
                      method: "OneClick",
                      avatar: "SW",
                    },
                    {
                      id: "txn_1234567892",
                      customer: "mike.johnson@example.com",
                      amount: "$89.99",
                      date: "Dec 15, 2024 12:20 PM",
                      status: "processing",
                      method: "Card",
                      avatar: "MJ",
                    },
                    {
                      id: "txn_1234567893",
                      customer: "lisa.brown@example.com",
                      amount: "$445.00",
                      date: "Dec 15, 2024 11:15 AM",
                      status: "completed",
                      method: "OneClick",
                      avatar: "LB",
                    },
                    {
                      id: "txn_1234567894",
                      customer: "david.lee@example.com",
                      amount: "$67.25",
                      date: "Dec 15, 2024 10:30 AM",
                      status: "failed",
                      method: "Card",
                      avatar: "DL",
                    },
                  ].map((transaction) => (
                    <div
                      key={transaction.id}
                      className={`flex items-center justify-between p-6 rounded-xl border transition-all hover:shadow-md ${
                        darkMode
                          ? "border-gray-700/50 bg-gray-700/30 hover:bg-gray-700/50"
                          : "border-gray-200 bg-gray-50 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                          <span className="text-white font-medium">{transaction.avatar}</span>
                        </div>
                        <div>
                          <p className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                            {transaction.amount}
                          </p>
                          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                            {transaction.customer}
                          </p>
                          <p className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-500"} mt-1`}>
                            ID: {transaction.id}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                            {transaction.date}
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge
                              variant={transaction.method === "OneClick" ? "default" : "secondary"}
                              className={transaction.method === "OneClick" ? "bg-teal-500 hover:bg-teal-600" : ""}
                            >
                              {transaction.method}
                            </Badge>
                            <Badge
                              variant={
                                transaction.status === "completed"
                                  ? "default"
                                  : transaction.status === "processing"
                                    ? "secondary"
                                    : "destructive"
                              }
                              className={
                                transaction.status === "completed"
                                  ? "bg-emerald-500 hover:bg-emerald-600"
                                  : transaction.status === "processing"
                                    ? "bg-yellow-500 hover:bg-yellow-600"
                                    : ""
                              }
                            >
                              {transaction.status}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="rounded-lg">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "developer":
        return (
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className={`text-3xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                Developer Settings
              </h1>
              <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"} mt-2`}>
                API keys, webhooks, and technical integration settings
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* API Keys */}
              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
              >
                <CardHeader>
                  <CardTitle className={`text-xl ${darkMode ? "text-white" : "text-gray-900"}`}>API Keys</CardTitle>
                  <CardDescription className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    Use these keys to integrate OneClick into your application
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Publishable Key
                    </Label>
                    <div className="flex items-center space-x-3">
                      <Input
                        value="pk_test_51234567890abcdef..."
                        readOnly
                        className={`font-mono text-sm ${darkMode ? "bg-gray-700/50 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}`}
                      />
                      <Button variant="outline" size="sm" className="px-4">
                        Copy
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Secret Key
                    </Label>
                    <div className="flex items-center space-x-3">
                      <Input
                        value="sk_test_••••••••••••••••••••••••"
                        readOnly
                        className={`font-mono text-sm ${darkMode ? "bg-gray-700/50 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}`}
                      />
                      <Button variant="outline" size="sm" className="px-4">
                        Reveal
                      </Button>
                    </div>
                  </div>

                  <Separator className={darkMode ? "bg-gray-700" : "bg-gray-200"} />

                  <div className="flex space-x-3">
                    <Button variant="outline" className="flex-1">
                      Regenerate Keys
                    </Button>
                    <Button className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600">
                      View Documentation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Webhooks */}
              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
              >
                <CardHeader>
                  <CardTitle className={`text-xl ${darkMode ? "text-white" : "text-gray-900"}`}>Webhooks</CardTitle>
                  <CardDescription className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    Configure webhook endpoints for real-time notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Webhook URL
                    </Label>
                    <Input
                      placeholder="https://your-site.com/webhook"
                      className={darkMode ? "bg-gray-700/50 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Events to Subscribe
                    </Label>
                    <div className="space-y-3">
                      {[
                        { event: "payment.completed", desc: "Payment successfully processed" },
                        { event: "payment.failed", desc: "Payment failed or declined" },
                        { event: "refund.created", desc: "Refund has been issued" },
                        { event: "customer.created", desc: "New customer registered" },
                      ].map((item) => (
                        <label
                          key={item.event}
                          className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/30"
                        >
                          <input
                            type="checkbox"
                            defaultChecked
                            className="mt-1 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                          />
                          <div>
                            <span
                              className={`text-sm font-mono font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                            >
                              {item.event}
                            </span>
                            <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} mt-1`}>
                              {item.desc}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600">
                    Save Webhook Configuration
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* SDK & Documentation */}
            <Card
              className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
            >
              <CardHeader>
                <CardTitle className={`text-xl ${darkMode ? "text-white" : "text-gray-900"}`}>
                  SDKs & Documentation
                </CardTitle>
                <CardDescription className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Official libraries and comprehensive guides for integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "JavaScript SDK",
                      desc: "Official JavaScript library for web applications",
                      icon: "🟨",
                      command: "npm install @oneclick/js",
                    },
                    {
                      title: "React Components",
                      desc: "Pre-built React components for quick integration",
                      icon: "⚛️",
                      command: "npm install @oneclick/react",
                    },
                    {
                      title: "Node.js SDK",
                      desc: "Server-side SDK for Node.js applications",
                      icon: "🟢",
                      command: "npm install @oneclick/node",
                    },
                    {
                      title: "Python SDK",
                      desc: "Python library for backend integration",
                      icon: "🐍",
                      command: "pip install oneclick-python",
                    },
                    {
                      title: "API Reference",
                      desc: "Complete REST API documentation",
                      icon: "📚",
                      command: "View Documentation",
                    },
                    {
                      title: "Postman Collection",
                      desc: "Ready-to-use API collection for testing",
                      icon: "🚀",
                      command: "Import Collection",
                    },
                  ].map((sdk, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-xl border cursor-pointer hover:shadow-md transition-all ${
                        darkMode
                          ? "border-gray-700/50 bg-gray-700/30 hover:bg-gray-700/50"
                          : "border-gray-200 bg-gray-50 hover:bg-white"
                      }`}
                    >
                      <div className="text-2xl mb-3">{sdk.icon}</div>
                      <h4 className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"} mb-2`}>{sdk.title}</h4>
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} mb-4`}>{sdk.desc}</p>
                      <code
                        className={`text-xs px-3 py-2 rounded-lg ${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"} font-mono`}
                      >
                        {sdk.command}
                      </code>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "reports":
        return (
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className={`text-3xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                Reports & Analytics
              </h1>
              <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"} mt-2`}>
                Generate detailed reports and export your business data
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Reports Generated
                      </p>
                      <p className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-2`}>47</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Data Exported
                      </p>
                      <p className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-2`}>2.4GB</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                        />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Scheduled Reports
                      </p>
                      <p className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-2`}>12</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Report Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  category: "Financial Reports",
                  description: "Revenue, profit, and financial performance analytics",
                  reports: [
                    {
                      name: "Daily Sales Report",
                      desc: "Complete breakdown of daily transactions",
                      period: "Last 30 days",
                    },
                    {
                      name: "Monthly Revenue Summary",
                      desc: "Monthly revenue and performance metrics",
                      period: "Last 12 months",
                    },
                    { name: "Profit & Loss Statement", desc: "Comprehensive P&L analysis", period: "Custom range" },
                    { name: "Tax Report", desc: "Tax-ready financial statements", period: "Quarterly" },
                  ],
                },
                {
                  category: "Customer Analytics",
                  description: "Customer behavior, retention, and engagement insights",
                  reports: [
                    {
                      name: "Customer Behavior Analysis",
                      desc: "Customer journey and interaction patterns",
                      period: "Last 90 days",
                    },
                    {
                      name: "Retention Report",
                      desc: "Customer retention and churn analysis",
                      period: "Last 6 months",
                    },
                    {
                      name: "Demographic Insights",
                      desc: "Customer demographics and segmentation",
                      period: "All time",
                    },
                    {
                      name: "Lifetime Value Report",
                      desc: "Customer lifetime value calculations",
                      period: "Last year",
                    },
                  ],
                },
                {
                  category: "OneClick Performance",
                  description: "OneClick adoption rates and conversion analytics",
                  reports: [
                    {
                      name: "OneClick Adoption Report",
                      desc: "OneClick usage and adoption rates",
                      period: "Last 30 days",
                    },
                    {
                      name: "Conversion Analysis",
                      desc: "Conversion rates and funnel analysis",
                      period: "Last 90 days",
                    },
                    {
                      name: "Cart Recovery Report",
                      desc: "Abandoned cart recovery performance",
                      period: "Last 60 days",
                    },
                    {
                      name: "Payment Method Analysis",
                      desc: "Payment method preferences and success rates",
                      period: "Last 3 months",
                    },
                  ],
                },
                {
                  category: "Operational Reports",
                  description: "System performance, errors, and operational metrics",
                  reports: [
                    { name: "Transaction Log", desc: "Detailed transaction history and logs", period: "Custom range" },
                    { name: "Error Analysis", desc: "Payment failures and error patterns", period: "Last 30 days" },
                    { name: "API Usage Report", desc: "API calls and usage statistics", period: "Last month" },
                    { name: "System Performance", desc: "Response times and system health", period: "Last 7 days" },
                  ],
                },
              ].map((category, categoryIndex) => (
                <Card
                  key={categoryIndex}
                  className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
                >
                  <CardHeader>
                    <CardTitle className={`text-xl ${darkMode ? "text-white" : "text-gray-900"}`}>
                      {category.category}
                    </CardTitle>
                    <CardDescription className={darkMode ? "text-gray-400" : "text-gray-600"}>
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.reports.map((report, reportIndex) => (
                        <div
                          key={reportIndex}
                          className={`p-4 rounded-lg border transition-all hover:shadow-sm ${
                            darkMode
                              ? "border-gray-700/50 bg-gray-700/30 hover:bg-gray-700/50"
                              : "border-gray-200 bg-gray-50 hover:bg-white"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                                {report.name}
                              </h4>
                              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} mt-1`}>
                                {report.desc}
                              </p>
                              <p className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-500"} mt-2`}>
                                Period: {report.period}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2 ml-4">
                              <Button variant="outline" size="sm">
                                Preview
                              </Button>
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
                              >
                                Generate
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Scheduled Reports */}
            <Card
              className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className={`text-xl ${darkMode ? "text-white" : "text-gray-900"}`}>
                      Scheduled Reports
                    </CardTitle>
                    <CardDescription className={darkMode ? "text-gray-400" : "text-gray-600"}>
                      Automatically generated reports sent to your email
                    </CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Schedule Report
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Weekly Sales Summary",
                      frequency: "Every Monday",
                      nextRun: "Dec 23, 2024",
                      status: "active",
                    },
                    {
                      name: "Monthly Financial Report",
                      frequency: "1st of each month",
                      nextRun: "Jan 1, 2025",
                      status: "active",
                    },
                    {
                      name: "Quarterly Tax Report",
                      frequency: "Every 3 months",
                      nextRun: "Mar 31, 2025",
                      status: "paused",
                    },
                  ].map((schedule, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-lg border ${
                        darkMode ? "border-gray-700/50 bg-gray-700/30" : "border-gray-200 bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-3 h-3 rounded-full ${schedule.status === "active" ? "bg-emerald-500" : "bg-yellow-500"}`}
                        />
                        <div>
                          <p className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>{schedule.name}</p>
                          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                            {schedule.frequency} • Next: {schedule.nextRun}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={schedule.status === "active" ? "default" : "secondary"}>
                          {schedule.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "settings":
        return (
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className={`text-3xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Settings</h1>
              <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"} mt-2`}>
                Manage your account preferences and application settings
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Account Settings */}
              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
              >
                <CardHeader>
                  <CardTitle className={`text-xl ${darkMode ? "text-white" : "text-gray-900"}`}>
                    Account Information
                  </CardTitle>
                  <CardDescription className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    Update your personal and business information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Business Name
                    </Label>
                    <Input
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                      className={darkMode ? "bg-gray-700/50 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Email Address
                    </Label>
                    <Input
                      value="PeterKohler@gmail.com"
                      readOnly
                      className={darkMode ? "bg-gray-700/50 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Phone Number
                    </Label>
                    <Input
                      placeholder="+1 (555) 123-4567"
                      className={darkMode ? "bg-gray-700/50 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Business Address
                    </Label>
                    <Input
                      placeholder="123 Business St, City, State 12345"
                      className={darkMode ? "bg-gray-700/50 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              {/* Preferences */}
              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
              >
                <CardHeader>
                  <CardTitle className={`text-xl ${darkMode ? "text-white" : "text-gray-900"}`}>Preferences</CardTitle>
                  <CardDescription className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    Customize your dashboard and notification settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <Label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Dark Mode
                      </Label>
                      <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} mt-1`}>
                        Toggle dark mode for low-light environments
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-lg">
                      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </Button>
                  </div>

                  <Separator className={darkMode ? "bg-gray-700" : "bg-gray-200"} />

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <Label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Email Notifications
                      </Label>
                      <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} mt-1`}>
                        Receive email alerts for transactions and updates
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    />
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <Label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        SMS Alerts
                      </Label>
                      <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} mt-1`}>
                        Get SMS notifications for critical issues
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    />
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <Label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Weekly Reports
                      </Label>
                      <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} mt-1`}>
                        Receive weekly performance summaries
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    />
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <Label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Marketing Updates
                      </Label>
                      <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} mt-1`}>
                        Receive updates about new features and promotions
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
              >
                <CardHeader>
                  <CardTitle className={`text-xl ${darkMode ? "text-white" : "text-gray-900"}`}>
                    Security & Privacy
                  </CardTitle>
                  <CardDescription className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    Manage your account security and privacy settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start h-12">
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 7a2 2 0 012 2m0 0a2 2 0 012 2m-2-2a2 2 0 00-2 2m2-2V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2M7 7a2 2 0 012 2m0 0a2 2 0 012 2m-2-2a2 2 0 00-2 2m2-2V5a2 2 0 00-2-2"
                      />
                    </svg>
                    Change Password
                  </Button>

                  <Button variant="outline" className="w-full justify-start h-12">
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    Two-Factor Authentication
                  </Button>

                  <Button variant="outline" className="w-full justify-start h-12">
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download My Data
                  </Button>

                  <Button variant="outline" className="w-full justify-start h-12">
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                    Active Sessions
                  </Button>
                </CardContent>
              </Card>

              {/* Danger Zone */}
              <Card
                className={`${darkMode ? "bg-red-900/20 border-red-800/50" : "bg-red-50 border-red-200"} shadow-sm`}
              >
                <CardHeader>
                  <CardTitle className={`text-xl ${darkMode ? "text-red-300" : "text-red-800"}`}>Danger Zone</CardTitle>
                  <CardDescription className={darkMode ? "text-red-400" : "text-red-600"}>
                    Irreversible and destructive actions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="outline"
                    className={`w-full justify-start h-12 ${darkMode ? "border-red-800 text-red-300 hover:bg-red-900/30" : "border-red-300 text-red-700 hover:bg-red-100"}`}
                  >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                    Deactivate Account
                  </Button>

                  <Button
                    variant="outline"
                    className={`w-full justify-start h-12 ${darkMode ? "border-red-800 text-red-300 hover:bg-red-900/30" : "border-red-300 text-red-700 hover:bg-red-100"}`}
                  >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-12">
            <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>This section is coming soon...</p>
          </div>
        )
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Modern Header */}
      <header
        className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white/80 border-gray-200"} border-b backdrop-blur-sm sticky top-0 z-50`}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Logo size={32} />
              <div>
                <h1 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>oneclick</h1>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>PeterKohler@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">PK</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Modern Sidebar */}
        <aside
          className={`w-64 ${darkMode ? "bg-gray-800/30" : "bg-white"} border-r ${darkMode ? "border-gray-700/50" : "border-gray-200"} min-h-screen`}
        >
          <nav className="p-6">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      activeTab === item.id
                        ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                        : darkMode
                          ? "text-gray-300 hover:bg-gray-700/50"
                          : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                )
              })}
            </div>

            <Separator className={`my-8 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`} />

            <div className="space-y-2">
              <button
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                  darkMode ? "text-gray-300 hover:bg-gray-700/50" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <HelpCircle className="w-5 h-5" />
                <span className="font-medium">Need help?</span>
              </button>

              <button
                onClick={handleLogout}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                  darkMode ? "text-gray-300 hover:bg-gray-700/50" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Log Out</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{renderContent()}</main>
      </div>
    </div>
  )
}
