"use client";
import Image from 'next/image';
import MongolianLayout from '@/app/components/layout';
import MyAppDemo from "../my-app-demo";
import MyAppHello from "../my-app-hello";

export default function MyAppHome() {
  return (
    <MongolianLayout
      title="蒙古包3D展示"
      subtitle="探索传统建筑的智慧，感受游牧文化的精髓"
    >
      <div className="space-y-8">
        <section className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0">
            <Image 
              src="https://images.unsplash.com/photo-1601855016219-c16d2b87a114?q=80&w=2070" 
              alt="蒙古包实景" 
              width={300} 
              height={200} 
              className="rounded-lg shadow-lg" 
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--accent-green)] mb-4 font-['FangSong']">蒙古包简介</h2>
            <p className="text-[var(--foreground)]/80 mb-4 font-['SimSun']">蒙古包是草原游牧民族的传统住所，其独特的建筑结构体现了草原文化的智慧。通过3D技术，我们可以更直观地了解蒙古包的构造特点。</p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-[var(--primary-green)]/20 text-[var(--accent-green)] px-3 py-1 rounded text-sm font-['SimSun']">传统建筑</span>
              <span className="bg-[var(--primary-green)]/20 text-[var(--accent-green)] px-3 py-1 rounded text-sm font-['SimSun']">3D展示</span>
              <span className="bg-[var(--primary-green)]/20 text-[var(--accent-green)] px-3 py-1 rounded text-sm font-['SimSun']">文化传承</span>
            </div>
          </div>
        </section>

        <section className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-[var(--accent-green)] mb-6 font-['FangSong']">结构展示</h2>
          <div className="space-y-6">
            <MyAppDemo />
            <MyAppHello />
          </div>
        </section>
      </div>
    </MongolianLayout>
  );
} 