export default function PageHero({ bgClass }: { bgClass: string }) {
  return (
    <div className={`h-[300px] ${bgClass} bg-cover bg-center`}>
      <div className="bg-cyan-600 opacity-60 w-full h-full"></div>
    </div>
  );
}
