import Link from "next/link";
import Image from "next/image";

export function MongolianNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#8DC26F] bg-opacity-90 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-3">
                <Image 
                  src="/practice/images/生成内蒙古特色卡通风.png"
                  alt="Logo" 
                  width={24} 
                  height={24} 
                  className="rounded-sm"
                />
                <span className="text-white font-['FangSong'] text-lg">内蒙古草原文化展示平台首页</span>
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-white hover:text-green-100 transition-colors font-['FangSong'] text-lg px-4 py-2 rounded-md hover:bg-green-600/30"
              >
                草原首页
              </Link>
              <Link 
                href="/practice" 
                className="text-white hover:text-green-100 transition-colors font-['FangSong'] text-lg px-4 py-2 rounded-md hover:bg-green-600/30"
              >
                民族特色
              </Link>
              <Link 
                href="/archive" 
                className="text-white hover:text-green-100 transition-colors font-['FangSong'] text-lg px-4 py-2 rounded-md hover:bg-green-600/30"
              >
                文化展示
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 