import React from "react";
import { Button, Modal, message } from "antd";
import { ShareAltOutlined, CopyOutlined } from "@ant-design/icons";
import { QRCodeCanvas } from "qrcode.react";

interface ShareModalProps {
  isVisible: boolean;
  onClose: () => void;
  url: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ isVisible, onClose, url }) => {
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(url).then(() => {
      message.success("链接已复制到剪贴板");
    });
  };

  return (
    <Modal
      title={
        <div className="flex items-center gap-2">
          <ShareAltOutlined />
          <span>分享文章</span>
        </div>
      }
      open={isVisible}
      onCancel={onClose}
      footer={null}
      width={400}
    >
      <div className="flex flex-col items-center gap-6 py-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <QRCodeCanvas value={url} size={200} level="H" />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <input
              type="text"
              value={url}
              className="flex-1 bg-transparent border-none outline-none text-gray-600 text-sm"
              readOnly
            />
            <Button
              icon={<CopyOutlined />}
              onClick={handleCopyUrl}
              className="!rounded-button"
            >
              复制
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ShareModal;