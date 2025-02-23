// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import { Button, Tag } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import {
  HeartOutlined,
  HeartFilled,
  ShareAltOutlined,
  BookOutlined,
  UserOutlined,
  ClockCircleOutlined,
  EyeOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { poems } from "../../poem/poem.js";
import ShareModal from "../../components/ShareModal/ShareModal";

const PoemDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(() => Math.floor(Math.random() * 300) + 100);
  const [viewCount, setViewCount] = useState(() => Math.floor(Math.random() * 1000) + 500);
  const [isShareModalVisible, setIsShareModalVisible] = useState(false);
  const currentUrl = window.location.href;
  const chapter = poems.chapters.find(
    (c) => c.chapter === parseInt(id || '1')
  );

  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  if (!chapter) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">诗歌不存在</h2>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/poems')}
            className="!rounded-button"
          >
            返回诗歌列表
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 顶部图片背景 */}
      <div
        className="w-full h-[200px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://public.readdy.ai/ai/img_res/025970f9e24d839f0b056fbcbd2c5161.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50"></div>
      </div>
      {/* 主要内容区 */}
      <Button
        icon={<ArrowLeftOutlined />}
        className="absolute top-8 left-8 bg-white/80 backdrop-blur-sm hover:bg-white/90 !rounded-button"
        onClick={() => {
          if(window.history.state?.key){
            window.history.back();
          } else {
            window.location.href = "/";
          }
        }}
      >
        返回
      </Button>
      <div className="mx-auto px-4 -mt-20 relative z-10 flex-grow w-full max-w-6xl">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* 文章头部信息 */}
          <div className="mb-8">
            <Tag color="green" className="mb-4">
              诗歌
            </Tag>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              第{chapter.chapter}章
            </h1>
            <div className="flex items-center space-x-6 text-gray-500 text-sm">
              <div className="flex items-center">
                <UserOutlined className="mr-2" />
                <span>波浪小子 / 田螺姑娘</span>
              </div>
              <div className="flex items-center">
                <EyeOutlined className="mr-2" />
                <span>{viewCount} 阅读</span>
              </div>
            </div>
          </div>
          {/* 文章内容 */}
          <div className="prose max-w-none">
            {chapter.poems.map((poem, index) => (
              <div key={index} className="mb-8">
                <pre className="text-gray-700 leading-relaxed mb-4 text-lg italic whitespace-pre-line">
                  {poem.content.join("\n")}
                </pre>
                {poem.footnote && (
                  <p className="text-gray-500 text-sm mt-2">{poem.footnote}</p>
                )}
              </div>
            ))}
          </div>
          {/* 互动区域 */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <Button
                icon={
                  isLiked ? (
                    <HeartFilled className="text-red-500" />
                  ) : (
                    <HeartOutlined />
                  )
                }
                onClick={handleLike}
                className="!rounded-button flex items-center"
              >
                {likeCount} 喜欢
              </Button>
              <Button icon={<ShareAltOutlined />} className="!rounded-button" onClick={() => setIsShareModalVisible(true)}>
                分享
              </Button>
              <ShareModal
                isVisible={isShareModalVisible}
                onClose={() => setIsShareModalVisible(false)}
                url={currentUrl}
              />
            </div>
            <Button icon={<BookOutlined />} className="!rounded-button">
              收藏
            </Button>
          </div>
        </div>
      </div>
      {/* 页脚 */}
      <footer className="bg-white mt-16 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-500">
          <p>© 2025 The Collection of Pipi Dandan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PoemDetails;
