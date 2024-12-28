"use client";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardHome from "./components/DashboardHome";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Users from "./components/Users";
import Reports from "./components/Reports";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";

const Dashboard: React.FC = () => {
  const [activePage, setActivePage] = useState<string>("home");

  // Render the page based on the activePage state
  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <DashboardHome />;
      case "products":
        return <Products />;
      case "orders":
        return <Orders />;
      case "users":
        return <Users />;
      case "reports":
        return <Reports />;
      case "notifications":
        return <Notifications />;
      case "profile":
        return <Profile />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar, passing activePage to indicate which page is active */}
      <Sidebar setActivePage={setActivePage} activePage={activePage} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col bg-gray-100">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
