import React, { useState, useRef } from "react";
import { Button, Tag, Pagination } from "antd";
import { PlayCircleOutlined, PauseCircleOutlined, HeartOutlined, ShareAltOutlined } from "@ant-design/icons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

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
];

const Music: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusicId, setCurrentMusicId] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
        <div className="space-y-6 p-6">
          {musicList.map((music) => (
            <div
              key={music.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
            >
              <div className="p-6 flex items-center space-x-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <img
                    src={music.cover}
                    alt={music.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <Button
                    type="text"
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-lg transition-colors"
                    onClick={() => handlePlayMusic(music)}
                    icon={
                      isPlaying && currentMusicId === music.id ? (
                        <PauseCircleOutlined className="text-3xl" />
                      ) : (
                        <PlayCircleOutlined className="text-3xl" />
                      )
                    }
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {music.title}
                    </h3>
                    <Tag color="purple">音乐</Tag>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{music.artist}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{music.duration}</span>
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
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Pagination
            current={currentPage}
            total={musicList.length}
            pageSize={10}
            onChange={(page) => setCurrentPage(page)}
            className="!rounded-button"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Music;