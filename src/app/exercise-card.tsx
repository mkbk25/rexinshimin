import Image from "next/image";
import Link from "next/link";

export interface ExerciseCardProps {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}

export default function MongolianExerciseCard({ title, description, imageUrl, link, tags }: ExerciseCardProps) {
  const cardContent = (
    <>
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title || '内蒙古文化展示'}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-green)]/60 via-transparent to-transparent"></div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 font-['FangSong']">{title}</h3>
        <p className="text-[var(--foreground)]/80 text-sm mb-4 h-20 overflow-y-auto flex-grow font-['SimSun']">{description}</p>
        {tags && tags.length > 0 && (
          <div className="mb-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-[var(--secondary-green)]/30 text-[var(--accent-green)] text-xs font-medium mr-2 px-3 py-1 rounded-full border border-[var(--primary-green)]/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto">
          <div className="font-medium text-[var(--accent-green)] group-hover:text-[var(--primary-green)] transition-colors duration-300 flex items-center">
            <span className="mr-2">了解更多</span>
            <span className="text-lg">🏃</span>
          </div>
        </div>
      </div>
    </>
  );

  const borderPattern = "before:content-[''] before:absolute before:inset-0 before:border-2 before:border-[var(--border-color)] before:rounded-lg before:opacity-0 before:transition-opacity group-hover:before:opacity-100";

  return (
    <div className={`relative group ${borderPattern}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)] rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
      <div className="relative bg-[var(--background)]/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-[var(--primary-green)]/30 group-hover:shadow-2xl">
        {link ? (
          <Link href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
            {cardContent}
          </Link>
        ) : (
          <div className="flex flex-col h-full">{cardContent}</div>
        )}
      </div>
    </div>
  );
} 