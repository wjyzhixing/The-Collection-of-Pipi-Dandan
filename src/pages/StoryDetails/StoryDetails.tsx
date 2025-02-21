// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import { Button, Tag } from "antd";
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
const StoryDetails: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(156);
  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };
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
        onClick={() => window.history.back()}
      >
        返回
      </Button>
      <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* 文章头部信息 */}
          <div className="mb-8">
            <Tag color="purple" className="mb-4">
              实验室
            </Tag>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              量子纠缠与咖啡
            </h1>
            <div className="flex items-center space-x-6 text-gray-500 text-sm">
              <div className="flex items-center">
                <UserOutlined className="mr-2" />
                <span>张雨晨</span>
              </div>
              <div className="flex items-center">
                <ClockCircleOutlined className="mr-2" />
                <span>2025-02-20</span>
              </div>
              <div className="flex items-center">
                <EyeOutlined className="mr-2" />
                <span>2,341 阅读</span>
              </div>
            </div>
          </div>
          {/* 文章内容 */}
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              那天下午，实验室里弥漫着咖啡的香气。我正在调试量子纠缠实验的设备，而你在一旁认真地记录着数据。阳光透过窗户洒在光学平台上，折射出绚丽的光芒。
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              量子纠缠是个神奇的现象，就像我们之间的默契一样。当我专注于调整激光器的时候，你总是能在恰到好处的时候递来一杯温热的咖啡。那些咖啡因和你温暖的笑容，让漫长的实验过程变得格外美好。
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              有时候，我会想，也许爱情就像量子纠缠一样。两个粒子一旦纠缠，无论相隔多远，都会瞬间影响彼此的状态。就像我们，即使各自忙碌于不同的实验台，心却始终紧密相连。
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              记得那天，我们的实验取得了重要突破。数据采集系统显示出完美的纠缠态，而窗外的夕阳正好映照在你微笑的脸庞上。那一刻，科研的喜悦和内心的悸动交织在一起，成为了最美好的回忆。
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
              <Button icon={<ShareAltOutlined />} className="!rounded-button">
                分享
              </Button>
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
