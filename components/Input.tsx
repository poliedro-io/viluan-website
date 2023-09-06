import React, { useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({
  label,
  name,
  placeholder,
  type = "text",
  required,
  ...props
}: InputProps) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="label">
        {label} {required && "*"}
      </label>
      <input
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        className="form-field"
        {...props}
      />
    </div>
  );
}
