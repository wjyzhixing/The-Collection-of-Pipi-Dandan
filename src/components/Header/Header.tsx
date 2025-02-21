import React, { useState } from "react";
import { Input, message } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

interface HeaderProps {
  currentPage: "home" | "stories" | "poems";
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const [searchValue, setSearchValue] = useState("");

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
        {/* <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              prefix={<SearchOutlined className="text-gray-400" />}
              placeholder="搜索文章..."
              className="rounded-full border-gray-200 w-48"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onPressEnter={handleSearch}
            />
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Header;