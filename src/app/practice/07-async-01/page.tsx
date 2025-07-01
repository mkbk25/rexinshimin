'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [tableHtml, setTableHtml] = useState('');

  useEffect(() => {
    setTimeout(() => {
      console.log('111');
    }, 2000);
    console.log('222');

    function getSomething() {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('1111');
          resolve();
        }, 1000);
      });
    }
    getSomething().then(() => {
      console.log('2222');
    });

    async function getSomething2() {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('111111');
          resolve();
        }, 1000);
      });
    }
    (async () => {
      await getSomething2();
      console.log('222222');
    })();

    async function getAllCommitDates(owner: string, repo: string) {
      const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('网络响应失败');
        }
        const commits = await response.json();
        // 提取每个提交的日期
        const dates = commits.map((commit: any) => commit.commit.author.date);
        return dates;
      } catch (error) {
        console.error('获取提交日期失败:', error);
        return [];
      }
    }

    function showCommitDatesTable(dates: string[]) {
      let html = '<table class="w-full text-left border-collapse border border-amber-700/30 text-slate-200 font-[\'SimSun\']">';
      html += '<thead><tr class="bg-amber-900/40"><th class="p-3 border border-amber-700/30">序号</th><th class="p-3 border border-amber-700/30">提交日期</th></tr></thead><tbody>';
      dates.forEach((date, idx) => {
        const rowClass = idx % 2 === 0 ? 'bg-[#203A43]/40' : 'bg-[#203A43]/20';
        html += `<tr class="${rowClass} hover:bg-amber-900/30 transition-colors"><td class="p-3 border border-amber-700/30">${idx + 1}</td><td class="p-3 border border-amber-700/30">${date}</td></tr>`;
      });
      html += '</tbody></table>';
      setTableHtml(html);
    }

    getAllCommitDates('yangjh-xbmu', 'Web-develop')
      .then(dates => {
        console.log('所有提交日期:', JSON.stringify(dates));
        showCommitDatesTable(dates);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tl from-[#2C5364] via-[#203A43] to-[#0F2027] text-slate-100">
      {/* 蒙古族传统纹样背景 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-repeat" style={{
        backgroundImage: `url('/practice/images/生成内蒙古特色卡通风.png')`,
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
            <li>本案例演示了 setTimeout、Promise、async/await、fetch API、DOM 操作等异步编程基础。</li>
            <li>页面加载后会自动获取 GitHub 提交日期并渲染表格。</li>
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
            className="w-full overflow-x-auto mt-4 rounded-lg shadow-lg" 
            dangerouslySetInnerHTML={{ __html: tableHtml }} 
          />
        </section>
      </main>
    </div>
  );
} 