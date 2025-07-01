"use client";
import MongolianLayout from '@/app/components/layout';

export default function EmbedDemoPage() {
  return (
    <MongolianLayout 
      title="草原智慧问答系统" 
      subtitle="探索内蒙古文化知识，智能解答您的疑问"
      fullWidth
    >
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 mb-6">
          <div className="bg-[var(--primary-green)]/5 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 shadow-xl p-6">
            <h2 className="text-xl font-bold text-[var(--accent-green)] mb-4 font-['FangSong']">系统说明</h2>
            <ul className="list-disc list-inside text-[var(--foreground)]/80 space-y-2 font-['SimSun']">
              <li>本系统集成了智能问答服务，为您提供内蒙古文化知识解答。</li>
              <li>采用传统与现代结合的界面设计，打造沉浸式体验。</li>
              <li>请在下方问答区域输入您的问题，探索草原文化的魅力。</li>
            </ul>
          </div>
        </div>
        
        <div className="w-full h-[calc(100vh-400px)] min-h-[600px]">
          <iframe
            src="https://ai.youdao.com/saas/qanything/#/home"
            title="草原智慧问答系统"
            className="w-full h-full"
            style={{
              border: 'none'
            }}
            allowFullScreen
          />
        </div>
      </div>
    </MongolianLayout>
  );
} 