import React, { useState } from "react";
import { Button, Tag, Dropdown, message, Pagination } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  HeartOutlined,
  ShareAltOutlined,
  BookOutlined,
  // FilterOutlined,
  // ClockCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { stories } from "../../article/story.js";

const StoryCollection: React.FC = () => {
  // const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // const handleSearch = () => {
  //   message.info("搜索功能开发中...");
  // };

  const storyList = Object.entries(stories).map(([id, story]) => ({
    id: parseInt(id),
    title: story.title,
    content: story.sections[0].content,
    category: "故事",
    date: "2025-02-20",
    author: "波浪小子",
    views: 1000,
    likes: 100
  }));

  const currentStoryList = storyList.slice((currentPage - 1) * 3, currentPage * 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="stories" />
      {/* 主要内容区 */}
      <div className="pt-16 max-w-7xl mx-auto px-4 py-8">
        {/* 故事列表 */}
        <div className="space-y-6">
          {currentStoryList.map((story) => (
            <Link
              key={story.id}
              to={`/stories/${story.id}`}
              className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{story.date}</span>
                  <Tag color="purple">{story.category}</Tag>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  <UserOutlined className="mr-1" /> {story.author}
                </p>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {story.content}
                </p>
                {/* <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>
                      <EyeOutlined className="mr-1" />
                      {story.views}
                    </span>
                    <span>
                      <HeartOutlined className="mr-1" />
                      {story.likes}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      type="text"
                      icon={<HeartOutlined />}
                      className="!rounded-button"
                    >
                      喜欢
                    </Button>
                    <Button
                      type="text"
                      icon={<ShareAltOutlined />}
                      className="!rounded-button"
                    >
                      分享
                    </Button>
                    <Button
                      type="text"
                      icon={<BookOutlined />}
                      className="!rounded-button"
                    >
                      收藏
                    </Button>
                  </div>
                </div> */}
              </div>
            </Link>
          ))}
        </div>
        {/* 分页 */}
        <div className="mt-8 flex justify-center">
          <Pagination
            current={currentPage}
            total={storyList.length}
            pageSize={3}
            onChange={(page) => setCurrentPage(page)}
            className="!rounded-button"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StoryCollection;
