"use client";
import { useState } from 'react';

type SectionKey = '框架' | '围墙' | '顶部';
type Sections = Record<SectionKey, string>;

export default function MyAppDemo() {
  const [activeSection, setActiveSection] = useState<SectionKey>('框架');
  
  const sections: Sections = {
    '框架': '蒙古包的框架由木质支架组成，包括顶圈（托诺）、屋顶杆（乌尼）、墙壁杆（哈纳）等部分，整体呈圆顶形状。',
    '围墙': '蒙古包的围墙采用可折叠的格子墙（哈纳），既方便搭建和拆卸，又能保证结构的稳定性。',
    '顶部': '顶部中心有圆形天窗（托诺），既用于采光通风，也是蒙古包的重要文化象征。'
  };

  return (
    <div className="bg-[var(--primary-green)]/10 rounded-lg p-6">
      <div className="flex gap-4 mb-6">
        {(Object.keys(sections) as SectionKey[]).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-4 py-2 rounded-lg font-['SimSun'] transition-colors ${
              activeSection === section
                ? 'bg-[var(--accent-green)] text-white'
                : 'bg-[var(--primary-green)]/20 text-[var(--foreground)]/80 hover:bg-[var(--primary-green)]/30'
            }`}
          >
            {section}
          </button>
        ))}
      </div>
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 font-['SimSun'] text-[var(--foreground)]/80">
        {sections[activeSection]}
      </div>
    </div>
  );
} 