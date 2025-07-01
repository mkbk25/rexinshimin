"use client";
import MongolianLayout from '@/app/components/layout';
import Image from 'next/image';

export default function Page() {
  const crafts = [
    {
      id: 'embroidery',
      name: '刺绣艺术',
      description: '蒙古族刺绣以其独特的图案和精湛的技艺闻名，常用于服饰、家居装饰等领域。',
      techniques: [
        '针法多样',
        '图案传统',
        '色彩鲜艳',
        '寓意丰富'
      ],
      materials: [
        '丝线',
        '棉线',
        '金银线',
        '各色布料'
      ],
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (2).png'
    },
    {
      id: 'leather',
      name: '皮革工艺',
      description: '皮革制品是蒙古族传统手工艺的重要组成部分，包括马具、靴子等实用品的制作。',
      techniques: [
        '皮革鞣制',
        '压花技术',
        '编织工艺',
        '镶嵌装饰'
      ],
      materials: [
        '牛皮',
        '羊皮',
        '马皮',
        '装饰材料'
      ],
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (3).png'
    },
    {
      id: 'felt',
      name: '毡制工艺',
      description: '毡制品是蒙古族最具特色的手工艺品之一，广泛用于制作蒙古包、地毯等生活用品。',
      techniques: [
        '羊毛选料',
        '揉制技术',
        '图案设计',
        '染色工艺'
      ],
      materials: [
        '羊毛',
        '骆驼毛',
        '天然染料',
        '装饰物'
      ],
      imageUrl: '/practice/images/生成内蒙古特色卡通风.png'
    }
  ];

  return (
    <MongolianLayout
      title="传统手工艺"
      subtitle="探索蒙古族手工艺人的匠心技艺"
    >
      <div className="space-y-16">
        {crafts.map((craft) => (
          <div 
            key={craft.id}
            className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-2xl border border-[var(--border-color)]/20 shadow-xl overflow-hidden"
          >
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-80 md:h-full">
                <Image
                  src={craft.imageUrl}
                  alt={craft.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-4xl font-bold text-white font-['FangSong'] drop-shadow-lg">
                    {craft.name}
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <p className="text-[var(--foreground)]/80 font-['SimSun'] leading-relaxed mb-8">
                  {craft.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[var(--accent-green)] font-['FangSong']">
                      工艺技法
                    </h3>
                    <ul className="space-y-2">
                      {craft.techniques.map((technique, index) => (
                        <li 
                          key={index}
                          className="flex items-center space-x-2 text-[var(--foreground)]/80 font-['SimSun']"
                        >
                          <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]"></span>
                          <span>{technique}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[var(--accent-green)] font-['FangSong']">
                      主要材料
                    </h3>
                    <ul className="space-y-2">
                      {craft.materials.map((material, index) => (
                        <li 
                          key={index}
                          className="flex items-center space-x-2 text-[var(--foreground)]/80 font-['SimSun']"
                        >
                          <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]"></span>
                          <span>{material}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 手工艺文化价值 */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: '文化传承',
              content: '传统手工艺承载着蒙古族的文化记忆，是非物质文化遗产的重要组成部分。'
            },
            {
              title: '技艺价值',
              content: '精湛的手工技艺体现了蒙古族人民的智慧和创造力。'
            },
            {
              title: '经济价值',
              content: '手工艺品既是日常生活用品，也是重要的文化产业资源。'
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