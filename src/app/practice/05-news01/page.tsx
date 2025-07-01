"use client";
import MongolianLayout from '@/app/components/layout';
import Image from 'next/image';

export default function Page() {
  const news = [
    {
      id: 'festival',
      title: '2024那达慕大会盛大开幕',
      date: '2024-03-15',
      category: '文化活动',
      summary: '第35届全区那达慕大会在呼和浩特盛大开幕，来自全区各地的选手将展开为期三天的传统体育竞技。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (2).png',
      content: '本届那达慕大会设有传统的"三大项"比赛：赛马、摔跤和射箭，同时还增设了马术表演、民族服装展示等文化活动。开幕式上，来自各地的艺术团体带来了精彩的文艺演出，展现了蒙古族文化的独特魅力。'
    },
    {
      id: 'heritage',
      title: '内蒙古非物质文化遗产保护成果显著',
      date: '2024-03-10',
      category: '文化保护',
      summary: '近年来，内蒙古在非物质文化遗产保护方面取得显著成果，多个项目被列入国家级非遗名录。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (3).png',
      content: '截至目前，内蒙古已有长调民歌、马头琴制作技艺等多个项目被列入国家级非物质文化遗产名录。各地积极开展非遗传承人培养工作，建立了多个非遗展示基地，为传统文化的保护和传承提供了重要平台。'
    },
    {
      id: 'education',
      title: '草原文化进校园活动启动',
      date: '2024-03-05',
      category: '教育传承',
      summary: '为促进青少年对传统文化的了解，内蒙古启动"草原文化进校园"系列活动。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风.png',
      content: '活动将邀请非遗传承人走进校园，通过互动体验、专题讲座等形式，让学生们近距离感受蒙古族传统文化的魅力。活动内容包括马头琴演奏、蒙古族服饰展示、传统工艺品制作等，受到师生们的热烈欢迎。'
    }
  ];

  return (
    <MongolianLayout
      title="草原文化新闻"
      subtitle="传递草原文化的最新动态"
    >
      <div className="space-y-12">
        {/* 头条新闻 */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          <Image
            src={news[0].imageUrl}
            alt={news[0].title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[var(--accent-green)] text-white px-3 py-1 rounded-full text-sm font-['SimSun']">
                  {news[0].category}
                </span>
                <span className="text-white/80 text-sm font-['SimSun']">
                  {news[0].date}
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4 font-['FangSong']">
                {news[0].title}
              </h2>
              <p className="text-white/90 text-lg font-['SimSun']">
                {news[0].summary}
              </p>
            </div>
          </div>
        </div>

        {/* 新闻列表 */}
        <div className="grid md:grid-cols-2 gap-8">
          {news.slice(1).map((item) => (
            <div 
              key={item.id}
              className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[var(--accent-green)]/10 text-[var(--accent-green)] px-3 py-1 rounded-full text-sm font-['SimSun']">
                    {item.category}
                  </span>
                  <span className="text-[var(--foreground)]/60 text-sm font-['SimSun']">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--accent-green)] mb-3 font-['FangSong']">
                  {item.title}
                </h3>
                <p className="text-[var(--foreground)]/80 font-['SimSun'] mb-4">
                  {item.summary}
                </p>
                <p className="text-[var(--foreground)]/70 font-['SimSun'] text-sm line-clamp-3">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 分类导航 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: '文化活动', count: 12 },
            { name: '文化保护', count: 8 },
            { name: '教育传承', count: 15 },
            { name: '艺术展演', count: 10 }
          ].map((category, index) => (
            <div 
              key={index}
              className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl p-4 text-center cursor-pointer hover:bg-[var(--primary-green)]/10 transition-colors"
            >
              <h3 className="text-lg font-bold text-[var(--accent-green)] mb-2 font-['FangSong']">
                {category.name}
              </h3>
              <p className="text-[var(--foreground)]/60 text-sm font-['SimSun']">
                {category.count} 篇文章
              </p>
            </div>
          ))}
        </div>
      </div>
    </MongolianLayout>
  );
} 