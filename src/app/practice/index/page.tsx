import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#2C5364] via-[#203A43] to-[#0F2027] text-slate-100">
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
          <h2 className="text-2xl font-bold text-amber-300 mb-4 font-['FangSong']">案例说明：HTML 基础标签演示</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-2 font-['SimSun']">
            <li>本案例演示了 HTML 的常用标签，包括标题、段落、超链接、列表、图片、表格和表单。</li>
            <li>所有元素均可交互体验，表单可直接提交。</li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto bg-[#203A43]/50 backdrop-blur-sm rounded-xl border border-amber-700/30 shadow-2xl p-8">
          <div className="relative mb-8">
            <h1 className="text-3xl font-bold mb-6 text-amber-200 font-['FangSong'] relative group">
              一级标题
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h1>
            {/* 装饰元素 */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-amber-500/50"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-amber-500/50"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-amber-500/50"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-amber-500/50"></div>
          </div>

          <div className="prose prose-invert max-w-none prose-p:text-slate-300 prose-a:text-amber-400 hover:prose-a:text-amber-300 prose-li:text-slate-200 prose-table:border-amber-700/30 prose-th:bg-amber-900/40 prose-th:text-amber-200 prose-td:border-amber-700/30 prose-img:rounded-lg prose-img:shadow-lg prose-img:my-2 font-['SimSun']">
            <p>
              段落标记，a是行内元素，效果是这样的，
              <a href="https://yangzh.cn" target="_blank" rel="noopener noreferrer" className="font-['SimSun']">这是一个超链接地址。</a>
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>这是列表</li>
              <li>这是列表</li>
              <li>这是列表</li>
              <li>这是列表</li>
            </ol>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="relative group">
                <Image 
                  src="/practice/images/生成内蒙古特色卡通风.png" 
                  alt="图片替代说明文字" 
                  width={200} 
                  height={120} 
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full h-auto"
                />
                <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 rounded-lg transition-colors duration-300"></div>
              </div>
              <div className="relative group">
                <Image 
                  src="/practice/images/生成内蒙古特色卡通风 (1).png" 
                  alt="未来风格示例图片" 
                  width={200} 
                  height={120} 
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full h-auto"
                />
                <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 rounded-lg transition-colors duration-300"></div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-amber-700/30 text-slate-200 my-6">
                <tbody>
                  <tr className="bg-amber-900/20">
                    <td className="border border-amber-700/30 p-3">单元格1</td>
                    <td className="border border-amber-700/30 p-3">单元格1</td>
                    <td className="border border-amber-700/30 p-3">单元格1</td>
                  </tr>
                  <tr className="bg-[#203A43]/40">
                    <td className="border border-amber-700/30 p-3">单元格1</td>
                    <td className="border border-amber-700/30 p-3">单元格1</td>
                    <td className="border border-amber-700/30 p-3">单元格1</td>
                  </tr>
                  <tr className="bg-amber-900/20">
                    <td className="border border-amber-700/30 p-3">单元格1</td>
                    <td className="border border-amber-700/30 p-3">单元格1</td>
                    <td className="border border-amber-700/30 p-3">单元格1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <form action="https://search.douban.com/book/subject_search" method="get" className="flex flex-col sm:flex-row gap-4 items-center mt-8">
              <input 
                type="text" 
                name="search_text" 
                className="flex-1 px-4 py-2 rounded-lg bg-[#203A43]/80 border border-amber-700/30 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 font-['SimSun'] placeholder-slate-400" 
                placeholder="豆瓣图书搜索..." 
              />
              <button 
                type="submit" 
                className="px-6 py-2 rounded-lg bg-amber-600 text-white font-['FangSong'] hover:bg-amber-500 transition-colors cursor-pointer shadow-lg hover:shadow-amber-500/20"
              >
                搜索
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
} 