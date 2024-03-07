interface SectionProps {
  title: string;
  uppertitle?: string;
  align: "left" | "center";
  noMargin?: boolean
  white?: boolean;
}

export default function Header({
  uppertitle = "",
  white = false,
  noMargin = false,
  title,
  align,
}: SectionProps) {
  const alignClass = `text-${align} items-${align}`;
  return (
    <div className={`flex flex-col gap-2 ${!noMargin && 'mb-10'} ${alignClass}`}>
      <div className={`font-semibold ${white ? 'text-white' : 'text-blue-800'} uppercase`}>{uppertitle}</div>
      <div className={`text-4xl max-w-2xl font-bold ${white ? 'text-white' : 'text-gray-800'} text-balance`}>
        {title}
      </div>
    </div>
  );
}
