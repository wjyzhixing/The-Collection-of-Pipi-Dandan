// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import { Button, Tag, Dropdown, message, Pagination } from "antd";
import { Link } from "react-router-dom";
import {
    UserOutlined,
    HeartOutlined,
    ShareAltOutlined,
    BookOutlined,
    FilterOutlined,
    ClockCircleOutlined,
    EyeOutlined,
} from "@ant-design/icons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { poems } from "../../poem/poem.js";
const Poem: React.FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("全部");
    const [currentPage, setCurrentPage] = useState(1);
    const categories = ["全部", "校园", "实验室", "旅行", "学术", "生活"];
    const handleSearch = () => {
        message.info("搜索功能开发中...");
    };

    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedChapters = poems.chapters.slice(startIndex, endIndex);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header currentPage="poems" />
            {/* 主要内容区 */}
            <div className="pt-16 max-w-7xl mx-auto px-4 py-8">
                {/* 诗歌列表 */}
                <div className="space-y-6">
                    {displayedChapters.map((chapter) => (
                        <Link
                            key={chapter.chapter}
                            to={`/poems/${chapter.chapter}`}
                            className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm text-gray-500">第{chapter.chapter}章</span>
                                    <Tag color="purple">诗歌</Tag>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    第{chapter.chapter}章
                                </h3>
                                <div className="space-y-4">
                                    {chapter.poems.map((poem, poemIndex) => (
                                        <pre key={poemIndex} className="text-gray-600 font-serif whitespace-pre-line leading-relaxed">
                                            {poem.content.join("\n")}
                                        </pre>
                                    ))}
                                </div>
                                {/* <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <span>
                                            <EyeOutlined className="mr-1" />
                                            {Math.floor(Math.random() * 1000) + 500}
                                        </span>
                                        <span>
                                            <HeartOutlined className="mr-1" />
                                            {Math.floor(Math.random() * 200) + 100}
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
                                </div> */}
                            </div>
                        </Link>
                    ))}
                </div>
                {/* 分页 */}
                <div className="mt-8 flex justify-center">
                    <Pagination
                        current={currentPage}
                        total={poems.chapters.length}
                        pageSize={itemsPerPage}
                        onChange={(page) => setCurrentPage(page)}
                        className="!rounded-button"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Poem;
