import React, { useState } from "react";
import { Tag, Pagination } from "antd";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// 可以在这里导入 ShareModal 如果需要分享功能
// import ShareModal from "../../components/ShareModal/ShareModal";

interface PhotoItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  tags?: string[];
}

// 示例照片数据 (你需要替换成你自己的照片数据)
const photoList: PhotoItem[] = [
  {
    id: 1,
    title: "杰克与露西",
    description: "我们的美好回忆",
    imageUrl: "/images/杰克与露西.jpg",
    date: "2024-01-01",
    tags: ["回忆", "爱情"],
  },
  {
    id: 2,
    title: "太阳与月亮",
    description: "永恒的陪伴",
    imageUrl: "/images/太阳与月亮.png",
    date: "2024-02-14",
    tags: ["浪漫", "节日"],
  },
  {
    id: 3,
    title: "奇幻旋律",
    description: "音乐与梦想",
    imageUrl: "/images/奇幻旋律.png",
    date: "2024-03-08",
    tags: ["音乐", "艺术"],
  },
  {
    id: 4,
    title: "春节回家",
    description: "春节回家的温馨时刻",
    imageUrl: "/love/春节回家.jpg",
    date: "2024-02-10",
    tags: ["春节", "家庭"],
  },
  {
    id: 5,
    title: "春节大悦城",
    description: "春节大悦城的欢乐时光",
    imageUrl: "/love/春节大悦城.jpg",
    date: "2024-02-12",
    tags: ["春节", "欢乐"],
  },
  {
    id: 6,
    title: "春节大悦城咔咔",
    description: "春节大悦城的欢乐合影",
    imageUrl: "/love/春节大悦城咔咔.jpg",
    date: "2024-02-12",
    tags: ["春节", "合影"],
  },
];

const Gallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // 如果需要分享功能，可以添加 state
  // const [showShareModal, setShowShareModal] = useState<boolean>(false);
  // const currentUrl = window.location.href;

  const itemsPerPage = 9; // 每页显示的照片数量
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedPhotos = photoList.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 确保 Header 组件支持 'gallery' 或类似的 currentPage 值 */}
      <Header currentPage="gallery" /> 
      <div className="pt-16 max-w-7xl mx-auto px-4 py-8 min-h-[600px]"> {/* 调整最小高度 */}
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">照片集</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {displayedPhotos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative h-64 w-full"> {/* 固定高度和宽度 */}
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ objectPosition: 'center' }}
                />
                {/* 可以添加悬停效果，例如显示标题 */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end p-4">
                   <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{photo.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">{photo.date}</p>
                <p className="text-gray-700 mb-3">{photo.description}</p>
                <div className="flex flex-wrap gap-2">
                  {photo.tags?.map((tag, index) => (
                    <Tag key={index} color="blue">{tag}</Tag>
                  ))}
                </div>
                {/* 如果需要，可以添加喜欢、分享按钮 */}
              </div>
            </div>
          ))}
        </div>
        {/* 分页 */}
        <div className="mt-12 flex justify-center">
          <Pagination
            current={currentPage}
            total={photoList.length}
            pageSize={itemsPerPage}
            onChange={(page) => setCurrentPage(page)}
            className="!rounded-full"
          />
        </div>
      </div>
      <Footer />
      {/* 如果需要分享功能，可以添加 ShareModal */}
      {/* <ShareModal 
        isVisible={showShareModal}
        onClose={() => setShowShareModal(false)}
        url={currentUrl} // 或者特定照片的 URL
        title={"分享照片"}
      /> */}
    </div>
  );
};

export default Gallery;