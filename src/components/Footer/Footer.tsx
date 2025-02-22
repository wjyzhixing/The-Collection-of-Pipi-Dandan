import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">关于我们</h3>
            <p className="text-gray-400">
                记录波浪小子和田螺姑娘的诗歌和故事
              {/* 我们是一对热爱文学和科研的研究生情侣，这里记录着我们共同的故事和成长。 */}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">联系方式</h3>
            <p className="text-gray-400">邮箱：wjy19971220@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">更新动态</h3>
            <p className="text-gray-400">每周更新 1-2 篇诗歌或故事</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2025 The Collection of Pipi Dandan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;