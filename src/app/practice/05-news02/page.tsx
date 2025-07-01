"use client";
import MongolianLayout from '@/app/components/layout';
import Image from 'next/image';

export default function Page() {
  const festivals = [
    {
      id: 'nadam',
      name: '那达慕大会',
      date: '每年7-8月',
      description: '那达慕是蒙古族最重要的传统节日之一，集体育竞技、民俗表演、商品交易于一体的盛大集会。',
      activities: ['赛马', '摔跤', '射箭', '民族歌舞', '美食品尝'],
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (3).png'
    },
    {
      id: 'ovoo',
      name: '敖包祭祀',
      date: '农历五月十三',
      description: '敖包祭祀是蒙古族祭祀自然神灵、祈求风调雨顺的重要仪式，体现了蒙古族人与自然和谐共处的理念。',
      activities: ['祭祀仪式', '传统祈祷', '民族歌舞', '祝福仪式', '敖包巡游'],
      imageUrl: '/practice/images/生成内蒙古特色卡通风.png'
    },
    {
      id: 'spring',
      name: '春节',
      date: '农历正月初一',
      description: '蒙古族春节融合了游牧文化特色，以走亲访友、举办那达慕、品尝美食为主要内容。',
      activities: ['祭祀仪式', '家族聚会', '民族歌舞', '传统游戏', '美食分享'],
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (1).png'
    }
  ];

  return (
    <MongolianLayout
      title="传统节日"
      subtitle="感受蒙古族传统节日的独特魅力"
    >
      <div className="space-y-16">
        {festivals.map((festival, index) => (
          <div 
            key={festival.id}
            className="relative bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-2xl border border-[var(--border-color)]/20 shadow-xl overflow-hidden"
          >
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-80 md:h-full">
                <Image
                  src={festival.imageUrl}
                  alt={festival.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 space-y-2">
                  <h2 className="text-4xl font-bold text-white font-['FangSong'] drop-shadow-lg">
                    {festival.name}
                  </h2>
                  <p className="text-white/80 font-['SimSun']">
                    {festival.date}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <p className="text-[var(--foreground)]/80 font-['SimSun'] leading-relaxed mb-8">
                  {festival.description}
                </p>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[var(--accent-green)] font-['FangSong']">
                    节日活动
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {festival.activities.map((activity, index) => (
                      <div 
                        key={index}
                        className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-[var(--border-color)]/10"
                      >
                        <p className="text-[var(--foreground)]/80 font-['SimSun'] text-center">
                          {activity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 装饰元素 */}
            <div className="absolute -z-10 w-40 h-40 rounded-full blur-3xl opacity-20 -right-20 top-1/2 -translate-y-1/2 bg-[var(--accent-green)]"></div>
          </div>
        ))}

        {/* 节日文化意义 */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: '文化传承',
              content: '传统节日是蒙古族文化的重要载体，承载着丰富的历史文化内涵。'
            },
            {
              title: '民族团结',
              content: '节日活动增进了民族间的了解和友谊，促进了民族团结。'
            },
            {
              title: '精神寄托',
              content: '传统节日满足了人们的精神文化需求，体现了独特的民族精神。'
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl p-6"
            >
              <h3 className="text-xl font-bold text-[var(--accent-green)] mb-3 font-['FangSong']">
                {item.title}
              </h3>
              <p className="text-[var(--foreground)]/80 font-['SimSun']">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MongolianLayout>
  );
} 