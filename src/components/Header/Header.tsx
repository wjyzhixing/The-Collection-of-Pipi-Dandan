import React, { useState } from "react";
import { Input, message } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";

interface HeaderProps {
  currentPage: "home" | "stories" | "poems";
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = () => {
    message.info("搜索功能开发中...");
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className="sm:text-2xl xs:text-1xl font-serif font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
          >
            The Collection of Pipi Dandan
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className={`!rounded-button ${currentPage === "home" ? "text-purple-600" : "text-gray-600 hover:text-purple-600"}`}
            >
              首页
            </Link>
            <Link
              to="/stories"
              className={`!rounded-button ${currentPage === "stories" ? "text-purple-600" : "text-gray-600 hover:text-purple-600"}`}
            >
              故事集
            </Link>
            <Link
              to="/poems"
              className={`!rounded-button ${currentPage === "poems" ? "text-purple-600" : "text-gray-600 hover:text-purple-600"}`}
            >
              诗歌集
            </Link>
          </div>
        </div>

        {/* 移动端菜单按钮 */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-purple-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuOutlined className="text-xl" />
        </button>
      </div>

      {/* 移动端菜单 */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 ${
          isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-2 flex flex-col space-y-4">
          <Link
            to="/"
            className={`py-2 ${
              currentPage === "home" ? "text-purple-600" : "text-gray-600"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            首页
          </Link>
          <Link
            to="/stories"
            className={`py-2 ${
              currentPage === "stories" ? "text-purple-600" : "text-gray-600"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            故事集
          </Link>
          <Link
            to="/poems"
            className={`py-2 ${
              currentPage === "poems" ? "text-purple-600" : "text-gray-600"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            诗歌集
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;