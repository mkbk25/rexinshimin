"use client";
import MongolianLayout from '@/app/components/layout';
import Image from 'next/image';

export default function Page() {
  const crafts = [
    {
      id: 'leather',
      name: '皮革工艺',
      description: '蒙古族皮革制品以其精湛的工艺和独特的纹样闻名，包括马具、皮靴等日用品。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (1).png',
      techniques: ['手工缝制', '压花工艺', '传统染色', '图案雕刻']
    },
    {
      id: 'silver',
      name: '银器制作',
      description: '蒙古族银器以其精美的雕刻和独特的造型著称，是草原文化的重要组成部分。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (2).png',
      techniques: ['錾刻技法', '掐丝工艺', '镶嵌宝石', '传统纹样']
    },
    {
      id: 'felt',
      name: '毡毯艺术',
      description: '羊毛毡制品是蒙古族最具特色的手工艺品之一，具有保暖、实用和装饰功能。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (3).png',
      techniques: ['羊毛选料', '手工揉制', '图案设计', '天然染色']
    }
  ];

  return (
    <MongolianLayout
      title="传统工艺品展示"
      subtitle="探索蒙古族匠人的智慧结晶"
    >
      <div className="space-y-16">
        {crafts.map((craft, index) => (
          <div 
            key={craft.id}
            className={`relative bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl overflow-hidden ${
              index % 2 === 0 ? 'lg:ml-12' : 'lg:mr-12'
            }`}
          >
            <div className="md:grid md:grid-cols-2 gap-8">
              <div className="relative h-80 md:h-full min-h-[320px]">
                <Image
                  src={craft.imageUrl}
                  alt={craft.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <h2 className="text-3xl font-bold text-white font-['FangSong'] drop-shadow-lg mb-2">
                    {craft.name}
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <p className="text-[var(--foreground)]/80 font-['SimSun'] leading-relaxed mb-8">
                  {craft.description}
                </p>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[var(--accent-green)] font-['FangSong']">
                    工艺特点
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {craft.techniques.map((technique, index) => (
                      <div 
                        key={index}
                        className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-[var(--border-color)]/10"
                      >
                        <p className="text-[var(--foreground)]/80 font-['SimSun'] text-center">
                          {technique}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 装饰元素 */}
            <div className={`absolute -z-10 w-40 h-40 rounded-full blur-3xl opacity-20 ${
              index % 2 === 0 ? '-left-20' : '-right-20'
            } top-1/2 -translate-y-1/2 bg-[var(--accent-green)]`}></div>
          </div>
        ))}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: '文化传承', content: '工艺品承载着蒙古族的文化记忆和艺术智慧。' },
            { title: '技艺创新', content: '传统工艺在现代设计中焕发新的生命力。' },
            { title: '实用价值', content: '每件工艺品都具有其独特的实用功能。' },
            { title: '艺术价值', content: '精湛的工艺体现了草原艺术的独特魅力。' }
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