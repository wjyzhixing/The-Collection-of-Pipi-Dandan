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
const PoemDetails: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(238);
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
          backgroundImage: `url('https://public.readdy.ai/ai/img_res/025970f9e24d839f0b056fbcbd2c5161.jpg')`,
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
            <Tag color="green" className="mb-4">
              诗歌
            </Tag>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">梅花谣</h1>
            <div className="flex items-center space-x-6 text-gray-500 text-sm">
              <div className="flex items-center">
                <UserOutlined className="mr-2" />
                <span>林清韵</span>
              </div>
              <div className="flex items-center">
                <ClockCircleOutlined className="mr-2" />
                <span>2025-02-21</span>
              </div>
              <div className="flex items-center">
                <EyeOutlined className="mr-2" />
                <span>3,156 阅读</span>
              </div>
            </div>
          </div>
          {/* 文章内容 */}
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
              山径幽深处，梅影自婆娑。
              <br />
              晓风携雪来，暗香浮云过。
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              在这个寒冬的清晨，我漫步在山间小径。远处的山峦如同水墨画般若隐若现，而眼前的梅树却倔强地绽放着点点白花。清晨的雾气在枝头缭绕，带来了一丝朦胧的诗意。
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              梅花的香气若有若无，像是在跟晨风玩捉迷藏。每一朵绽放的梅花都仿佛在诉说着一个关于坚韧与希望的故事。它们不畏严寒，在最寂寥的季节里绽放出最动人的美丽。
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              站在这里，我仿佛听见了时光的低语。那些飘落的花瓣，是岁月写给大地的情书；那缕缕暗香，是冬天留给春天的思念。在这个寂静的清晨，梅花用它特有的方式，讲述着生命中最动人的故事。
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
              一枝寒香远，千里故人心。
              <br />
              待到春风至，与君共赏临。
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
export default PoemDetails;
