export default function PageHero({ bgClass, children }: { bgClass: string, children?: JSX.Element }) {
  return (
    <div className={`h-[400px] ${bgClass} bg-cover bg-center relative`}>
      <div className="bg-cyan-900 opacity-70 w-full h-full"></div>
      {children && <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
      {children}
      </div>}
    </div>
  );
}
