"use client";
import MongolianLayout from '@/app/components/layout';
import Image from 'next/image';

export default function Page() {
  const instruments = [
    {
      id: 'morin-khuur',
      name: '马头琴',
      description: '蒙古族最具代表性的弦乐器，琴头雕刻成马头形状，象征着蒙古人对马的崇敬。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (2).png',
      features: [
        '两根弦（内外弦）',
        '马头装饰',
        '木质琴身',
        '传统雕刻'
      ]
    },
    {
      id: 'tobshuur',
      name: '托布秀尔',
      description: '一种传统的弹拨乐器，常用于演奏叙事民歌和短调民歌。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (3).png',
      features: [
        '两根弦',
        '梨形琴身',
        '长柄设计',
        '简洁装饰'
      ]
    },
    {
      id: 'yoochin',
      name: '扬琴',
      description: '蒙古族打击乐器，由木制音箱和金属弦组成，声音清脆悦耳。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风.png',
      features: [
        '梯形音箱',
        '多根金属弦',
        '木制共鸣箱',
        '专用琴槌'
      ]
    }
  ];

  return (
    <MongolianLayout
      title="传统乐器展示"
      subtitle="探索蒙古族音乐文化的瑰宝"
    >
      <div className="space-y-12">
        {instruments.map((instrument) => (
          <div 
            key={instrument.id}
            className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="md:flex">
              <div className="md:w-1/2 relative h-72">
                <Image
                  src={instrument.imageUrl}
                  alt={instrument.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-white font-['FangSong']">
                  {instrument.name}
                </h2>
              </div>
              <div className="p-8 md:w-1/2">
                <p className="text-[var(--foreground)]/80 mb-6 font-['SimSun'] leading-relaxed">
                  {instrument.description}
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[var(--accent-green)] font-['FangSong']">
                    乐器特点
                  </h3>
                  <ul className="grid grid-cols-2 gap-4">
                    {instrument.features.map((feature, index) => (
                      <li 
                        key={index}
                        className="flex items-center space-x-2 text-[var(--foreground)]/80 font-['SimSun']"
                      >
                        <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-[var(--accent-green)] mb-6 font-['FangSong']">
            音乐文化传承
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-[var(--border-color)]/10">
              <h3 className="text-xl font-bold text-[var(--accent-green)] mb-3 font-['FangSong']">
                历史传承
              </h3>
              <p className="text-[var(--foreground)]/80 font-['SimSun']">
                蒙古族传统乐器承载着草原文化的历史记忆，世代相传。
              </p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-[var(--border-color)]/10">
              <h3 className="text-xl font-bold text-[var(--accent-green)] mb-3 font-['FangSong']">
                艺术价值
              </h3>
              <p className="text-[var(--foreground)]/80 font-['SimSun']">
                每件乐器都是艺术品，展现着蒙古族精湛的制作工艺。
              </p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-[var(--border-color)]/10">
              <h3 className="text-xl font-bold text-[var(--accent-green)] mb-3 font-['FangSong']">
                现代发展
              </h3>
              <p className="text-[var(--foreground)]/80 font-['SimSun']">
                传统乐器在现代音乐中焕发新生，展现出强大的生命力。
              </p>
            </div>
          </div>
        </div>
      </div>
    </MongolianLayout>
  );
} 