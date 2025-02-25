// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import {
  HeartOutlined,
  ShareAltOutlined,
  BookOutlined,
  SoundOutlined, SoundFilled 
} from "@ant-design/icons";
import ShareModal from "./components/ShareModal/ShareModal";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { stories } from "./article/story.js";
import { poems } from "./poem/poem.js";
import { useAudio } from './contexts/AudioContext';
import backgroundMusic from './assets/pipidandan.mp3';
import { cover } from './utils';
import 杰克与露西 from './assets/杰克与露西.png'
import 太阳与月亮 from './assets/太阳与月亮.png'
import 奇幻旋律 from './assets/奇幻旋律.png'

const App: React.FC = () => {
  const [isShareModalVisible, setIsShareModalVisible] = useState(false);
  const [currentShareUrl, setCurrentShareUrl] = useState("");
  const { audio, isPlaying, togglePlay } = useAudio();

  // useEffect(() => {
  //   const handleClick = () => {
  //     if (!isPlaying) {
  //       togglePlay();
  //     }
  //   };

  //   document.addEventListener('click', handleClick, { once: true });
  //   return () => {
  //     document.removeEventListener('click', handleClick);
  //   };
  // }, [isPlaying, togglePlay]);

  const handleMusicToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // 阻止事件冒泡
    togglePlay();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <button
        onClick={handleMusicToggle}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/90 transition-all"
      >
        {isPlaying ? (
          <SoundFilled className="text-xl text-purple-600" />
        ) : (
          <SoundOutlined className="text-xl text-gray-600" />
        )}
      </button>
      <Header currentPage="home" />
      {/* Hero区域 */}
      <div className="pt-16">
        <div
          className="relative h-[500px] bg-cover bg-center"
          style={{
            backgroundImage:
              // `url(${cover})`
              "url(./images/杰克与露西.jpg)"

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
        <h2 className="text-2xl font-bold text-gray-800 mb-8">热门故事</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(stories).slice(0, 3).map(([index, story]) => (
            <Link
              key={index}
              to={`/stories/${index}`}
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    喜欢
                  </Button>
                  <Button
                    type="text"
                    icon={<ShareAltOutlined />}
                    className="!rounded-button"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentShareUrl(window.location.origin + `/stories/${index}`);
                      setIsShareModalVisible(true);
                    }}
                  >
                    分享
                  </Button>
                  <Button
                    type="text"
                    icon={<BookOutlined />}
                    className="!rounded-button"
                    onClick={(e) => e.stopPropagation()}
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
            {poems.chapters.slice(0, 2).map((chapter) => (
              <Link
                key={chapter.chapter}
                to={`/poems/${chapter.chapter}`}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  第{chapter.chapter}章
                </h3>
                <p className="text-gray-600 whitespace-pre-line mb-4">
                  {chapter.poems[0].content.join("\n")}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-600">
                    章节：{chapter.chapter}
                  </span>
                  <div className="flex space-x-2">
                    <Button
                      type="text"
                      icon={<HeartOutlined />}
                      className="!rounded-button"
                      onClick={(e) => e.preventDefault()}
                    >
                      喜欢
                    </Button>
                    <Button
                      type="text"
                      icon={<ShareAltOutlined />}
                      className="!rounded-button"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentShareUrl(window.location.origin + `/poems/${chapter.chapter}`);
                        setIsShareModalVisible(true);
                      }}
                    >
                      分享
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <ShareModal
        isVisible={isShareModalVisible}
        onClose={() => setIsShareModalVisible(false)}
        url={currentShareUrl}
      />
      <Footer />
    </div>
  );
};

export default App;
