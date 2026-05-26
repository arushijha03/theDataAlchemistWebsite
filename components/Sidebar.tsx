"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationStructure, type NavItem } from "@/lib/navigation";
import { ThemeToggle } from "./ThemeToggle";

function NavChild({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const pathname = usePathname();
  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
  const [expanded, setExpanded] = useState(isActive);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <div className="flex items-center">
        <Link
          href={item.href}
          className={`flex-1 block px-3 py-1.5 rounded-md text-sm transition-all duration-200
            ${isActive && !hasChildren
              ? "bg-pastel-sky/40 dark:bg-pastel-sky-deep/20 font-medium"
              : "text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark hover:bg-pastel-sky/20"
            }
          `}
        >
          {item.title}
        </Link>
        {hasChildren && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1 rounded text-text-secondary-light dark:text-text-secondary-dark hover:bg-pastel-lavender/20"
          >
            <svg
              className={`w-3 h-3 transition-transform ${expanded ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
      {expanded && hasChildren && (
        <div className="ml-4 mt-1 space-y-1 border-l-2 border-border-light dark:border-border-dark pl-3">
          {item.children!.map((child) => (
            <NavChild key={child.href} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function NavGroup({ item, collapsed }: { item: NavItem; collapsed: boolean }) {
  const pathname = usePathname();
  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
  const [expanded, setExpanded] = useState(isActive);

  return (
    <div>
      <div className="flex items-center">
        <Link
          href={item.href}
          className={`flex-1 flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
            ${isActive
              ? "bg-pastel-lavender/40 dark:bg-pastel-lavender-deep/20 text-text-primary-light dark:text-text-primary-dark"
              : "text-text-secondary-light dark:text-text-secondary-dark hover:bg-pastel-lavender/20 dark:hover:bg-pastel-lavender-deep/10"
            }
          `}
        >
          {collapsed ? (
            <span className={`w-2 h-2 rounded-full ${item.color}`} />
          ) : (
            <span>{item.title}</span>
          )}
        </Link>
        {!collapsed && item.children && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1 mr-1 rounded text-text-secondary-light dark:text-text-secondary-dark hover:bg-pastel-lavender/20"
          >
            <svg
              className={`w-4 h-4 transition-transform ${expanded ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
      {!collapsed && expanded && item.children && (
        <div className="ml-6 mt-1 space-y-1 border-l-2 border-border-light dark:border-border-dark pl-3">
          {item.children.map((child) => (
            <NavChild key={child.href} item={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 h-screen z-40 transition-all duration-300 border-r border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark flex flex-col
        ${collapsed ? "w-16" : "w-64"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark">
        {!collapsed && (
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-lg bg-gradient-to-r from-pastel-lavender-deep to-pastel-sky-deep bg-clip-text text-transparent">
              Data Alchemist
            </span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-pastel-lavender/20 dark:hover:bg-pastel-lavender-deep/10 transition-colors"
        >
          <svg className="w-5 h-5 text-text-secondary-light dark:text-text-secondary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {collapsed ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7M19 19l-7-7 7-7" />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navigationStructure.map((item) => (
          <NavGroup key={item.href} item={item} collapsed={collapsed} />
        ))}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-border-light dark:border-border-dark flex items-center justify-center">
        <ThemeToggle />
      </div>
    </aside>
  );
}
