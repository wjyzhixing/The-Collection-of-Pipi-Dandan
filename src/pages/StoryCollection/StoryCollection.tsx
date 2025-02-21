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

const StoryCollection: React.FC = () => {
  // const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // const handleSearch = () => {
  //   message.info("搜索功能开发中...");
  // };

  const stories = [
    {
      id: 1,
      title: "量子纠缠与咖啡",
      category: "实验室",
      date: "2025-02-20",
      author: "张雨晨",
      views: 2341,
      likes: 156,
      content:
        "那天下午，实验室里弥漫着咖啡的香气。我正在调试量子纠缠实验的设备，而你在一旁认真地记录着数据。阳光透过窗户洒在光学平台上，折射出绚丽的光芒...",
    },
    {
      id: 2,
      title: "图书馆的午后时光",
      category: "校园",
      date: "2025-02-18",
      author: "李思源",
      views: 1892,
      likes: 143,
      content:
        "图书馆的三楼永远是我们最喜欢的位置。靠窗的位置可以看到整个校园的风景，午后的阳光温柔地洒在书页上，我们各自专注于自己的论文，却又时不时交换一个会心的微笑...",
    },
    {
      id: 3,
      title: "深夜的研讨会",
      category: "学术",
      date: "2025-02-15",
      author: "王明哲",
      views: 2156,
      likes: 189,
      content:
        "凌晨三点的会议室依然灯火通明。我们和来自德国的教授进行着线上研讨会，讨论着最新的研究成果。即使疲惫，但科研的热情让我们依然精神焕发...",
    },
    {
      id: 4,
      title: "樱花季的实验记录",
      category: "生活",
      date: "2025-02-12",
      author: "陈雪婷",
      views: 1765,
      likes: 134,
      content:
        "春天的校园里樱花盛开，我们在实验间隙偷闲出去拍照。你穿着白大褂站在樱花树下，笑靥如花。那一刻，我想把这美好的画面永远定格...",
    },
    {
      id: 5,
      title: "跨年实验室",
      category: "实验室",
      date: "2025-02-10",
      author: "刘子琪",
      views: 2453,
      likes: 201,
      content:
        "新年钟声即将敲响，实验室里只有我们和仪器的轰鸣。荧光屏上的数据在跳动，我们互相依偎，许下新年愿望：愿我们的研究能有重大突破...",
    },
    {
      id: 6,
      title: "雨天的论文答辩",
      category: "学术",
      date: "2025-02-08",
      author: "赵梓涵",
      views: 1987,
      likes: 167,
      content:
        "答辩那天下着小雨，我紧张地站在讲台上。看到台下你给我加油的手势，所有的紧张都烟消云散。这场答辩，因为有你的支持，让我更加从容...",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="stories" />
      {/* 主要内容区 */}
      <div className="pt-16 max-w-7xl mx-auto px-4 py-8">
        {/* 故事列表 */}
        <div className="space-y-6">
          {stories.map((story) => (
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
                <div className="flex items-center justify-between">
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
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* 分页 */}
        <div className="mt-8 flex justify-center">
          <Pagination
            current={currentPage}
            total={50}
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

export default StoryCollection;
