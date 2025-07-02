# 内蒙古草原文化展示平台

## 项目简介
基于Next.js框架开发，集成12个技术实践模块，涵盖HTML5、CSS3、JavaScript现代特性及API集成。项目包含3D蒙古包展示、传统服饰样式库、智能问答系统等特色功能模块。

## 技术架构
### Next.js结构
```
└── src/
    └── app/
        ├── components/    # 可复用组件
        ├── practice/      # 实践模块路由
        ├── globals.css   # 全局样式
        └── layout.tsx    # 根布局
```

## 核心集成
### QAnything智能问答
实现路径：
```typescript:/src/app/practice/embed-demo/page.tsx
<iframe 
  src="https://qanything.ai"
  className="w-full h-[600px]"
  sandbox="allow-scripts allow-same-origin"
/>
```

### WakaTime开发数据
< img src="https://github.com/mkbk25/rexinshimin/blob/master/src/app/wakatime-stats.tsx"
    alt="waketime" width="200">
```

## 旧作业整合
通过JSON配置中心化管理12个实践模块：
< img src="https://github.com/mkbk25/rexinshimin/blob/master/src/app/exercise-card.tsx"
    alt="exercise" width="200">
```

## 运行指南
1. 环境准备
```bash
node -v  # 要求v18+
npm install
```

2. 配置环境变量
新建.env.local文件：
```env
WAKATIME_API_KEY=your_api_key
```

3. 启动开发服务器
```bash
npm run dev
```

## 效果截图
| 3D展示 | 智能问答 | 数据分析 |
|--------|---------|---------|
| ![蒙古包](public/jietu/01.jpg) | ![问答](public/jietu/02.jpg) | ![数据](public/jietu/03.jpg) |


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
