'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [lastPushDate, setLastPushDate] = useState<string | null>(null);

  useEffect(() => {
    async function getSomething() {
      await new Promise<void>((resolve) => {
        setTimeout(function () {
          console.log('111111');
          resolve();
        }, 2000);
      });
    }
    getSomething().then(
      result => console.log('Async function finished successfully with result:', result)
    );
    console.log('2222222');

    async function getLastPushedDate(owner: string, repo: string) {
      const url = `https://api.github.com/repos/${owner}/${repo}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('网络响应失败');
        }
        const data = await response.json();
        // pushed_at 字段即为最后一次推送日期
        return data.pushed_at as string;
      } catch (error) {
        console.error('获取推送日期失败:', error);
        return null;
      }
    }

    getLastPushedDate('yangjh-xbmu', 'Web-develop').then(date => {
      console.log('最后一次推送日期:', date);
      setLastPushDate(date);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#2C5364] via-[#203A43] to-[#0F2027] text-slate-100">
      {/* 蒙古族传统纹样背景 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-repeat" style={{
        backgroundImage: `url('/practice/images/生成内蒙古特色卡通风 (3).png')`,
        backgroundSize: '200px',
        mixBlendMode: 'overlay'
      }}></div>

      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span className="font-['FangSong']">返回首页</span>
          </Link>
        </div>

        <section className="max-w-3xl mx-auto mb-10 bg-[#203A43]/60 backdrop-blur-sm rounded-xl border border-amber-700/30 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-amber-300 mb-4 font-['FangSong']">案例说明：异步编程与API数据获取</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-2 font-['SimSun']">
            <li>本案例演示了 async/await、Promise、fetch API、DOM 操作等异步编程基础。</li>
            <li>页面加载后会自动获取 GitHub 仓库的最后一次推送日期。</li>
            <li>请按 F12 打开浏览器控制台，观察输出。</li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto bg-[#203A43]/50 backdrop-blur-sm rounded-xl border border-amber-700/30 shadow-2xl p-8 flex flex-col items-center">
          <div className="relative w-full mb-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-amber-200 font-['FangSong'] relative group">
              JavaScript 异步编程练习
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h1>
            {/* 装饰元素 */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-amber-500/50"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-amber-500/50"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-amber-500/50"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-amber-500/50"></div>
          </div>

          <div
            id="demo"
            ref={demoRef}
            className="text-lg font-['SimSun'] bg-[#203A43]/80 backdrop-blur-sm rounded-lg p-6 text-center w-full mt-4 border border-amber-700/30 shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
          >
            {lastPushDate ? (
              <span>最后一次推送日期: <span className="text-amber-300 font-mono">{lastPushDate}</span></span>
            ) : (
              <span className="text-slate-400">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-amber-500 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                正在获取数据...
              </span>
            )}
          </div>
        </section>
      </main>
    </div>
  );
} 