import React from "react";

const Star = ({ style }: { style: React.CSSProperties }) => (
  <svg width="32" height="32" style={style}>
    <circle cx="16" cy="16" r="1.5" fill="#fff" opacity="0.8" />
    <circle cx="8" cy="24" r="1" fill="#fff" opacity="0.5" />
    <circle cx="28" cy="10" r="1.2" fill="#fff" opacity="0.7" />
  </svg>
);

const notices = [
  "【置顶】根据中央精神，屁屁蛋蛋做出几点学习精神：\n1. 坚决拥护中央精神，每日进行晚饭监督，同时自身做到每日饭后出行>10min行为\n2. 为保障计划顺利执行，置顶提前入睡计划，无意外加班等情况，每天晚上十点必须上床进被窝，九点半之前洗漱\n3. 为验证计划效果，每天早晨起床要进行状态说明，表示是否身体自我感觉正常，以推进计划执行或修订\n\n——计划人  屁屁蛋蛋组委会",
  "欢迎来到皮皮蛋蛋的故事集！",
  "每周持续更新诗歌与故事，敬请关注～",
  "喜欢请分享给你的朋友吧！",
  "生活政策：每天至少说一次我爱你",
];

const Notices = () => (
  <div
    className="min-h-screen flex flex-col items-center justify-center"
    style={{
      background: "radial-gradient(ellipse at 60% 40%, #3a2e5d 0%, #1a1333 80%)",
      padding: "20px 8px",
      position: "relative",
      overflow: "hidden"
    }}
  >
    {/* 左上角隐形后退按钮 */}
    <button
      onClick={() => window.history.back()}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 44,
        height: 44,
        opacity: 0,
        zIndex: 100
      }}
      aria-label="返回"
      tabIndex={0}
    />
    {/* 星星装饰，移动端缩小并调整位置 */}
    <Star style={{ position: "absolute", top: 30, left: 20, width: 20, height: 20, animation: "star-float 6s infinite alternate" }} />
    <Star style={{ position: "absolute", top: 80, right: 30, width: 18, height: 18, animation: "star-float 8s 1s infinite alternate" }} />
    <Star style={{ position: "absolute", bottom: 80, left: 40, width: 16, height: 16, animation: "star-float 7s 0.5s infinite alternate" }} />
    <Star style={{ position: "absolute", bottom: 30, right: 20, width: 22, height: 22, animation: "star-float 9s 1.2s infinite alternate" }} />
    {/* 星云装饰 */}
    <div style={{
      position: "absolute",
      top: 120,
      left: "50%",
      width: "70vw",
      maxWidth: 400,
      height: 120,
      background: "radial-gradient(circle at 50% 50%, #a18cd1 0%, #fbc2eb 60%, transparent 100%)",
      opacity: 0.18,
      filter: "blur(32px)",
      transform: "translateX(-50%)"
    }} />
    <div
      className="w-full max-w-2xl mx-auto py-10 px-2 sm:py-16 sm:px-6 rounded-3xl shadow-2xl relative"
      style={{
        background: "rgba(40,30,80,0.85)",
        boxShadow: "0 8px 32px 0 rgba(170,170,255,0.18)",
        border: "1.5px solid #a18cd1"
      }}
    >
      <h1
        className="text-2xl sm:text-3xl font-extrabold mb-8 sm:mb-10 text-center"
        style={{
          fontFamily: "'Comic Sans MS','Chalkboard SE','Comic Neue',cursive,sans-serif",
          background: "linear-gradient(90deg,#a18cd1 0%,#fbc2eb 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        🪐 天马行空公告栏 🪐
      </h1>
      <ul className="space-y-6 sm:space-y-8 relative z-10">
        {notices.map((notice, idx) => (
          <li
            key={idx}
            className={`break-words text-base sm:text-lg md:text-xl font-semibold px-3 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-md ${idx === 0 ? "border-2 border-yellow-300 bg-yellow-50 bg-opacity-80 text-yellow-900" : ""}`}
            style={{
              background: idx === 0
                ? undefined
                : "linear-gradient(90deg, #fbc2eb33 0%, #a6c1ee33 100%)",
              color: idx === 0 ? undefined : "#fff",
              fontFamily: "'Comic Sans MS','Chalkboard SE','Comic Neue',cursive,sans-serif",
              boxShadow: "0 2px 12px 0 rgba(170,170,255,0.10)",
              whiteSpace: "pre-line",
              animation: `float${idx%2} 2.5s ease-in-out infinite alternate`
            }}
          >
            {notice}
          </li>
        ))}
      </ul>
      {/* 浮动动画 */}
      <style>
        {`
          @keyframes float0 {
            0% { transform: translateY(0px) rotate(-2deg);}
            100% { transform: translateY(-10px) rotate(2deg);}
          }
          @keyframes float1 {
            0% { transform: translateY(0px) rotate(2deg);}
            100% { transform: translateY(10px) rotate(-2deg);}
          }
          @keyframes star-float {
            0% { transform: translateY(0px) scale(1);}
            100% { transform: translateY(-20px) scale(1.1);}
          }
        `}
      </style>
    </div>
  </div>
);

export default Notices;