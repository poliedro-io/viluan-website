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
    <div className="flex flex-col gap-2 text-center">
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

function minutesToStringTime(time: number) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `0${hours}`.slice(-2) + ":" + `0${minutes}`.slice(-2);
}
