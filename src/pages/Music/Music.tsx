import React, { useState, useRef, useEffect } from "react";
import { Button, Tag, Pagination } from "antd";
import { PlayCircleOutlined, PauseCircleOutlined, HeartOutlined, ShareAltOutlined } from "@ant-design/icons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ShareModal from "../../components/ShareModal/ShareModal";
import './Music.css';

interface MusicItem {
  id: number;
  title: string;
  cover: string;
  duration: string;
  artist: string;
  source: string;
}

const musicList: MusicItem[] = [
  {
    id: 1,
    title: "亲亲我滴宝贝",
    cover: "/images/奇幻旋律.png",
    duration: "1:07",
    artist: "波浪小子",
    source: "/media/亲亲我滴宝贝.mp3"
  },
  {
    id: 2,
    title: "甜甜的",
    cover: "/images/奇幻旋律.png",
    duration: "1:56",
    artist: "波浪小子",
    source: "/media/甜甜的.mp3"
  },
  {
    id: 3,
    title: "么么",
    cover: "/images/奇幻旋律.png",
    duration: "1:36",
    artist: "波浪小子",
    source: "/media/么么.mp3"
  },
  {
    id: 4,
    title: "老鼠爱大米",
    cover: "/images/奇幻旋律.png",
    duration: "1:42",
    artist: "波浪小子",
    source: "/media/老鼠爱大米.mp3"
  },
  
];

const Music: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusicId, setCurrentMusicId] = useState<number | null>(null);
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentUrl = window.location.href;

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    }
    
    return () => {
      if (audio) {
        audio.removeEventListener('ended', () => {
          setIsPlaying(false);
        });
      }
      console.log('distroyed')
    }
  }, [])

  const handlePlayMusic = (music: MusicItem) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    if (currentMusicId === music.id) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      if (isPlaying) {
        audioRef.current.pause();
      }
      audioRef.current.src = music.source;
      audioRef.current.play();
      setCurrentMusicId(music.id);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="music" />
      <div className="pt-16 max-w-7xl mx-auto px-4 py-8">
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
          <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`}>
            <svg className="w-12 h-12 sm:w-18 sm:h-18" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="49" fill="#000" stroke="#fff" stroke-width="0.5" />
              {Array.from({length: 72}).map((_, i) => (
                <rect 
                  key={i}
                  x="50" 
                  y="5" 
                  width="0.5" 
                  height="3" 
                  fill="#555" 
                  transform={`rotate(${i*5} 50 50)`}
                />
              ))}
              <circle cx="50" cy="50" r="12" fill="#1a1a1a" />
              <circle cx="50" cy="50" r="10" fill="#000" />
              <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="6" fontFamily="serif">Violet</text>
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {musicList.map((music) => (
            <div
              key={music.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gradient-to-r hover:from-pink-100 hover:via-purple-50 hover:to-pink-50 border border-pink-100"
            >
              <div className="p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 backdrop-blur-sm bg-white/30">
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                  <img
                    src={music.cover}
                    alt={music.title}
                    className="w-full h-full object-cover rounded-xl shadow-md"
                  />
                  <Button
                    type="text"
                    className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-xl transition-colors"
                    onClick={() => handlePlayMusic(music)}
                    icon={
                      isPlaying && currentMusicId === music.id ? (
                        <PauseCircleOutlined className="text-4xl" />
                      ) : (
                        <PlayCircleOutlined className="text-4xl" />
                      )
                    }
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 md:mb-0">
                      {music.title}
                    </h3>
                    <Tag color="pink" className="text-sm">浪漫音乐</Tag>
                  </div>
                  <p className="text-base text-pink-600 mb-4">{music.artist}</p>
                  <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
                    <span className="text-sm text-gray-500">{music.duration}</span>
                    <div className="flex space-x-3">
                      <Button
                        type="text"
                        icon={<HeartOutlined className="text-pink-500" />}
                        className="!rounded-full hover:bg-pink-50 border-pink-200"
                      >
                        喜欢
                      </Button>
                      <Button
                        type="text"
                        icon={<ShareAltOutlined className="text-purple-500" />}
                        className="!rounded-full hover:bg-purple-50 border-purple-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowShareModal(true);
                        }}
                      >
                        分享
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Pagination
            current={currentPage}
            total={musicList.length}
            pageSize={6}
            onChange={(page) => setCurrentPage(page)}
            className="!rounded-full"
          />
        </div>
      </div>
      <Footer />
      <ShareModal 
        isVisible={showShareModal}
        onClose={() => setShowShareModal(false)}
        url={currentUrl}
        title={"歌曲"}
      />
    </div>
  );
};

export default Music;