"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/logo"
import {
  Moon,
  Sun,
  LogOut,
  Settings,
  CreditCard,
  FileText,
  HelpCircle,
  User,
  Home,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  Bell,
  CheckCircle,
  Plus,
  MoreHorizontal,
  Calendar,
  Zap,
  PiggyBank,
  Wallet,
  ShoppingBag,
  Coffee,
  Car,
  Plane,
  Shield,
  Eye,
  EyeOff,
} from "lucide-react"

export default function PersonalDashboard() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [bankConnected, setBankConnected] = useState(false)
  const [showBalance, setShowBalance] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleLogout = () => {
    window.location.href = "/login"
  }

  const connectBank = () => {
    setBankConnected(true)
  }

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "transactions", label: "Transactions", icon: CreditCard },
    { id: "insights", label: "Insights", icon: TrendingUp },
    { id: "wallet", label: "Wallet", icon: Wallet },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  const categories = [
    { name: "Food & Dining", icon: Coffee, color: "bg-orange-500", amount: "$342.50", count: 23 },
    { name: "Shopping", icon: ShoppingBag, color: "bg-purple-500", amount: "$189.99", count: 8 },
    { name: "Transportation", icon: Car, color: "bg-blue-500", amount: "$156.20", count: 12 },
    { name: "Travel", icon: Plane, color: "bg-emerald-500", amount: "$89.00", count: 3 },
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
                  Welcome back, Alex! 👋
                </h1>
                <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"} mt-1`}>
                  Here's your spending overview and recent activity.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" className="h-10">
                  <Calendar className="w-4 h-4 mr-2" />
                  This Month
                </Button>
                <Button className="h-10 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Quick Pay
                </Button>
              </div>
            </div>

            {/* Financial Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm hover:shadow-md transition-shadow`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Money Saved
                      </p>
                      <p className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-2`}>$127.50</p>
                      <div className="flex items-center mt-2">
                        <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm text-emerald-500 font-medium ml-1">+$23.40</span>
                        <span className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"} ml-1`}>
                          this month
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <PiggyBank className="w-6 h-6 text-white" />
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
                        Total Spent
                      </p>
                      <div className="flex items-center mt-2">
                        {showBalance ? (
                          <p className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>$1,247.89</p>
                        ) : (
                          <p className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>••••••</p>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowBalance(!showBalance)}
                          className="ml-2 p-1"
                        >
                          {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                      <div className="flex items-center mt-2">
                        <ArrowUpRight className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-blue-500 font-medium ml-1">+12%</span>
                        <span className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"} ml-1`}>
                          vs last month
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
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
                        OneClick Purchases
                      </p>
                      <p className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-2`}>47</p>
                      <div className="flex items-center mt-2">
                        <Zap className="w-4 h-4 text-teal-500" />
                        <span className="text-sm text-teal-500 font-medium ml-1">Fast checkout</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Transactions */}
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
                          Your latest purchases and payments
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
                        merchant: "Starbucks Coffee",
                        amount: "$8.45",
                        time: "2 hours ago",
                        category: "Food & Dining",
                        icon: Coffee,
                        color: "bg-orange-500",
                        saved: "$0.85",
                      },
                      {
                        id: "2",
                        merchant: "Amazon",
                        amount: "$67.99",
                        time: "Yesterday",
                        category: "Shopping",
                        icon: ShoppingBag,
                        color: "bg-purple-500",
                        saved: "$3.40",
                      },
                      {
                        id: "3",
                        merchant: "Uber",
                        amount: "$15.20",
                        time: "2 days ago",
                        category: "Transportation",
                        icon: Car,
                        color: "bg-blue-500",
                        saved: "$0.75",
                      },
                      {
                        id: "4",
                        merchant: "Netflix",
                        amount: "$15.99",
                        time: "3 days ago",
                        category: "Entertainment",
                        icon: ShoppingBag,
                        color: "bg-red-500",
                        saved: "$0.00",
                      },
                    ].map((transaction) => {
                      const IconComponent = transaction.icon
                      return (
                        <div
                          key={transaction.id}
                          className={`flex items-center justify-between p-4 rounded-lg ${darkMode ? "bg-gray-700/30" : "bg-gray-50"}`}
                        >
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-10 h-10 ${transaction.color} rounded-full flex items-center justify-center`}
                            >
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                                {transaction.merchant}
                              </p>
                              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                {transaction.category} • {transaction.time}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                              {transaction.amount}
                            </p>
                            {Number.parseFloat(transaction.saved.replace("$", "")) > 0 && (
                              <p className="text-sm text-emerald-500">Saved {transaction.saved}</p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Content */}
              <div className="space-y-6">
                {/* Bank Connection */}
                <Card
                  className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
                >
                  <CardHeader>
                    <CardTitle className={`text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>
                      Bank Account
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {bankConnected ? (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                          <CheckCircle className="h-5 w-5 text-emerald-600" />
                          <div>
                            <p className={`font-medium ${darkMode ? "text-emerald-300" : "text-emerald-800"}`}>
                              Chase Checking
                            </p>
                            <p className={`text-sm ${darkMode ? "text-emerald-400" : "text-emerald-700"}`}>
                              ••••••••••••3847
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full">
                          Manage Connection
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="text-center">
                          <Shield className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} mb-4`}>
                            Connect your bank for faster, more secure checkouts
                          </p>
                        </div>
                        <Button
                          onClick={connectBank}
                          className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
                        >
                          Connect Bank Account
                        </Button>
                        <p className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-500"} text-center`}>
                          Secured by Plaid • Bank-level encryption
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Spending Categories */}
                <Card
                  className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
                >
                  <CardHeader>
                    <CardTitle className={`text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>
                      Top Categories
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {categories.map((category, index) => {
                      const IconComponent = category.icon
                      return (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center`}>
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                                {category.name}
                              </p>
                              <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                {category.count} purchases
                              </p>
                            </div>
                          </div>
                          <p className={`text-sm font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                            {category.amount}
                          </p>
                        </div>
                      )
                    })}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
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
                      <FileText className="w-4 h-4 mr-3" />
                      Export Transactions
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-12">
                      <Settings className="w-4 h-4 mr-3" />
                      Payment Methods
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-12">
                      <TrendingUp className="w-4 h-4 mr-3" />
                      Spending Goals
                    </Button>
                  </CardContent>
                </Card>
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
                  View and manage all your purchases and payments
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
                        Total Transactions
                      </p>
                      <p className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-1`}>127</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-white" />
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
                        OneClick Purchases
                      </p>
                      <p className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-1`}>89</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
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
                        Money Saved
                      </p>
                      <p className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-1`}>$127.50</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <PiggyBank className="w-5 h-5 text-white" />
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
                        Avg. Purchase
                      </p>
                      <p className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mt-1`}>$24.67</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Transactions List */}
            <Card
              className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"} shadow-sm`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className={`text-xl ${darkMode ? "text-white" : "text-gray-900"}`}>
                    All Transactions
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
                      id: "1",
                      merchant: "Starbucks Coffee",
                      amount: "$8.45",
                      date: "Dec 15, 2024 2:30 PM",
                      category: "Food & Dining",
                      method: "OneClick",
                      icon: Coffee,
                      color: "bg-orange-500",
                      saved: "$0.85",
                    },
                    {
                      id: "2",
                      merchant: "Amazon",
                      amount: "$67.99",
                      date: "Dec 14, 2024 4:15 PM",
                      category: "Shopping",
                      method: "OneClick",
                      icon: ShoppingBag,
                      color: "bg-purple-500",
                      saved: "$3.40",
                    },
                    {
                      id: "3",
                      merchant: "Uber",
                      amount: "$15.20",
                      date: "Dec 13, 2024 8:45 AM",
                      category: "Transportation",
                      method: "Card",
                      icon: Car,
                      color: "bg-blue-500",
                      saved: "$0.75",
                    },
                    {
                      id: "4",
                      merchant: "Netflix",
                      amount: "$15.99",
                      date: "Dec 12, 2024 12:00 PM",
                      category: "Entertainment",
                      method: "OneClick",
                      icon: ShoppingBag,
                      color: "bg-red-500",
                      saved: "$0.00",
                    },
                    {
                      id: "5",
                      merchant: "Target",
                      amount: "$89.34",
                      date: "Dec 11, 2024 3:20 PM",
                      category: "Shopping",
                      method: "OneClick",
                      icon: ShoppingBag,
                      color: "bg-purple-500",
                      saved: "$4.47",
                    },
                  ].map((transaction) => {
                    const IconComponent = transaction.icon
                    return (
                      <div
                        key={transaction.id}
                        className={`flex items-center justify-between p-6 rounded-xl border transition-all hover:shadow-md ${
                          darkMode
                            ? "border-gray-700/50 bg-gray-700/30 hover:bg-gray-700/50"
                            : "border-gray-200 bg-gray-50 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 ${transaction.color} rounded-xl flex items-center justify-center`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                              {transaction.merchant}
                            </p>
                            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                              {transaction.category}
                            </p>
                            <p className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-500"} mt-1`}>
                              {transaction.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-right">
                            <p className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                              {transaction.amount}
                            </p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge
                                variant={transaction.method === "OneClick" ? "default" : "secondary"}
                                className={transaction.method === "OneClick" ? "bg-teal-500 hover:bg-teal-600" : ""}
                              >
                                {transaction.method}
                              </Badge>
                              {Number.parseFloat(transaction.saved.replace("$", "")) > 0 && (
                                <Badge className="bg-emerald-500 hover:bg-emerald-600">Saved {transaction.saved}</Badge>
                              )}
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="rounded-lg">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
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
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>alex.johnson@gmail.com</p>
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
                <span className="text-white text-sm font-medium">AJ</span>
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
