import React from "react";
import { Card } from "antd";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Collection: React.FC = () => {
    const collections = [
        {
            title: "诗歌集",
            description: "收录了我们的诗歌作品",
            link: "https://gitee.com/wjyzhixing/The-Story-Collection-of-Pipi-Dandan/raw/master/poems/poems.pdf",
            icon: "📚"
        },
        {
            title: "故事集",
            description: "记录了我们的故事",
            link: "https://gitee.com/wjyzhixing/The-Story-Collection-of-Pipi-Dandan/raw/master/main.pdf",
            icon: "📖"
        },
        {
            title: "文章仓库",
            description: "所有故事和诗歌的源文件",
            link: "https://gitee.com/wjyzhixing/The-Story-Collection-of-Pipi-Dandan",
            icon: "📝"
        },
        {
            title: "代码工程",
            description: "我们的爱情故事博客源代码",
            link: "https://github.com/wjyzhixing/The-Collection-of-Pipi-Dandan",
            icon: "💻"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header currentPage="collection" />
            <div className="pt-16 max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-10">
                    {collections.map((item, index) => (
                        <Card
                            key={index}
                            hoverable
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
                            onClick={() => window.open(item.link, '_blank')}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="text-4xl">{item.icon}</div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Collection;