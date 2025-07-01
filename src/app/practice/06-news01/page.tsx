'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // 类和对象
    class Student {
      name: string;
      age: number;
      school: string;
      grade: number;
      constructor(name: string, age: number, school: string, grade: number) {
        this.name = name;
        this.age = age;
        this.school = school;
        this.grade = grade;
      }
      learn(subject = '语文') {
        console.log(`${this.name}正在学习${subject}，真棒！`);
      }
      exam() {
        console.log(`${this.name} 正在考试`);
      }
    }
    const xiaoming = new Student('小明', 7, '实验小学', 1);
    xiaoming.learn('英语');
    xiaoming.exam();

    class Undergraduate extends Student {
      major: string;
      experience: number;
      constructor(name: string, age: number, school: string, grade: number, major: string, experience: number) {
        super(name, age, school, grade);
        this.major = major;
        this.experience = experience;
      }
      intern(corp: string) {
        console.log(`${this.name}在${corp}实习，获得经验值1000`);
        console.log(super.exam());
      }
    }
    const xiaoming2 = new Undergraduate('小明', 17, '科技大学', 1, '新闻学', 0);
    xiaoming2.intern('腾讯');

    // 回调函数，函数作为参数传递给另一个函数
    console.log('111111');
    setTimeout(function () { console.log('222222'); }, 1000);
    console.log('333333');

    // DOM 操作
    if (h1Ref.current) {
      console.log(h1Ref.current);
      h1Ref.current.innerHTML = '这是来自脚本的动态内容（可点击）';
      h1Ref.current.style.color = '#F6B352';
    }
    if (pRef.current) {
      pRef.current.onclick = function () {
        alert('你好啊！你点击了段落！');
      };
    }
    alert('页面加载完成');
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#2C5364] via-[#203A43] to-[#0F2027] text-slate-100">
      {/* 蒙古族传统纹样背景 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-repeat" style={{
        backgroundImage: `url('/practice/images/生成内蒙古特色卡通风 (2).png')`,
        backgroundSize: '200px',
        mixBlendMode: 'overlay'
      }}></div>

      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span className="font-['FangSong']">返回首页</span>
          </Link>
        </div>

        <section className="max-w-3xl mx-auto mb-10 bg-[#203A43]/60 backdrop-blur-sm rounded-xl border border-amber-700/30 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-amber-300 mb-4 font-['FangSong']">案例说明：类、继承、回调与DOM操作</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-2 font-['SimSun']">
            <li>本案例演示了 TypeScript 类、继承、回调函数、DOM 操作等基础知识。</li>
            <li>页面加载后会弹窗提示，并在控制台输出相关信息。</li>
            <li>你可以点击标题和段落，体验事件绑定与交互。</li>
            <li>请按 F12 打开浏览器控制台，观察输出。</li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto bg-[#203A43]/50 backdrop-blur-sm rounded-xl border border-amber-700/30 shadow-2xl p-8">
          <h1
            ref={h1Ref}
            style={{ cursor: 'pointer', transition: 'all 0.3s' }}
            onClick={() => alert('你点我干啥！')}
            className="text-3xl font-bold mb-6 text-center text-amber-200 hover:text-amber-300 font-['FangSong'] relative group"
          >
            这是一个标题的原始内容
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h1>

          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-lg mb-8">
              <Image
                src="/practice/images/生成内蒙古特色卡通风 (3).png"
                alt="Futuristic campus"
                width={400}
                height={200}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mx-auto"
              />
              {/* 装饰元素 */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-amber-500/50"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-amber-500/50"></div>
            </div>

            <p 
              ref={pRef} 
              className="text-lg text-slate-200 bg-[#203A43]/80 backdrop-blur-sm rounded-lg p-6 text-center cursor-pointer hover:bg-amber-900/40 transition-all duration-300 border border-amber-700/30 shadow-lg hover:shadow-amber-500/20 font-['SimSun'] w-full max-w-lg"
            >
              这是一个段落（点击我试试）
            </p>
          </div>
        </section>
      </main>
    </div>
  );
} 