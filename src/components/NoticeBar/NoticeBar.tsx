import React from "react";
import "./NoticeBar.css";

interface NoticeBarProps {
  notices: string[];
}

const NoticeBar: React.FC<NoticeBarProps> = ({ notices }) => {
  return (
    <div className="notice-bar">
      <div className="notice-bar-content">
        {notices.map((notice, idx) => (
          <span key={idx} className="notice-item">
            {notice}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NoticeBar;