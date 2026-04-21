import { useState, type ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onToggleSidebar={() => setSidebarCollapsed((prev) => !prev)} />
      <Sidebar collapsed={sidebarCollapsed} />

      <div
        className={`flex min-h-screen flex-col transition-all duration-200 pt-14 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}
      >
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
