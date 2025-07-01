import MongolianExerciseCard, { ExerciseCardProps } from "./exercise-card";
import exercisesData from './exercises.json';
import WakaTimeStats from "./wakatime-stats";
import { MongolianNavbar } from "./navbar";

const DecorativePattern = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-[200px] bg-[url('/patterns/top-pattern.svg')] bg-repeat-x opacity-10"></div>
    <div className="absolute bottom-0 left-0 w-full h-[200px] bg-[url('/patterns/bottom-pattern.svg')] bg-repeat-x opacity-10"></div>
    <div className="absolute left-0 top-0 h-full w-[150px] bg-[url('/patterns/left-pattern.svg')] bg-repeat-y opacity-10"></div>
    <div className="absolute right-0 top-0 h-full w-[150px] bg-[url('/patterns/right-pattern.svg')] bg-repeat-y opacity-10"></div>
  </div>
);

const FloatingElements = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute top-[10%] left-[5%] animate-float-slow">
      <span className="text-6xl opacity-20">🐎</span>
    </div>
    <div className="absolute top-[30%] right-[8%] animate-float-medium">
      <span className="text-5xl opacity-20">🏹</span>
    </div>
    <div className="absolute bottom-[20%] left-[15%] animate-float-fast">
      <span className="text-4xl opacity-20">🥛</span>
    </div>
    <div className="absolute bottom-[35%] right-[12%] animate-float-slow">
      <span className="text-5xl opacity-20">⛺</span>
        </div>
      </div>
  );

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full mongolian-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] opacity-10 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--primary-green)] via-[var(--secondary-green)] to-transparent rounded-full blur-3xl"></div>
      
      <DecorativePattern />
      <FloatingElements />
      
      <MongolianNavbar />

      <main className="flex-grow container mx-auto px-4 py-12 pt-28 w-full z-10">
        <header className="text-center mb-20 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-[var(--primary-green)]/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-[var(--secondary-green)]/30 rounded-full animate-pulse delay-75"></div>
              <div className="absolute inset-4 bg-[var(--accent-green)]/40 rounded-full animate-pulse delay-150"></div>
              <span className="absolute inset-0 flex items-center justify-center text-6xl">🏔️</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[var(--accent-green)] to-[var(--primary-green)] mb-6 drop-shadow-lg mt-16">
            内蒙古草原文化展示平台
          </h1>
          <p className="text-lg md:text-xl text-[var(--accent-green)] max-w-3xl mx-auto tracking-wide font-semibold">
            传承草原文明 · 弘扬蒙古文化
          </p>
          
          <div className="flex justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-[var(--foreground)]/70">
              <span className="text-2xl">🌿</span>
              <span className="font-['FangSong']">文化传承</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--foreground)]/70">
              <span className="text-2xl">🎵</span>
              <span className="font-['FangSong']">艺术展示</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--foreground)]/70">
              <span className="text-2xl">🏃</span>
              <span className="font-['FangSong']">活动体验</span>
            </div>
          </div>
        </header>

        <section className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--primary-green)]/5 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--accent-green)]/5 rounded-full blur-2xl"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {exercisesData.map((exercise: ExerciseCardProps) => (
              <MongolianExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                description={exercise.description}
                imageUrl={exercise.imageUrl}
                link={exercise.link}
                tags={exercise.tags}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full bg-[var(--primary-green)]/10 backdrop-blur-sm border-t border-[var(--border-color)]/20 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-12 mb-6">
            <div className="text-center">
              <p className="text-3xl mb-2">🎪</p>
              <p className="text-sm text-[var(--foreground)]/70">特色展示</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">🎭</p>
              <p className="text-sm text-[var(--foreground)]/70">文化体验</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">🌅</p>
              <p className="text-sm text-[var(--foreground)]/70">自然风光</p>
            </div>
          </div>
        </div>
      </footer>

      <WakaTimeStats />
    </div>
  );
}
