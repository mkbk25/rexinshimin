"use client";
import MongolianLayout from '@/app/components/layout';
import Image from 'next/image';

export default function Page() {
  const dances = [
    {
      id: 'andai',
      name: '安代舞',
      description: '安代舞是蒙古族最具代表性的传统舞蹈之一，最早源于祭祀仪式，后发展为群众性舞蹈。',
      features: [
        '动作舒展',
        '节奏欢快',
        '队形变化',
        '表演性强'
      ],
      meanings: [
        '祈福驱邪',
        '欢庆丰收',
        '表达喜悦',
        '增进团结'
      ],
      imageUrl: '/practice/images/生成内蒙古特色卡通风.png'
    },
    {
      id: 'chopstick',
      name: '筷子舞',
      description: '筷子舞是蒙古族独特的民间舞蹈，以筷子敲击节奏，展现草原人民的欢乐生活。',
      features: [
        '道具特色',
        '节奏鲜明',
        '形式多样',
        '互动性强'
      ],
      meanings: [
        '生活欢乐',
        '民族团结',
        '技艺展示',
        '文化传承'
      ],
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (1).png'
    },
    {
      id: 'bowl',
      name: '碗碗舞',
      description: '碗碗舞是蒙古族传统宴会上的表演舞蹈，展现了蒙古族人民的豪爽和技艺。',
      features: [
        '碗盏叠放',
        '动作灵活',
        '技巧性强',
        '表演华丽'
      ],
      meanings: [
        '欢庆宴会',
        '展示技艺',
        '娱乐交流',
        '传承文化'
      ],
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (2).png'
    }
  ];

  return (
    <MongolianLayout
      title="传统舞蹈"
      subtitle="领略草原舞蹈的独特魅力"
    >
      <div className="space-y-16">
        {dances.map((dance) => (
          <div 
            key={dance.id}
            className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-2xl border border-[var(--border-color)]/20 shadow-xl overflow-hidden"
          >
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-80 md:h-full">
                <Image
                  src={dance.imageUrl}
                  alt={dance.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-4xl font-bold text-white font-['FangSong'] drop-shadow-lg">
                    {dance.name}
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <p className="text-[var(--foreground)]/80 font-['SimSun'] leading-relaxed mb-8">
                  {dance.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[var(--accent-green)] font-['FangSong']">
                      舞蹈特点
                    </h3>
                    <ul className="space-y-2">
                      {dance.features.map((feature, index) => (
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
                      文化内涵
                    </h3>
                    <ul className="space-y-2">
                      {dance.meanings.map((meaning, index) => (
                        <li 
                          key={index}
                          className="flex items-center space-x-2 text-[var(--foreground)]/80 font-['SimSun']"
                        >
                          <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]"></span>
                          <span>{meaning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 舞蹈文化价值 */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: '艺术价值',
              content: '传统舞蹈展现了蒙古族独特的艺术表现形式和审美追求。'
            },
            {
              title: '社会功能',
              content: '舞蹈活动增进了民族团结，丰富了群众文化生活。'
            },
            {
              title: '教育意义',
              content: '舞蹈传承中培养了年轻一代对传统文化的认同感。'
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