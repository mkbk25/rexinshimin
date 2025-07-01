'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 类和对象
    class Car {
      brand: string;
      model: string;
      year: number;
      constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
      }
      start() {
        console.log(`汽车 ${this.brand} ${this.model} 启动了`);
      }
      stop() {
        console.log(`汽车 ${this.brand} ${this.model} 停止了`);
      }
    }
    const myCar = new Car('Mi', 'Yu7', 2025);
    myCar.start();
    myCar.stop();

    class ElectricCar extends Car {
      range: number;
      constructor(brand: string, model: string, year: number, range: number) {
        super(brand, model, year);
        this.range = range;
      }
      charge() {
        console.log(`电动汽车 ${this.brand} ${this.model} 正在充电`);
      }
    }
    const myElectricCar = new ElectricCar('Tesla', 'Model Y', 2025, 300);
    myElectricCar.start();
    myElectricCar.charge();

    // 回调函数练习
    console.log('111111');
    setTimeout(function () {
      console.log('22222');
    }, 2000);
    console.log('333333');

    // DOM 操作
    if (divRef.current) {
      console.log(divRef.current);
      divRef.current.innerHTML = '这是从脚本动态更改的内容（点击我试试）';
      divRef.current.onclick = function () {
        alert('我也被点击了！');
      };
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#2C5364] via-[#203A43] to-[#0F2027] text-slate-100">
      {/* 蒙古族传统纹样背景 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-repeat" style={{
        backgroundImage: `url('/practice/images/生成内蒙古特色卡通风 (1).png')`,
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
            <li>页面加载后请按 F12 打开浏览器控制台，观察输出。</li>
            <li>你可以点击标题和下方内容，体验事件绑定与交互。</li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto bg-[#203A43]/50 backdrop-blur-sm rounded-xl border border-amber-700/30 shadow-2xl p-8 flex flex-col items-center">
          <div className="relative w-full max-w-lg mb-8">
            <Image
              src="/practice/images/生成内蒙古特色卡通风 (2).png"
              alt="Futuristic car"
              width={400}
              height={200}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mx-auto"
            />
            {/* 装饰元素 */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-amber-500/50"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-amber-500/50"></div>
          </div>

          <h1
            ref={h1Ref}
            style={{ cursor: 'pointer', transition: 'all 0.3s' }}
            onClick={() => alert('我被点击了！')}
            className="text-3xl font-bold mb-6 text-center text-amber-200 hover:text-amber-300 font-['FangSong'] relative group"
          >
            JavaScript 语法（点击我试试）
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h1>

          <div
            ref={divRef}
            className="text-lg text-slate-200 bg-[#203A43]/80 backdrop-blur-sm rounded-lg p-6 text-center cursor-pointer hover:bg-amber-900/40 transition-all duration-300 border border-amber-700/30 shadow-lg hover:shadow-amber-500/20 font-['SimSun'] w-full max-w-lg"
          >
            div content
          </div>
        </section>
      </main>
    </div>
  );
} 