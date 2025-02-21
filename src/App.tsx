// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import {
  HeartOutlined,
  ShareAltOutlined,
  BookOutlined,
} from "@ant-design/icons";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="home" />
      {/* Hero区域 */}
      <div className="pt-16">
        <div
          className="relative h-[500px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://readdy.ai/api/search-image?query=A romantic and dreamy scene with soft pastel colors, featuring a modern minimalist study room with books and laptop, natural sunlight streaming through large windows, creating a peaceful and inspiring atmosphere&width=1440&height=500&orientation=landscape&flag=1a3d78dc734f565a5df8285070a222de)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
              <div className="max-w-xl">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                  记录我们的故事
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  在这里，我们将时光编织成文字，将感动化作诗行。每一个瞬间都是永恒，每一篇故事都值得铭记。
                </p>
                <Link to="/stories">
                  <Button type="primary" size="large" className="!rounded-button">
                    开始阅读
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 最新故事 */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">最新故事</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "清晨的约定",
              date: "2025-02-20",
              content:
                "那天清晨，阳光温柔地洒在实验室的玻璃器皿上，你专注地调试着仪器，而我在一旁记录数据...",
              image:
                "https://public.readdy.ai/ai/img_res/a2bfa76a0579d5961ebbf70117be3484.jpg",
            },
            {
              title: "雨中漫步",
              date: "2025-02-18",
              content:
                "午后的小雨淅淅沥沥，我们漫步在校园的梧桐道上，讨论着量子力学的奥秘...",
              image:
                "https://public.readdy.ai/ai/img_res/e4b6de5e44d2de6630b8575e2b7d9131.jpg",
            },
            {
              title: "星空下的论文",
              date: "2025-02-15",
              content:
                "深夜的图书馆，我们肩并肩坐在窗边，面前摊开的是未完成的论文，窗外是璀璨的星空...",
              image:
                "https://public.readdy.ai/ai/img_res/417b018fc472c5e0e2f458f8462c46d3.jpg",
            },
          ].map((story, index) => (
            <Link
              key={index}
              to={`/stories/${index + 1}`}
              className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{story.date}</p>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {story.content}
                </p>
                <div className="flex items-center justify-between">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* 精选诗歌 */}
      <div className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">精选诗歌</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "实验室的日与夜",
                content:
                  "荧光灯下的执着\n试管中流动的是理想\n数据背后的真理\n在我们的手中间流淌",
                mood: "专注",
              },
              {
                title: "图书馆的温度",
                content:
                  "书架间的微风\n翻动着知识的页章\n你的眼神是暖阳\n照亮了学术的殿堂",
                mood: "温暖",
              },
            ].map((poem, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {poem.title}
                </h3>
                <p className="text-gray-600 whitespace-pre-line mb-4">
                  {poem.content}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-600">
                    心情：{poem.mood}
                  </span>
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
