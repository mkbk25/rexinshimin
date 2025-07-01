"use client";
import MongolianLayout from '@/app/components/layout';
import Image from 'next/image';

export default function Page() {
  const music = [
    {
      id: 'long-song',
      name: '长调民歌',
      description: '长调民歌是蒙古族最具代表性的声乐艺术形式，以其悠长的旋律和丰富的内容著称。',
      features: [
        '音域宽广',
        '曲调悠长',
        '即兴发挥',
        '草原风格'
      ],
      themes: [
        '游牧生活',
        '爱情故事',
        '英雄颂歌',
        '自然风光'
      ],
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (3).png'
    },
    {
      id: 'hoomii',
      name: '呼麦艺术',
      description: '呼麦是蒙古族独特的发声技法，能同时发出两个或多个音调，被誉为"天籁之音"。',
      features: [
        '双声部演唱',
        '腹式呼吸',
        '特殊发声',
        '自然模仿'
      ],
      themes: [
        '草原风光',
        '动物声音',
        '生活场景',
        '精神寄托'
      ],
      imageUrl: '/practice/images/生成内蒙古特色卡通风.png'
    },
    {
      id: 'uliger',
      name: '乌力格尔',
      description: '乌力格尔是蒙古族传统说唱艺术，通过韵文形式讲述历史故事和民间传说。',
      features: [
        '韵律工整',
        '故事性强',
        '音乐伴奏',
        '表演形式'
      ],
      themes: [
        '历史传说',
        '英雄故事',
        '民间传说',
        '生活智慧'
      ],
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (1).png'
    }
  ];

  return (
    <MongolianLayout
      title="传统音乐"
      subtitle="聆听草原的天籁之音"
    >
      <div className="space-y-16">
        {music.map((item) => (
          <div 
            key={item.id}
            className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-2xl border border-[var(--border-color)]/20 shadow-xl overflow-hidden"
          >
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-80 md:h-full">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-4xl font-bold text-white font-['FangSong'] drop-shadow-lg">
                    {item.name}
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <p className="text-[var(--foreground)]/80 font-['SimSun'] leading-relaxed mb-8">
                  {item.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[var(--accent-green)] font-['FangSong']">
                      艺术特点
                    </h3>
                    <ul className="space-y-2">
                      {item.features.map((feature, index) => (
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

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[var(--accent-green)] font-['FangSong']">
                      主要题材
                    </h3>
                    <ul className="space-y-2">
                      {item.themes.map((theme, index) => (
                        <li 
                          key={index}
                          className="flex items-center space-x-2 text-[var(--foreground)]/80 font-['SimSun']"
                        >
                          <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]"></span>
                          <span>{theme}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 音乐文化价值 */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: '文化传承',
              content: '传统音乐是蒙古族文化的重要载体，承载着丰富的历史文化内涵。'
            },
            {
              title: '艺术价值',
              content: '独特的音乐形式和表现手法，展现了蒙古族音乐的艺术魅力。'
            },
            {
              title: '精神价值',
              content: '音乐作品反映了蒙古族人民的精神世界和价值追求。'
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