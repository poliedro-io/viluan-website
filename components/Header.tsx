import React from "react";

interface SectionProps {
  title: string;
  uppertitle: string;
  align: "left" | "center";
}

export default function Header({ uppertitle, title, align }: SectionProps) {
  const alignClass = `text-${align} items-${align}`;
  return (
    <div className={`flex flex-col gap-2 mb-10 ${alignClass}`}>
      <div className="font-semibold text-blue-800 uppercase">{uppertitle}</div>
      <div className="text-4xl font-bold text-gray-900">{title}</div>
    </div>
  );
}
