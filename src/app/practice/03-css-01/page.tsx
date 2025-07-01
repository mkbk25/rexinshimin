"use client";
import MongolianLayout from '@/app/components/layout';
import Image from 'next/image';

export default function Page() {
  const costumes = [
    {
      id: 'deel',
      title: '蒙古袍（德勒）',
      description: '蒙古族最具代表性的传统服饰，根据季节和场合有不同的款式和材质。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (1).png',
      features: ['立领设计', '右衽门襟', '传统腰带', '宽大袖口']
    },
    {
      id: 'hat',
      title: '蒙古帽（乌兰）',
      description: '具有保暖和装饰双重功能，帽顶装饰往往体现着佩戴者的身份和地位。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (2).png',
      features: ['圆顶设计', '翻边装饰', '丝绸衬里', '传统纹样']
    }
  ];

  return (
    <MongolianLayout
      title="传统服饰样式库"
      subtitle="探索蒙古族传统服饰的艺术之美"
    >
      <div className="space-y-12">
        {costumes.map((costume) => (
          <div 
            key={costume.id}
            className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src={costume.imageUrl}
                  alt={costume.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h2 className="text-2xl font-bold text-[var(--accent-green)] mb-4 font-['FangSong']">
                  {costume.title}
                </h2>
                <p className="text-[var(--foreground)]/80 mb-6 font-['SimSun']">
                  {costume.description}
                </p>
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[var(--accent-green)] font-['FangSong']">
                    特色元素
                  </h3>
                  <ul className="grid grid-cols-2 gap-3">
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
              </div>
            </div>
          </div>
        ))}

        <div className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-[var(--accent-green)] mb-6 font-['FangSong']">
            服饰色彩寓意
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { color: '白色', meaning: '纯洁、高贵', class: 'bg-white' },
              { color: '红色', meaning: '欢乐、热情', class: 'bg-red-500' },
              { color: '蓝色', meaning: '永恒、天空', class: 'bg-blue-500' }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-[var(--border-color)]/10"
              >
                <div className={`w-12 h-12 rounded-full ${item.class} mb-4 shadow-lg`}></div>
                <h3 className="text-lg font-bold text-[var(--accent-green)] mb-2 font-['FangSong']">
                  {item.color}
                </h3>
                <p className="text-[var(--foreground)]/80 font-['SimSun']">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MongolianLayout>
  );
} 