// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Tag, Modal, message } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  ShareAltOutlined,
  BookOutlined,
  UserOutlined,
  ClockCircleOutlined,
  EyeOutlined,
  ArrowLeftOutlined,
  CopyOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";
import { stories } from "../../article/story.js";
import ShareModal from "../../components/ShareModal/ShareModal";

const StoryDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const story = stories[parseInt(id || "1")];
  console.log(id)
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(156);
  const [isShareModalVisible, setIsShareModalVisible] = useState(false);
  const currentUrl = window.location.href;
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      message.success("链接已复制到剪贴板");
    });
  };
  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  if (!story) {
    return <div>故事不存在</div>;
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部图片背景 */}
      <div
        className="w-full h-[200px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://public.readdy.ai/ai/img_res/0108bc39b76068f6754e450a16d1fc90.jpg')`,
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
      <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* 文章头部信息 */}
          <div className="mb-8">
            <Tag color="purple" className="mb-4">
              LOVE
            </Tag>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {story.title}
            </h1>
            <div className="flex items-center space-x-6 text-gray-500 text-sm">
              <div className="flex items-center">
                <UserOutlined className="mr-2" />
                <span>波浪小子</span>
              </div>
              <div className="flex items-center">
                <ClockCircleOutlined className="mr-2" />
                <span>2025-02-20</span>
              </div>
              <div className="flex items-center">
                <EyeOutlined className="mr-2" />
                <span>1000 阅读</span>
              </div>
            </div>
          </div>
          {/* 文章内容 */}
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {story.sections.map((section, index) => (
                <React.Fragment key={index}>
                  {section.title && (
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-4">
                      {section.title}
                    </h2>
                  )}
                  {section.content}
                </React.Fragment>
              ))}
            </p>
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
              <Button
                icon={<ShareAltOutlined />}
                className="!rounded-button"
                onClick={() => setIsShareModalVisible(true)}
              >
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
          <p>
            © 2025 The Collection of Pipi Dandan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default StoryDetails;
