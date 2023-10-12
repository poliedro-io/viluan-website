import React, { useId } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: {
    value: string;
    label: string;
  }[];
}

export default function Select({
  label,
  name,
  placeholder,
  required,
  options,
  ...props
}: SelectProps) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="label">
        {label} {required && "*"}
      </label>

      <select
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        className="form-field"
        {...props}
      >
        <option disabled value="">
          -- Elija una opción --
        </option>
        {options.map(({ value, label }) => (
          <option key={`${id}-${value}`} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
