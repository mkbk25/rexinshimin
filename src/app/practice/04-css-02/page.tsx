"use client";
import MongolianLayout from '@/app/components/layout';
import Image from 'next/image';

export default function Page() {
  const foods = [
    {
      id: 'mutton',
      name: '手扒肉',
      description: '最具代表性的蒙古族传统美食，选用上等羊肉，经过特殊工艺烹制，口感鲜美。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风.png',
      features: [
        '选用优质羊肉',
        '传统烹饪工艺',
        '配以蒜片和葱花',
        '讲究食用礼仪'
      ]
    },
    {
      id: 'milk-tea',
      name: '奶茶',
      description: '蒙古族待客必备饮品，采用新鲜牛奶或羊奶，配以上等砖茶，体现草原人民的热情好客。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (1).png',
      features: [
        '新鲜牛羊奶',
        '上等砖茶',
        '传统熬制方法',
        '独特饮用习俗'
      ]
    },
    {
      id: 'dairy',
      name: '奶制品',
      description: '包括奶豆腐、奶皮子、奶酪等，是蒙古族游牧生活的重要组成部分。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (2).png',
      features: [
        '天然发酵',
        '营养丰富',
        '保存方便',
        '品种多样'
      ]
    }
  ];

  return (
    <MongolianLayout
      title="草原美食文化"
      subtitle="品味蒙古族传统饮食的独特魅力"
    >
      <div className="space-y-16">
        {foods.map((food) => (
          <div 
            key={food.id}
            className="group relative bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2 relative h-80">
                <Image
                  src={food.imageUrl}
                  alt={food.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 space-y-2">
                  <h2 className="text-4xl font-bold text-white font-['FangSong'] drop-shadow-lg">
                    {food.name}
                  </h2>
                </div>
              </div>
              
              <div className="p-8 md:w-1/2">
                <div className="prose prose-lg">
                  <p className="text-[var(--foreground)]/80 font-['SimSun'] leading-relaxed text-lg mb-6">
                    {food.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[var(--accent-green)] font-['FangSong']">
                      特色亮点
                    </h3>
                    <ul className="grid grid-cols-2 gap-4">
                      {food.features.map((feature, index) => (
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
          </div>
        ))}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl p-6">
            <h3 className="text-xl font-bold text-[var(--accent-green)] mb-4 font-['FangSong']">
              饮食习俗
            </h3>
            <p className="text-[var(--foreground)]/80 font-['SimSun']">
              蒙古族饮食讲究礼仪，体现了对自然和食物的尊重，以及人与人之间的情谊。
            </p>
          </div>
          
          <div className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl p-6">
            <h3 className="text-xl font-bold text-[var(--accent-green)] mb-4 font-['FangSong']">
              制作工艺
            </h3>
            <p className="text-[var(--foreground)]/80 font-['SimSun']">
              传统美食的制作过程凝聚着草原人民的智慧，每道工序都传承着独特的技艺。
            </p>
          </div>
          
          <div className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl p-6">
            <h3 className="text-xl font-bold text-[var(--accent-green)] mb-4 font-['FangSong']">
              文化传承
            </h3>
            <p className="text-[var(--foreground)]/80 font-['SimSun']">
              美食不仅是果腹之需，更是蒙古族文化的重要组成部分，承载着深厚的文化内涵。
            </p>
          </div>
        </div>
      </div>
    </MongolianLayout>
  );
} 