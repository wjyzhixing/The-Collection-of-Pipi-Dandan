import React, { useState } from "react";
import { Tag, Pagination, Modal, Input, message } from "antd";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

interface PhotoItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
    tags?: string[];
}

const photoList: PhotoItem[] = [
    {
        id: 20,
        title: "西站！",
        description: "西站！",
        imageUrl: "/love/西站3.jpg",
        date: "2025-04-08",
        tags: ["旅游", "西站"],
    },
    {
        id: 19,
        title: "西站！",
        description: "西站！",
        imageUrl: "/love/西站2.jpg",
        date: "2025-04-08",
        tags: ["旅游", "西站"],
    },
    {
        id: 18,
        title: "西站！",
        description: "西站！",
        imageUrl: "/love/西站1.jpg",
        date: "2025-04-08",
        tags: ["旅游", "西站"],
    },
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
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [answer, setAnswer] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);

    const itemsPerPage = 9;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedPhotos = photoList.slice(startIndex, endIndex);

    const handleVerify = () => {
        if (answer.toLowerCase() === "wyds") {
            setIsAuthorized(true);
            setIsModalVisible(false);
            message.success("验证成功，欢迎查看照片！");
        } else {
            message.error("答案错误，请重试");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header currentPage="gallery" />
            <Modal
                title="请回答问题以查看照片"
                open={isModalVisible}
                onOk={handleVerify}
                onCancel={() => window.history.back()}
                closable={false}
                maskClosable={false}
            >
                <p className="mb-4">问题：nzhs</p>
                <Input
                    placeholder="请输入答案"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    onPressEnter={handleVerify}
                />
            </Modal>

            {isAuthorized ? (
                <div className="pt-16 max-w-7xl mx-auto px-4 py-8 min-h-[600px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                        {displayedPhotos.map((photo) => (
                            <div
                                key={photo.id}
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
                            >
                                <div className="relative h-64 w-full">
                                    <img
                                        src={photo.imageUrl}
                                        alt={photo.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        style={{ objectPosition: 'center' }}
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end p-4">
                                        <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {photo.title}
                                        </h3>
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
                                </div>
                            </div>
                        ))}
                    </div>
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
            ) : (
                <div className="pt-16 max-w-7xl mx-auto px-4 py-8 text-center text-gray-500">
                    请先完成验证
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Gallery;