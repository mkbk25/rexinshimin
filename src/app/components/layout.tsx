import { ReactNode } from 'react';
import { MongolianNavbar } from '../navbar';

interface LayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  showDecoration?: boolean;
  fullWidth?: boolean;
}

const DecorativePattern = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-[200px] bg-[url('/patterns/top-pattern.svg')] bg-repeat-x opacity-10"></div>
    <div className="absolute bottom-0 left-0 w-full h-[200px] bg-[url('/patterns/bottom-pattern.svg')] bg-repeat-x opacity-10"></div>
    <div className="absolute left-0 top-0 h-full w-[150px] bg-[url('/patterns/left-pattern.svg')] bg-repeat-y opacity-10"></div>
    <div className="absolute right-0 top-0 h-full w-[150px] bg-[url('/patterns/right-pattern.svg')] bg-repeat-y opacity-10"></div>
  </div>
);

export default function MongolianLayout({ children, title, subtitle, showDecoration = true, fullWidth = false }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {showDecoration && (
        <>
          <div className="absolute top-0 left-0 w-full h-full mongolian-pattern opacity-5"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] opacity-10 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--primary-green)] via-[var(--secondary-green)] to-transparent rounded-full blur-3xl"></div>
          <DecorativePattern />
        </>
      )}

      <MongolianNavbar />

      <main className={`flex-grow w-full z-10 ${fullWidth ? 'px-0' : 'container mx-auto px-4'} py-12 pt-28`}>
        <header className={`text-center mb-12 relative ${fullWidth ? 'container mx-auto px-4' : ''}`}>
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-[var(--primary-green)]/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-[var(--secondary-green)]/30 rounded-full animate-pulse delay-75"></div>
              <div className="absolute inset-4 bg-[var(--accent-green)]/40 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[var(--accent-green)] to-[var(--primary-green)] mb-4 mt-12 font-['FangSong']">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-[var(--accent-green)]/80 max-w-2xl mx-auto tracking-wide font-['SimSun']">
              {subtitle}
            </p>
          )}
        </header>

        <div className="relative w-full">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--primary-green)]/5 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--accent-green)]/5 rounded-full blur-2xl"></div>
          {children}
        </div>
      </main>

      <footer className="w-full bg-[var(--primary-green)]/10 backdrop-blur-sm border-t border-[var(--border-color)]/20 py-6 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-[var(--foreground)]/70 font-['SimSun']">
            传承草原文化 · 探索技术之美
          </p>
        </div>
      </footer>
    </div>
  );
} 