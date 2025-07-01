"use client";
import MongolianLayout from '@/app/components/layout';
import Image from 'next/image';

export default function Page() {
  const costumes = [
    {
      id: 'deel',
      name: '蒙古袍（德勒）',
      description: '蒙古袍是蒙古族最具代表性的传统服饰，其设计体现了游牧生活的实用性和审美特点。',
      features: [
        '立领对襟',
        '宽大袖口',
        '腰带装饰',
        '侧开衩设计'
      ],
      styles: [
        '日常款式',
        '节日盛装',
        '婚礼礼服',
        '祭祀服装'
      ],
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (1).png'
    },
    {
      id: 'hat',
      name: '蒙古帽（乌兰）',
      description: '蒙古帽是传统服饰中的重要配饰，不同的款式代表着不同的身份和场合。',
      features: [
        '顶部装饰',
        '绒毛衬里',
        '系带设计',
        '精美绣花'
      ],
      styles: [
        '四季款式',
        '节日款式',
        '贵族款式',
        '猎装款式'
      ],
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (2).png'
    },
    {
      id: 'boots',
      name: '蒙古靴（古德尔）',
      description: '蒙古靴是适应草原生活的实用鞋履，其造型独特，装饰华美。',
      features: [
        '翘头设计',
        '高帮保护',
        '皮革材质',
        '刺绣装饰'
      ],
      styles: [
        '男式款型',
        '女式款型',
        '儿童款型',
        '表演专用'
      ],
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (3).png'
    }
  ];

  return (
    <MongolianLayout
      title="传统服饰"
      subtitle="领略蒙古族服饰文化的独特魅力"
    >
      <div className="space-y-16">
        {costumes.map((costume) => (
          <div 
            key={costume.id}
            className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-2xl border border-[var(--border-color)]/20 shadow-xl overflow-hidden"
          >
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-80 md:h-full">
                <Image
                  src={costume.imageUrl}
                  alt={costume.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-4xl font-bold text-white font-['FangSong'] drop-shadow-lg">
                    {costume.name}
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <p className="text-[var(--foreground)]/80 font-['SimSun'] leading-relaxed mb-8">
                  {costume.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[var(--accent-green)] font-['FangSong']">
                      服饰特点
                    </h3>
                    <ul className="space-y-2">
                      {costume.features.map((feature, index) => (
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
                      款式类型
                    </h3>
                    <ul className="space-y-2">
                      {costume.styles.map((style, index) => (
                        <li 
                          key={index}
                          className="flex items-center space-x-2 text-[var(--foreground)]/80 font-['SimSun']"
                        >
                          <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]"></span>
                          <span>{style}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 服饰文化价值 */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: '文化象征',
              content: '传统服饰是蒙古族文化的重要标志，体现了独特的民族特色。'
            },
            {
              title: '实用价值',
              content: '服饰设计充分考虑了草原生活的需求，展现了实用与美观的统一。'
            },
            {
              title: '艺术价值',
              content: '精美的刺绣和装饰展现了蒙古族独特的审美观念和工艺水平。'
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