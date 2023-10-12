import { minutesToStringTime } from "@/utils";

interface AvailableHoursProps {
  hours: [number, number][];
  selectedHour: [number, number] | null;
  selectHour: (hour: [number, number]) => void;
}

export default function AvailableHours({
  hours,
  selectedHour,
  selectHour,
}: AvailableHoursProps) {
  const hoursAsString = hours.map((h) => ({
    label: h.map((t) => minutesToStringTime(t)).join(" - "),
    value: h,
  }));

  const isSelected = (h: [number, number]) =>
    h.toString() === selectedHour?.toString();

  return (
    <div className="flex flex-col gap-2 text-center md:h-[500px] overflow-y-auto p-2">
      {hoursAsString.map((h, i) => (
        <span
          onClick={() => selectHour(h.value)}
          className={`cursor-pointer border border-gray-300 rounded-md p-2  ${
            isSelected(h.value)
              ? "bg-primary-600 text-white"
              : "hover:bg-gray-100"
          }`}
          key={i}
        >
          {h.label}
        </span>
      ))}
    </div>
  );
}
