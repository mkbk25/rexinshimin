"use client";
import MongolianLayout from '@/app/components/layout';
import Image from 'next/image';

export default function Page() {
  const buildings = [
    {
      id: 'yurt',
      name: '蒙古包',
      description: '蒙古包是蒙古族传统的居住建筑，其结构科学、造型优美，体现了游牧民族的智慧。',
      features: [
        '圆形设计抗风性强',
        '可快速搭建拆卸',
        '保暖性能优异',
        '空间利用合理'
      ],
      structure: [
        '木制框架',
        '毡墙围护',
        '顶部天窗',
        '装饰图案'
      ],
      imageUrl: '/practice/images/生成内蒙古特色卡通风.png'
    },
    {
      id: 'temple',
      name: '寺庙建筑',
      description: '蒙古族寺庙建筑融合了蒙古族传统建筑艺术和宗教文化，是重要的文化遗产。',
      features: [
        '藏传佛教风格',
        '金顶彩绘',
        '雕刻精美',
        '布局严谨'
      ],
      structure: [
        '多层塔楼',
        '回廊设计',
        '佛堂大殿',
        '护法殿'
      ],
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (1).png'
    },
    {
      id: 'palace',
      name: '王府建筑',
      description: '蒙古族王府建筑是政治、军事、文化中心，展现了蒙古族建筑的最高水平。',
      features: [
        '规模宏大',
        '等级分明',
        '装饰华丽',
        '功能完备'
      ],
      structure: [
        '中轴对称',
        '庭院布局',
        '厅堂设计',
        '围墙防御'
      ],
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (2).png'
    }
  ];

  return (
    <MongolianLayout
      title="传统建筑"
      subtitle="探索蒙古族建筑艺术的精髓"
    >
      <div className="space-y-16">
        {buildings.map((building) => (
          <div 
            key={building.id}
            className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-2xl border border-[var(--border-color)]/20 shadow-xl overflow-hidden"
          >
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-80 md:h-full">
                <Image
                  src={building.imageUrl}
                  alt={building.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-4xl font-bold text-white font-['FangSong'] drop-shadow-lg">
                    {building.name}
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <p className="text-[var(--foreground)]/80 font-['SimSun'] leading-relaxed mb-8">
                  {building.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[var(--accent-green)] font-['FangSong']">
                      建筑特点
                    </h3>
                    <ul className="space-y-2">
                      {building.features.map((feature, index) => (
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
                      结构组成
                    </h3>
                    <ul className="space-y-2">
                      {building.structure.map((item, index) => (
                        <li 
                          key={index}
                          className="flex items-center space-x-2 text-[var(--foreground)]/80 font-['SimSun']"
                        >
                          <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 建筑文化价值 */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: '历史见证',
              content: '传统建筑见证了蒙古族的历史发展，记录了草原文明的变迁。'
            },
            {
              title: '技术传承',
              content: '建筑工艺凝聚了世代匠人的智慧，是宝贵的非物质文化遗产。'
            },
            {
              title: '文化象征',
              content: '建筑风格体现了蒙古族的审美观念和文化特色。'
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