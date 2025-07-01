"use client";
import Image from 'next/image';

export default function MyAppHello() {
  const decorations = [
    {
      title: '毡墙装饰',
      description: '蒙古包的毡墙上常绘有传统纹样，如云纹、回纹等，象征着吉祥如意。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风.png'
    },
    {
      title: '门饰文化',
      description: '蒙古包的门框上常有精美的雕刻和彩绘，体现了蒙古族人民对美好生活的向往。',
      imageUrl: '/practice/images/生成内蒙古特色卡通风 (1).png'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {decorations.map((item, index) => (
        <div key={index} className="bg-[var(--primary-green)]/10 rounded-lg overflow-hidden">
          <div className="relative h-48">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-[var(--accent-green)] mb-3 font-['FangSong']">{item.title}</h3>
            <p className="text-[var(--foreground)]/80 font-['SimSun']">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 