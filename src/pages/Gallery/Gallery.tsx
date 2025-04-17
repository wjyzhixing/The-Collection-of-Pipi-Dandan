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
        id: 16,
        title: "济南的我！",
        description: "济南旅游！",
        imageUrl: "/love/济南小人A.jpg",
        date: "2024-04-08",
        tags: ["旅游", "济南"],
    },
    {
        id: 17,
        title: "济南的宝！",
        description: "济南旅游！",
        imageUrl: "/love/济南小人B.jpg",
        date: "2024-04-08",
        tags: ["旅游", "济南"],
    },
    {
        id: 12,
        title: "济南黑虎泉",
        description: "济南旅游！",
        imageUrl: "/love/济南黑虎泉1.jpg",
        date: "2024-04-08",
        tags: ["旅游", "济南"],
    },
    {
        id: 13,
        title: "济南黑虎泉",
        description: "济南旅游！",
        imageUrl: "/love/济南黑虎泉2.jpg",
        date: "2024-04-08",
        tags: ["旅游", "济南"],
    },
    {
        id: 14,
        title: "济南黑虎泉",
        description: "济南旅游！",
        imageUrl: "/love/济南黑虎泉3.jpg",
        date: "2024-04-08",
        tags: ["旅游", "济南"],
    },
    {
        id: 15,
        title: "济南黑虎泉",
        description: "济南旅游",
        imageUrl: "/love/济南黑虎泉4.jpg",
        date: "2024-04-08",
        tags: ["旅游", "济南"],
    },
    {
        id: 5,
        title: "2024春节大悦城",
        description: "书店！",
        imageUrl: "/love/春节大悦城.jpg",
        date: "2024-02-12",
        tags: ["春节", "欢乐"],
    },
    {
        id: 6,
        title: "2024春节大悦城",
        description: "书店！",
        imageUrl: "/love/春节大悦城咔咔.jpg",
        date: "2024-02-02",
        tags: ["春节", "合影"],
    },
    {
        id: 7,
        title: "2024春节大悦城",
        description: "书店！",
        imageUrl: "/love/春节大悦城咔.jpg",
        date: "2024-02-12",
        tags: ["春节", "欢乐"],
    },
    {
        id: 8,
        title: "2024春节大悦城",
        description: "书店！",
        imageUrl: "/love/春节大悦城咔咔咔.jpg",
        date: "2024-02-12",
        tags: ["春节", "合影"],
    },
    {
        id: 9,
        title: "2024春节大悦城",
        description: "书店！",
        imageUrl: "/love/春节大悦城咔咔咔咔.jpg",
        date: "2024-02-12",
        tags: ["春节", "合影"],
    },
    {
        id: 10,
        title: "2024春节大悦城",
        description: "书店！",
        imageUrl: "/love/春节大悦城咔咔咔咔咔.jpg",
        date: "2024-02-12",
        tags: ["春节", "合影"],
    },
    {
        id: 11,
        title: "2024春节大悦城",
        description: "书店！",
        imageUrl: "/love/春节大悦城咔咔咔咔咔咔.jpg",
        date: "2024-02-5",
        tags: ["春节", "合影"],
    },
    {
        id: 4,
        title: "2024春节",
        description: "屁屁蛋蛋集合！",
        imageUrl: "/love/春节回家.jpg",
        date: "2024-01-26",
        tags: ["春节", "家庭"],
    }
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