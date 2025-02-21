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
const Poem: React.FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("全部");
    const [currentPage, setCurrentPage] = useState(1);
    const categories = ["全部", "校园", "实验室", "旅行", "学术", "生活"];
    const handleSearch = () => {
        message.info("搜索功能开发中...");
    };
    const poems = [
        {
            id: 1,
            title: "实验室的星空",
            category: "科研",
            date: "2025-02-20",
            author: "张雨晨",
            views: 2341,
            likes: 156,
            content: `在深邃的实验室里
我们追寻着量子的轨迹
荧光屏上的数据
如同夜空中闪烁的星辰
你的眼眸映射着
未知世界的光芒`,
        },
        {
            id: 2,
            title: "春日校园",
            category: "校园",
            date: "2025-02-19",
            author: "李思源",
            views: 1892,
            likes: 143,
            content: `樱花纷飞的季节
图书馆前的小径
书页翻动的声响
与你轻声的诵读
交织成最美的乐章`,
        },
        {
            id: 3,
            title: "深夜实验曲",
            category: "科研",
            date: "2025-02-18",
            author: "王明哲",
            views: 2156,
            likes: 189,
            content: `凌晨三点的实验室
仪器的轰鸣是我们的摇篮曲
荧光灯下你疲惫的身影
是最动人的诗行`,
        },
        {
            id: 4,
            title: "量子之恋",
            category: "爱情",
            date: "2025-02-17",
            author: "陈雪婷",
            views: 1765,
            likes: 134,
            content: `当粒子纠缠在一起
就像你我的命运
跨越时空的距离
在量子世界里
我们永远相连`,
        },
        {
            id: 5,
            title: "雨中的答辩",
            category: "学术",
            date: "2025-02-16",
            author: "刘子琪",
            views: 2453,
            likes: 201,
            content: `窗外雨声潺潺
答辩室内心跳如雷
你在台下轻轻点头
给了我无声的力量
这是属于我们的毕业季`,
        },
        {
            id: 6,
            title: "实验室的四季",
            category: "科研",
            date: "2025-02-15",
            author: "赵梓涵",
            views: 1987,
            likes: 167,
            content: `春天，樱花落在实验记录上
夏天，空调与咖啡相伴
秋天，论文与枫叶齐飞
冬天，实验室里永远温暖如春`,
        },
    ];
    return (
        <div className="min-h-screen bg-gray-50">
            <Header currentPage="poems" />
            {/* 主要内容区 */}
            <div className="pt-16 max-w-7xl mx-auto px-4 py-8">
                {/* 诗歌列表 */}
                <div className="space-y-6">
                    {poems.map((poem) => (
                        <Link
                            key={poem.id}
                            to={`/poems/${poem.id}`}
                            className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm text-gray-500">{poem.date}</span>
                                    <Tag color="purple">{poem.category}</Tag>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {poem.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-2">
                                    <UserOutlined className="mr-1" /> {poem.author}
                                </p>
                                <pre className="text-gray-600 mb-4 font-serif whitespace-pre-line leading-relaxed">
                                    {poem.content}
                                </pre>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <span>
                                            <EyeOutlined className="mr-1" />
                                            {poem.views}
                                        </span>
                                        <span>
                                            <HeartOutlined className="mr-1" />
                                            {poem.likes}
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
export default Poem;
