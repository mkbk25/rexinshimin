import { Suspense } from 'react';

async function getWakaTimeStats() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    console.error("WakaTime API key is not set.");
    return "API Key Not Configured";
  }

  try {
    const url = `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${apiKey}`;
    
    const response = await fetch(
      url,
      {
        next: {
          revalidate: 3600, // 每小时重新获取一次数据
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WakaTime API request failed with status: ${response.status}`);
      console.error(`WakaTime API error response: ${errorText}`);
      return "Error Fetching Data";
    }

    const stats = await response.json();
    return stats.data?.text || "暂无数据";
  } catch (error) {
    console.error("Failed to fetch WakaTime stats:", error);
    return "服务器错误";
  }
}

async function WakaTimeData() {
    const stats = await getWakaTimeStats();
    return (
        <p className="flex items-center justify-center gap-2 text-[var(--foreground)]/70">
            <span className="text-lg">🕒</span>
            浏览时长: <span className="font-semibold text-[var(--accent-green)]">{stats}</span>
        </p>
    );
}

export default function WakaTimeStats() {
  return (
    <footer className="relative text-[var(--foreground)]/80 text-center py-8 mt-auto w-full z-10 bg-[var(--background)]/50 backdrop-blur-sm border-t border-[var(--border-color)]/20">
        <div className="container mx-auto px-4">
            <p className="mb-4 font-['FangSong'] text-lg">&copy; {new Date().getFullYear()} 内蒙古草原文化展示平台</p>
            <Suspense fallback={
                <p className="flex items-center justify-center gap-2">
                    <span className="text-lg">⌛</span>
                    正在加载浏览数据...
                </p>
            }>
                <WakaTimeData />
            </Suspense>
            <p className="mt-4 text-sm opacity-70 font-['SimSun']">传承民族文化 · 弘扬草原精神</p>
        </div>
    </footer>
  );
} 