"use client";
import MongolianLayout from '@/app/components/layout';
import Image from 'next/image';

export default function Page() {
  const activities = [
    {
      id: 'horse',
      name: '赛马',
      description: '赛马是那达慕大会最受欢迎的项目之一，展现了蒙古马的速度与耐力，以及骑手的技巧。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (3).png',
      details: [
        '比赛距离从15-30公里不等',
        '参赛骑手多为儿童',
        '马匹需经过专门训练',
        '获胜者受到高度尊重'
      ]
    },
    {
      id: 'wrestling',
      name: '摔跤',
      description: '蒙古族摔跤是展现力量与技巧的竞技项目，选手穿着传统服装，遵循独特的比赛规则。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风.png',
      details: [
        '没有体重级别限制',
        '比赛采用淘汰制',
        '胜者要进行鹰舞',
        '服装具有特殊意义'
      ]
    },
    {
      id: 'archery',
      name: '射箭',
      description: '射箭体现了蒙古族的传统武艺，需要选手具备精准的眼力和稳定的手法。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (1).png',
      details: [
        '使用传统蒙古弓',
        '固定距离射击',
        '有团体和个人赛',
        '评分标准严格'
      ]
    }
  ];

  return (
    <MongolianLayout
      title="那达慕盛会"
      subtitle="体验草原传统体育竞技的魅力"
    >
      <div className="space-y-16">
        {activities.map((activity, index) => (
          <div 
            key={activity.id}
            className={`flex flex-col md:flex-row gap-8 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="md:w-1/2 relative">
              <div className="relative h-80 w-full overflow-hidden rounded-xl">
                <Image
                  src={activity.imageUrl}
                  alt={activity.name}
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <h2 className="absolute bottom-6 left-6 text-4xl font-bold text-white font-['FangSong'] drop-shadow-lg">
                  {activity.name}
                </h2>
              </div>
            </div>
            
            <div className="md:w-1/2 space-y-6">
              <div className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl p-6">
                <p className="text-[var(--foreground)]/80 font-['SimSun'] leading-relaxed text-lg">
                  {activity.description}
                </p>
              </div>
              
              <div className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl p-6">
                <h3 className="text-xl font-bold text-[var(--accent-green)] mb-4 font-['FangSong']">
                  比赛特点
                </h3>
                <ul className="grid grid-cols-2 gap-4">
                  {activity.details.map((detail, index) => (
                    <li 
                      key={index}
                      className="flex items-center space-x-2 text-[var(--foreground)]/80 font-['SimSun']"
                    >
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--accent-green)] mb-6 font-['FangSong']">
            那达慕的文化意义
          </h2>
          <p className="text-[var(--foreground)]/80 font-['SimSun'] leading-relaxed max-w-3xl mx-auto">
            那达慕不仅是体育竞技的盛会，更是蒙古族传统文化的重要载体。通过这些比赛项目，展现了蒙古族人民的勇武精神、竞技技巧和文化传承，同时也是促进民族团结、传承传统文化的重要平台。
          </p>
        </div>
      </div>
    </MongolianLayout>
  );
} 